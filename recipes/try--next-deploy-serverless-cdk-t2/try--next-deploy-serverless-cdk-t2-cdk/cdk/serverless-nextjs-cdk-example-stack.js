'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ServerlessNextjsCdkExampleStack = void 0;
const cdk = __importStar(require('aws-cdk-lib'));
const cdk_construct_1 = require('@sls-next/cdk-construct');
class ServerlessNextjsCdkExampleStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const app = new cdk_construct_1.NextJSLambdaEdge(this, 'NextJsApp', {
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
exports.ServerlessNextjsCdkExampleStack = ServerlessNextjsCdkExampleStack;
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzcy1uZXh0anMtY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2ZXJsZXNzLW5leHRqcy1jZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBQ25DLDJEQUEyRDtBQUczRCxNQUFhLCtCQUFnQyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzVELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ2xELHFCQUFxQixFQUFFLFNBQVM7U0FDakMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDaEMsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixLQUFLLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVO1NBQ25DLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQzVCLFdBQVcsRUFBRSxnQkFBZ0I7WUFDN0IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYztTQUN2QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFmRCwwRUFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBOZXh0SlNMYW1iZGFFZGdlIH0gZnJvbSAnQHNscy1uZXh0L2Nkay1jb25zdHJ1Y3QnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJsZXNzTmV4dGpzQ2RrRXhhbXBsZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIGNvbnN0IGFwcCA9IG5ldyBOZXh0SlNMYW1iZGFFZGdlKHRoaXMsICdOZXh0SnNBcHAnLCB7XG4gICAgICBzZXJ2ZXJsZXNzQnVpbGRPdXREaXI6ICcuL2J1aWxkJyxcbiAgICB9KTtcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnRG9tYWluJywge1xuICAgICAgZGVzY3JpcHRpb246ICdDbG91ZEZyb250RG9tYWluJyxcbiAgICAgIHZhbHVlOiBhcHAuZGlzdHJpYnV0aW9uLmRvbWFpbk5hbWUsXG4gICAgfSk7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0lEJywge1xuICAgICAgZGVzY3JpcHRpb246ICdEaXN0cmlidXRpb25JRCcsXG4gICAgICB2YWx1ZTogYXBwLmRpc3RyaWJ1dGlvbi5kaXN0cmlidXRpb25JZCxcbiAgICB9KTtcbiAgfVxufVxuIl19
