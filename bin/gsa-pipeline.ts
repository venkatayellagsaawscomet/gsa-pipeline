#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GsaPipelineStack } from '../lib/gsa-pipeline-stack';

const app = new cdk.App();
new GsaPipelineStack(app, 'GsaPipelineStack');
