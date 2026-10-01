import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { CONFIG } from '../config/credentials';

export class R2StorageService {
  private s3: S3Client;
  private bucketName: string;
  private endpoint: string;

  constructor() {
    this.bucketName = CONFIG.cloudflare.r2.bucketName;
    this.endpoint = CONFIG.cloudflare.r2.endpoint;
    this.s3 = new S3Client({
      region: 'auto',
      endpoint: this.endpoint,
      credentials: {
        accessKeyId: CONFIG.cloudflare.r2.accessKeyId,
        secretAccessKey: CONFIG.cloudflare.r2.secretAccessKey,
      },
    });
  }

  // Upload Buffer/Blob to R2
  public async uploadAsset(key: string, body: Buffer | Uint8Array | string, contentType: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
    });

    await this.s3.send(command);
    return {
      key,
      bucket: this.bucketName,
      url: `${this.endpoint}/${this.bucketName}/${key}`
    };
  }

  // Generate Presigned Download URL
  public async getPresignedUrl(key: string, expiresIn = 3600) {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    return getSignedUrl(this.s3, command, { expiresIn });
  }

  // List Objects in Bucket
  public async listAssets(prefix?: string, maxKeys = 50) {
    const command = new ListObjectsV2Command({
      Bucket: this.bucketName,
      Prefix: prefix,
      MaxKeys: maxKeys,
    });
    const response = await this.s3.send(command);
    return response.Contents || [];
  }
}

export const r2StorageService = new R2StorageService();
