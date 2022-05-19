#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StarterStack } from '../lib/StarterStack';

const app = new cdk.App();
new StarterStack(app, 'try--next-deploy-ec2-nginx-app', {
  stackName: 'try--next-deploy-ec2-nginx-app',
});
