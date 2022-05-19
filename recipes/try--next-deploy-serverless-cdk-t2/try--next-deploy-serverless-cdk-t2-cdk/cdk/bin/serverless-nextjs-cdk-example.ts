import './monkeycode';
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { Builder } from '@sls-next/lambda-at-edge';
import { ServerlessNextjsCdkExampleStack } from '../serverless-nextjs-cdk-example-stack';

// fixme path 조심
const builder = new Builder('../try--next-deploy-serverless-cdk-t2-next', './build', {
  args: ['workspace', 'try--next-deploy-serverless-cdk-t2-next', 'run', 'build'],
  cmd: 'yarn',
});

// todo async 로 변경
builder
  .build()
  .then(() => {
    const app = new App();
    new ServerlessNextjsCdkExampleStack(app, 'ServerlessNextjsCdkExampleStack', {
      stackName: 'try--next-deploy-serverless-cdk-t2',
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
