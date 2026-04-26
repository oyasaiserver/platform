"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap = exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentStagesList = exports.DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap = exports.DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference = exports.DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference = exports.DataCloudflarePagesProjectBuildConfigOutputReference = void 0;
exports.DataCloudflarePagesProject = exports.DataCloudflarePagesProjectSourceOutputReference = exports.DataCloudflarePagesProjectSourceConfigOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentStagesList = exports.DataCloudflarePagesProjectLatestDeploymentStagesOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentSourceOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentEnvVarsMap = exports.DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference = exports.DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap = exports.DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference = exports.DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap = void 0;
exports.dataCloudflarePagesProjectBuildConfigToTerraform = dataCloudflarePagesProjectBuildConfigToTerraform;
exports.dataCloudflarePagesProjectBuildConfigToHclTerraform = dataCloudflarePagesProjectBuildConfigToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToTerraform = dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform = dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToTerraform = dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToTerraform = dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentLatestStageToTerraform = dataCloudflarePagesProjectCanonicalDeploymentLatestStageToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentLatestStageToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentLatestStageToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToTerraform = dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentSourceToTerraform = dataCloudflarePagesProjectCanonicalDeploymentSourceToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentSourceToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentSourceToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentStagesToTerraform = dataCloudflarePagesProjectCanonicalDeploymentStagesToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentStagesToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentStagesToHclTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentToTerraform = dataCloudflarePagesProjectCanonicalDeploymentToTerraform;
exports.dataCloudflarePagesProjectCanonicalDeploymentToHclTerraform = dataCloudflarePagesProjectCanonicalDeploymentToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewToTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsPreviewToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsPreviewToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionServicesToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionServicesToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionServicesToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionServicesToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionToTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsProductionToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsProductionToHclTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsToTerraform = dataCloudflarePagesProjectDeploymentConfigsToTerraform;
exports.dataCloudflarePagesProjectDeploymentConfigsToHclTerraform = dataCloudflarePagesProjectDeploymentConfigsToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentBuildConfigToTerraform = dataCloudflarePagesProjectLatestDeploymentBuildConfigToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentBuildConfigToHclTerraform = dataCloudflarePagesProjectLatestDeploymentBuildConfigToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform = dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform = dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToTerraform = dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToHclTerraform = dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentEnvVarsToTerraform = dataCloudflarePagesProjectLatestDeploymentEnvVarsToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentEnvVarsToHclTerraform = dataCloudflarePagesProjectLatestDeploymentEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentLatestStageToTerraform = dataCloudflarePagesProjectLatestDeploymentLatestStageToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentLatestStageToHclTerraform = dataCloudflarePagesProjectLatestDeploymentLatestStageToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentSourceConfigToTerraform = dataCloudflarePagesProjectLatestDeploymentSourceConfigToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentSourceConfigToHclTerraform = dataCloudflarePagesProjectLatestDeploymentSourceConfigToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentSourceToTerraform = dataCloudflarePagesProjectLatestDeploymentSourceToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentSourceToHclTerraform = dataCloudflarePagesProjectLatestDeploymentSourceToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentStagesToTerraform = dataCloudflarePagesProjectLatestDeploymentStagesToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentStagesToHclTerraform = dataCloudflarePagesProjectLatestDeploymentStagesToHclTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentToTerraform = dataCloudflarePagesProjectLatestDeploymentToTerraform;
exports.dataCloudflarePagesProjectLatestDeploymentToHclTerraform = dataCloudflarePagesProjectLatestDeploymentToHclTerraform;
exports.dataCloudflarePagesProjectSourceConfigToTerraform = dataCloudflarePagesProjectSourceConfigToTerraform;
exports.dataCloudflarePagesProjectSourceConfigToHclTerraform = dataCloudflarePagesProjectSourceConfigToHclTerraform;
exports.dataCloudflarePagesProjectSourceToTerraform = dataCloudflarePagesProjectSourceToTerraform;
exports.dataCloudflarePagesProjectSourceToHclTerraform = dataCloudflarePagesProjectSourceToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePagesProjectBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectBuildConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectBuildConfigOutputReference = DataCloudflarePagesProjectBuildConfigOutputReference;
function dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference = DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference;
function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitDirty", {
        // commit_dirty - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('commit_dirty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitHash", {
        // commit_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitMessage", {
        // commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference = DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(_this, "metadata");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference = DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference;
function dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference = DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference;
var DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap = DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap;
function dataCloudflarePagesProjectCanonicalDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference = DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference;
function dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference = DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference;
function dataCloudflarePagesProjectCanonicalDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference = DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference;
function dataCloudflarePagesProjectCanonicalDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference = DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference;
var DataCloudflarePagesProjectCanonicalDeploymentStagesList = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentStagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectCanonicalDeploymentStagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePagesProjectCanonicalDeploymentStagesList.prototype.get = function (index) {
        return new DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePagesProjectCanonicalDeploymentStagesList;
}(cdktf.ComplexList));
exports.DataCloudflarePagesProjectCanonicalDeploymentStagesList = DataCloudflarePagesProjectCanonicalDeploymentStagesList;
function dataCloudflarePagesProjectCanonicalDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectCanonicalDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectCanonicalDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectCanonicalDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectCanonicalDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference(_this, "build_config");
        // deployment_trigger - computed: true, optional: false, required: false
        _this._deploymentTrigger = new DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(_this, "deployment_trigger");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap(_this, "env_vars");
        // latest_stage - computed: true, optional: false, required: false
        _this._latestStage = new DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference(_this, "latest_stage");
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference(_this, "source");
        // stages - computed: true, optional: false, required: false
        _this._stages = new DataCloudflarePagesProjectCanonicalDeploymentStagesList(_this, "stages", false);
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "aliases", {
        // aliases - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aliases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "deploymentTrigger", {
        get: function () {
            return this._deploymentTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "isSkipped", {
        // is_skipped - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_skipped');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "latestStage", {
        get: function () {
            return this._latestStage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "projectName", {
        // project_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "shortId", {
        // short_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('short_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectCanonicalDeploymentOutputReference.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectCanonicalDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectCanonicalDeploymentOutputReference = DataCloudflarePagesProjectCanonicalDeploymentOutputReference;
function dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap = DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap = DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap = DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap = DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap = DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap = DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap = DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference.prototype, "cpuMs", {
        // cpu_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference;
function dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap = DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference;
function dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap = DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap = DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap = DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference.prototype, "indexName", {
        // index_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('index_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap = DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap;
function dataCloudflarePagesProjectDeploymentConfigsPreviewToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsPreviewToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ai_bindings - computed: true, optional: false, required: false
        _this._aiBindings = new DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap(_this, "ai_bindings");
        // analytics_engine_datasets - computed: true, optional: false, required: false
        _this._analyticsEngineDatasets = new DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(_this, "analytics_engine_datasets");
        // browsers - computed: true, optional: false, required: false
        _this._browsers = new DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap(_this, "browsers");
        // d1_databases - computed: true, optional: false, required: false
        _this._d1Databases = new DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap(_this, "d1_databases");
        // durable_object_namespaces - computed: true, optional: false, required: false
        _this._durableObjectNamespaces = new DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(_this, "durable_object_namespaces");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap(_this, "env_vars");
        // hyperdrive_bindings - computed: true, optional: false, required: false
        _this._hyperdriveBindings = new DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(_this, "hyperdrive_bindings");
        // kv_namespaces - computed: true, optional: false, required: false
        _this._kvNamespaces = new DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap(_this, "kv_namespaces");
        // limits - computed: true, optional: false, required: false
        _this._limits = new DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference(_this, "limits");
        // mtls_certificates - computed: true, optional: false, required: false
        _this._mtlsCertificates = new DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(_this, "mtls_certificates");
        // placement - computed: true, optional: false, required: false
        _this._placement = new DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference(_this, "placement");
        // queue_producers - computed: true, optional: false, required: false
        _this._queueProducers = new DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap(_this, "queue_producers");
        // r2_buckets - computed: true, optional: false, required: false
        _this._r2Buckets = new DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap(_this, "r2_buckets");
        // services - computed: true, optional: false, required: false
        _this._services = new DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap(_this, "services");
        // vectorize_bindings - computed: true, optional: false, required: false
        _this._vectorizeBindings = new DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(_this, "vectorize_bindings");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "aiBindings", {
        get: function () {
            return this._aiBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "alwaysUseLatestCompatibilityDate", {
        // always_use_latest_compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('always_use_latest_compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "analyticsEngineDatasets", {
        get: function () {
            return this._analyticsEngineDatasets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "browsers", {
        get: function () {
            return this._browsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "buildImageMajorVersion", {
        // build_image_major_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('build_image_major_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "compatibilityDate", {
        // compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "compatibilityFlags", {
        // compatibility_flags - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('compatibility_flags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "d1Databases", {
        get: function () {
            return this._d1Databases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "durableObjectNamespaces", {
        get: function () {
            return this._durableObjectNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "failOpen", {
        // fail_open - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fail_open');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "hyperdriveBindings", {
        get: function () {
            return this._hyperdriveBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "kvNamespaces", {
        get: function () {
            return this._kvNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "mtlsCertificates", {
        get: function () {
            return this._mtlsCertificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "queueProducers", {
        get: function () {
            return this._queueProducers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "r2Buckets", {
        get: function () {
            return this._r2Buckets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "services", {
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "usageModel", {
        // usage_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "vectorizeBindings", {
        get: function () {
            return this._vectorizeBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference.prototype, "wranglerConfigHash", {
        // wrangler_config_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wrangler_config_hash');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference = DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference;
function dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap = DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap = DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap = DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap = DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap = DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap = DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap = DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap = DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference.prototype, "cpuMs", {
        // cpu_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference;
function dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap = DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference;
function dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap = DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap = DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap = DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference.prototype, "indexName", {
        // index_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('index_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference;
var DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap = DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap;
function dataCloudflarePagesProjectDeploymentConfigsProductionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsProductionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ai_bindings - computed: true, optional: false, required: false
        _this._aiBindings = new DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap(_this, "ai_bindings");
        // analytics_engine_datasets - computed: true, optional: false, required: false
        _this._analyticsEngineDatasets = new DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(_this, "analytics_engine_datasets");
        // browsers - computed: true, optional: false, required: false
        _this._browsers = new DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap(_this, "browsers");
        // d1_databases - computed: true, optional: false, required: false
        _this._d1Databases = new DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap(_this, "d1_databases");
        // durable_object_namespaces - computed: true, optional: false, required: false
        _this._durableObjectNamespaces = new DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(_this, "durable_object_namespaces");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap(_this, "env_vars");
        // hyperdrive_bindings - computed: true, optional: false, required: false
        _this._hyperdriveBindings = new DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(_this, "hyperdrive_bindings");
        // kv_namespaces - computed: true, optional: false, required: false
        _this._kvNamespaces = new DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap(_this, "kv_namespaces");
        // limits - computed: true, optional: false, required: false
        _this._limits = new DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference(_this, "limits");
        // mtls_certificates - computed: true, optional: false, required: false
        _this._mtlsCertificates = new DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap(_this, "mtls_certificates");
        // placement - computed: true, optional: false, required: false
        _this._placement = new DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference(_this, "placement");
        // queue_producers - computed: true, optional: false, required: false
        _this._queueProducers = new DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap(_this, "queue_producers");
        // r2_buckets - computed: true, optional: false, required: false
        _this._r2Buckets = new DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap(_this, "r2_buckets");
        // services - computed: true, optional: false, required: false
        _this._services = new DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap(_this, "services");
        // vectorize_bindings - computed: true, optional: false, required: false
        _this._vectorizeBindings = new DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap(_this, "vectorize_bindings");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "aiBindings", {
        get: function () {
            return this._aiBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "alwaysUseLatestCompatibilityDate", {
        // always_use_latest_compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('always_use_latest_compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "analyticsEngineDatasets", {
        get: function () {
            return this._analyticsEngineDatasets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "browsers", {
        get: function () {
            return this._browsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "buildImageMajorVersion", {
        // build_image_major_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('build_image_major_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "compatibilityDate", {
        // compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "compatibilityFlags", {
        // compatibility_flags - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('compatibility_flags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "d1Databases", {
        get: function () {
            return this._d1Databases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "durableObjectNamespaces", {
        get: function () {
            return this._durableObjectNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "failOpen", {
        // fail_open - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fail_open');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "hyperdriveBindings", {
        get: function () {
            return this._hyperdriveBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "kvNamespaces", {
        get: function () {
            return this._kvNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "mtlsCertificates", {
        get: function () {
            return this._mtlsCertificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "queueProducers", {
        get: function () {
            return this._queueProducers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "r2Buckets", {
        get: function () {
            return this._r2Buckets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "services", {
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "usageModel", {
        // usage_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "vectorizeBindings", {
        get: function () {
            return this._vectorizeBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference.prototype, "wranglerConfigHash", {
        // wrangler_config_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wrangler_config_hash');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference = DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference;
function dataCloudflarePagesProjectDeploymentConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectDeploymentConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectDeploymentConfigsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectDeploymentConfigsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectDeploymentConfigsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // preview - computed: true, optional: false, required: false
        _this._preview = new DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference(_this, "preview");
        // production - computed: true, optional: false, required: false
        _this._production = new DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference(_this, "production");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsOutputReference.prototype, "preview", {
        get: function () {
            return this._preview;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectDeploymentConfigsOutputReference.prototype, "production", {
        get: function () {
            return this._production;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectDeploymentConfigsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectDeploymentConfigsOutputReference = DataCloudflarePagesProjectDeploymentConfigsOutputReference;
function dataCloudflarePagesProjectLatestDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference = DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference;
function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitDirty", {
        // commit_dirty - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('commit_dirty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitHash", {
        // commit_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitMessage", {
        // commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference = DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference;
function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(_this, "metadata");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference = DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference;
function dataCloudflarePagesProjectLatestDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference = DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference;
var DataCloudflarePagesProjectLatestDeploymentEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectLatestDeploymentEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectLatestDeploymentEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectLatestDeploymentEnvVarsMap = DataCloudflarePagesProjectLatestDeploymentEnvVarsMap;
function dataCloudflarePagesProjectLatestDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference = DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference;
function dataCloudflarePagesProjectLatestDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference = DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference;
function dataCloudflarePagesProjectLatestDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentSourceOutputReference = DataCloudflarePagesProjectLatestDeploymentSourceOutputReference;
function dataCloudflarePagesProjectLatestDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentStagesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentStagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectLatestDeploymentStagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentStagesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentStagesOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentStagesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentStagesOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentStagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentStagesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentStagesOutputReference = DataCloudflarePagesProjectLatestDeploymentStagesOutputReference;
var DataCloudflarePagesProjectLatestDeploymentStagesList = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentStagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectLatestDeploymentStagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePagesProjectLatestDeploymentStagesList.prototype.get = function (index) {
        return new DataCloudflarePagesProjectLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePagesProjectLatestDeploymentStagesList;
}(cdktf.ComplexList));
exports.DataCloudflarePagesProjectLatestDeploymentStagesList = DataCloudflarePagesProjectLatestDeploymentStagesList;
function dataCloudflarePagesProjectLatestDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectLatestDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectLatestDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectLatestDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectLatestDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference(_this, "build_config");
        // deployment_trigger - computed: true, optional: false, required: false
        _this._deploymentTrigger = new DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference(_this, "deployment_trigger");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectLatestDeploymentEnvVarsMap(_this, "env_vars");
        // latest_stage - computed: true, optional: false, required: false
        _this._latestStage = new DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference(_this, "latest_stage");
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflarePagesProjectLatestDeploymentSourceOutputReference(_this, "source");
        // stages - computed: true, optional: false, required: false
        _this._stages = new DataCloudflarePagesProjectLatestDeploymentStagesList(_this, "stages", false);
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "aliases", {
        // aliases - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aliases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "deploymentTrigger", {
        get: function () {
            return this._deploymentTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "isSkipped", {
        // is_skipped - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_skipped');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "latestStage", {
        get: function () {
            return this._latestStage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "projectName", {
        // project_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "shortId", {
        // short_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('short_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectLatestDeploymentOutputReference.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectLatestDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectLatestDeploymentOutputReference = DataCloudflarePagesProjectLatestDeploymentOutputReference;
function dataCloudflarePagesProjectSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectSourceConfigOutputReference = DataCloudflarePagesProjectSourceConfigOutputReference;
function dataCloudflarePagesProjectSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePagesProjectSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectSourceOutputReference = DataCloudflarePagesProjectSourceOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project cloudflare_pages_project}
*/
var DataCloudflarePagesProject = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProject, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project cloudflare_pages_project} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesProjectConfig
    */
    function DataCloudflarePagesProject(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pages_project',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new DataCloudflarePagesProjectBuildConfigOutputReference(_this, "build_config");
        // canonical_deployment - computed: true, optional: false, required: false
        _this._canonicalDeployment = new DataCloudflarePagesProjectCanonicalDeploymentOutputReference(_this, "canonical_deployment");
        // deployment_configs - computed: true, optional: false, required: false
        _this._deploymentConfigs = new DataCloudflarePagesProjectDeploymentConfigsOutputReference(_this, "deployment_configs");
        // latest_deployment - computed: true, optional: false, required: false
        _this._latestDeployment = new DataCloudflarePagesProjectLatestDeploymentOutputReference(_this, "latest_deployment");
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflarePagesProjectSourceOutputReference(_this, "source");
        _this._accountId = config.accountId;
        _this._projectName = config.projectName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesProject to import
    * @param importFromId The id of the existing DataCloudflarePagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesProject to import is found
    */
    DataCloudflarePagesProject.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_project", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePagesProject.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePagesProject.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePagesProject.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "canonicalDeployment", {
        get: function () {
            return this._canonicalDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "deploymentConfigs", {
        get: function () {
            return this._deploymentConfigs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "domains", {
        // domains - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('domains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "framework", {
        // framework - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('framework');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "frameworkVersion", {
        // framework_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('framework_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "latestDeployment", {
        get: function () {
            return this._latestDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "previewScriptName", {
        // preview_script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "productionScriptName", {
        // production_script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "projectName", {
        get: function () {
            return this.getStringAttribute('project_name');
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "projectNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "subdomain", {
        // subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProject.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePagesProject.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            project_name: cdktf.stringToTerraform(this._projectName),
        };
    };
    DataCloudflarePagesProject.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_name: {
                value: cdktf.stringToHclTerraform(this._projectName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflarePagesProject.tfResourceType = "cloudflare_pages_project";
    return DataCloudflarePagesProject;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePagesProject = DataCloudflarePagesProject;
