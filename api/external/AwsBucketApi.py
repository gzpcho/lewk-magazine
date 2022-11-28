import os
import boto3

from botocore.client import Config

class AwsBucketApi:

    def __init__(self):
        self.bucket_name = os.getenv('S3_BUCKET_NAME')
        self.bucket_region = os.getenv('S3_BUCKET_REGION')
        self.s3 = boto3.client('s3',
            aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
            region_name=self.bucket_region,
            config=Config(signature_version='s3v4', s3={'addressing_style': 'path'})
        )

    def get_url(self, key):
        return f'https://{self.bucket_name}.s3.{self.s3.meta.region_name}.amazonaws.com/{key}'

    def upload_file_to_s3(self, file, filename):
        try:
            self.s3.upload_fileobj(
                Fileobj=file,
                Bucket=self.bucket_name,
                Key=filename,
            )
        except Exception as e:
            print("Something Happened: ", e)
            return e
        return {
            "url": self.get_url(filename)
        }