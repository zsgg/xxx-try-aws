import * as cdk from 'aws-cdk-lib';
import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import { Construct } from 'constructs';

export class ServerlessNextjsCdkExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const app = new NextJSLambdaEdge(this, 'NextJsApp', {
      // fixme path 조심
      serverlessBuildOutDir: './build',
    });
    new cdk.CfnOutput(this, 'Domain', {
      description: 'CloudFrontDomain',
      value: app.distribution.domainName,
    });
    new cdk.CfnOutput(this, 'ID', {
      description: 'DistributionID',
      value: app.distribution.distributionId,
    });
  }
}
