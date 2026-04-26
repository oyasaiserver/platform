"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects
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
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference = exports.DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference = exports.DataCloudflarePagesProjectsResultBuildConfigOutputReference = void 0;
exports.DataCloudflarePagesProjects = exports.DataCloudflarePagesProjectsResultList = exports.DataCloudflarePagesProjectsResultOutputReference = exports.DataCloudflarePagesProjectsResultSourceOutputReference = exports.DataCloudflarePagesProjectsResultSourceConfigOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentStagesList = exports.DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap = exports.DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference = exports.DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference = exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap = void 0;
exports.dataCloudflarePagesProjectsResultBuildConfigToTerraform = dataCloudflarePagesProjectsResultBuildConfigToTerraform;
exports.dataCloudflarePagesProjectsResultBuildConfigToHclTerraform = dataCloudflarePagesProjectsResultBuildConfigToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToHclTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentToTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentToTerraform;
exports.dataCloudflarePagesProjectsResultCanonicalDeploymentToHclTerraform = dataCloudflarePagesProjectsResultCanonicalDeploymentToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsProductionToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsProductionToHclTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsToTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsToTerraform;
exports.dataCloudflarePagesProjectsResultDeploymentConfigsToHclTerraform = dataCloudflarePagesProjectsResultDeploymentConfigsToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentSourceToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentSourceToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentSourceToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentSourceToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentStagesToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentStagesToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentStagesToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentStagesToHclTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentToTerraform = dataCloudflarePagesProjectsResultLatestDeploymentToTerraform;
exports.dataCloudflarePagesProjectsResultLatestDeploymentToHclTerraform = dataCloudflarePagesProjectsResultLatestDeploymentToHclTerraform;
exports.dataCloudflarePagesProjectsResultSourceConfigToTerraform = dataCloudflarePagesProjectsResultSourceConfigToTerraform;
exports.dataCloudflarePagesProjectsResultSourceConfigToHclTerraform = dataCloudflarePagesProjectsResultSourceConfigToHclTerraform;
exports.dataCloudflarePagesProjectsResultSourceToTerraform = dataCloudflarePagesProjectsResultSourceToTerraform;
exports.dataCloudflarePagesProjectsResultSourceToHclTerraform = dataCloudflarePagesProjectsResultSourceToHclTerraform;
exports.dataCloudflarePagesProjectsResultToTerraform = dataCloudflarePagesProjectsResultToTerraform;
exports.dataCloudflarePagesProjectsResultToHclTerraform = dataCloudflarePagesProjectsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePagesProjectsResultBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultBuildConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultBuildConfigOutputReference = DataCloudflarePagesProjectsResultBuildConfigOutputReference;
function dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference;
function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitDirty", {
        // commit_dirty - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('commit_dirty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitHash", {
        // commit_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitMessage", {
        // commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference(_this, "metadata");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference;
function dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference;
var DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap = DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap;
function dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference;
function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference;
function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference;
function dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference;
var DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList.prototype.get = function (index) {
        return new DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList;
}(cdktf.ComplexList));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList = DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList;
function dataCloudflarePagesProjectsResultCanonicalDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultCanonicalDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference(_this, "build_config");
        // deployment_trigger - computed: true, optional: false, required: false
        _this._deploymentTrigger = new DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference(_this, "deployment_trigger");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap(_this, "env_vars");
        // latest_stage - computed: true, optional: false, required: false
        _this._latestStage = new DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference(_this, "latest_stage");
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference(_this, "source");
        // stages - computed: true, optional: false, required: false
        _this._stages = new DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList(_this, "stages", false);
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "aliases", {
        // aliases - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aliases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "deploymentTrigger", {
        get: function () {
            return this._deploymentTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "isSkipped", {
        // is_skipped - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_skipped');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "latestStage", {
        get: function () {
            return this._latestStage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "projectName", {
        // project_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "shortId", {
        // short_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('short_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference = DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference.prototype, "internalValue", {
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
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference.prototype, "cpuMs", {
        // cpu_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference.prototype, "indexName", {
        // index_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('index_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ai_bindings - computed: true, optional: false, required: false
        _this._aiBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap(_this, "ai_bindings");
        // analytics_engine_datasets - computed: true, optional: false, required: false
        _this._analyticsEngineDatasets = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(_this, "analytics_engine_datasets");
        // browsers - computed: true, optional: false, required: false
        _this._browsers = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap(_this, "browsers");
        // d1_databases - computed: true, optional: false, required: false
        _this._d1Databases = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap(_this, "d1_databases");
        // durable_object_namespaces - computed: true, optional: false, required: false
        _this._durableObjectNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap(_this, "durable_object_namespaces");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap(_this, "env_vars");
        // hyperdrive_bindings - computed: true, optional: false, required: false
        _this._hyperdriveBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap(_this, "hyperdrive_bindings");
        // kv_namespaces - computed: true, optional: false, required: false
        _this._kvNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap(_this, "kv_namespaces");
        // limits - computed: true, optional: false, required: false
        _this._limits = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference(_this, "limits");
        // mtls_certificates - computed: true, optional: false, required: false
        _this._mtlsCertificates = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap(_this, "mtls_certificates");
        // placement - computed: true, optional: false, required: false
        _this._placement = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference(_this, "placement");
        // queue_producers - computed: true, optional: false, required: false
        _this._queueProducers = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap(_this, "queue_producers");
        // r2_buckets - computed: true, optional: false, required: false
        _this._r2Buckets = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap(_this, "r2_buckets");
        // services - computed: true, optional: false, required: false
        _this._services = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap(_this, "services");
        // vectorize_bindings - computed: true, optional: false, required: false
        _this._vectorizeBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap(_this, "vectorize_bindings");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "aiBindings", {
        get: function () {
            return this._aiBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "alwaysUseLatestCompatibilityDate", {
        // always_use_latest_compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('always_use_latest_compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "analyticsEngineDatasets", {
        get: function () {
            return this._analyticsEngineDatasets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "browsers", {
        get: function () {
            return this._browsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "buildImageMajorVersion", {
        // build_image_major_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('build_image_major_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "compatibilityDate", {
        // compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "compatibilityFlags", {
        // compatibility_flags - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('compatibility_flags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "d1Databases", {
        get: function () {
            return this._d1Databases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "durableObjectNamespaces", {
        get: function () {
            return this._durableObjectNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "failOpen", {
        // fail_open - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fail_open');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "hyperdriveBindings", {
        get: function () {
            return this._hyperdriveBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "kvNamespaces", {
        get: function () {
            return this._kvNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "mtlsCertificates", {
        get: function () {
            return this._mtlsCertificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "queueProducers", {
        get: function () {
            return this._queueProducers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "r2Buckets", {
        get: function () {
            return this._r2Buckets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "services", {
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "usageModel", {
        // usage_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "vectorizeBindings", {
        get: function () {
            return this._vectorizeBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference.prototype, "wranglerConfigHash", {
        // wrangler_config_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wrangler_config_hash');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference.prototype, "internalValue", {
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
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference.prototype, "cpuMs", {
        // cpu_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference.prototype, "indexName", {
        // index_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('index_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference;
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap = DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap;
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsProductionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ai_bindings - computed: true, optional: false, required: false
        _this._aiBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap(_this, "ai_bindings");
        // analytics_engine_datasets - computed: true, optional: false, required: false
        _this._analyticsEngineDatasets = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap(_this, "analytics_engine_datasets");
        // browsers - computed: true, optional: false, required: false
        _this._browsers = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap(_this, "browsers");
        // d1_databases - computed: true, optional: false, required: false
        _this._d1Databases = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap(_this, "d1_databases");
        // durable_object_namespaces - computed: true, optional: false, required: false
        _this._durableObjectNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap(_this, "durable_object_namespaces");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap(_this, "env_vars");
        // hyperdrive_bindings - computed: true, optional: false, required: false
        _this._hyperdriveBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap(_this, "hyperdrive_bindings");
        // kv_namespaces - computed: true, optional: false, required: false
        _this._kvNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap(_this, "kv_namespaces");
        // limits - computed: true, optional: false, required: false
        _this._limits = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference(_this, "limits");
        // mtls_certificates - computed: true, optional: false, required: false
        _this._mtlsCertificates = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap(_this, "mtls_certificates");
        // placement - computed: true, optional: false, required: false
        _this._placement = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference(_this, "placement");
        // queue_producers - computed: true, optional: false, required: false
        _this._queueProducers = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap(_this, "queue_producers");
        // r2_buckets - computed: true, optional: false, required: false
        _this._r2Buckets = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap(_this, "r2_buckets");
        // services - computed: true, optional: false, required: false
        _this._services = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap(_this, "services");
        // vectorize_bindings - computed: true, optional: false, required: false
        _this._vectorizeBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap(_this, "vectorize_bindings");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "aiBindings", {
        get: function () {
            return this._aiBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "alwaysUseLatestCompatibilityDate", {
        // always_use_latest_compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('always_use_latest_compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "analyticsEngineDatasets", {
        get: function () {
            return this._analyticsEngineDatasets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "browsers", {
        get: function () {
            return this._browsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "buildImageMajorVersion", {
        // build_image_major_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('build_image_major_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "compatibilityDate", {
        // compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "compatibilityFlags", {
        // compatibility_flags - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('compatibility_flags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "d1Databases", {
        get: function () {
            return this._d1Databases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "durableObjectNamespaces", {
        get: function () {
            return this._durableObjectNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "failOpen", {
        // fail_open - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fail_open');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "hyperdriveBindings", {
        get: function () {
            return this._hyperdriveBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "kvNamespaces", {
        get: function () {
            return this._kvNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "mtlsCertificates", {
        get: function () {
            return this._mtlsCertificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "queueProducers", {
        get: function () {
            return this._queueProducers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "r2Buckets", {
        get: function () {
            return this._r2Buckets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "services", {
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "usageModel", {
        // usage_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "vectorizeBindings", {
        get: function () {
            return this._vectorizeBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference.prototype, "wranglerConfigHash", {
        // wrangler_config_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wrangler_config_hash');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference;
function dataCloudflarePagesProjectsResultDeploymentConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultDeploymentConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // preview - computed: true, optional: false, required: false
        _this._preview = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference(_this, "preview");
        // production - computed: true, optional: false, required: false
        _this._production = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference(_this, "production");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference.prototype, "preview", {
        get: function () {
            return this._preview;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference.prototype, "production", {
        get: function () {
            return this._production;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference = DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference;
function dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference;
function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitDirty", {
        // commit_dirty - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('commit_dirty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitHash", {
        // commit_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitMessage", {
        // commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference;
function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference(_this, "metadata");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference;
function dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference;
var DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap.prototype.get = function (key) {
        return new DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap;
}(cdktf.ComplexMap));
exports.DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap = DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap;
function dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference;
function dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference;
function dataCloudflarePagesProjectsResultLatestDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference;
function dataCloudflarePagesProjectsResultLatestDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference;
var DataCloudflarePagesProjectsResultLatestDeploymentStagesList = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentStagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentStagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePagesProjectsResultLatestDeploymentStagesList.prototype.get = function (index) {
        return new DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePagesProjectsResultLatestDeploymentStagesList;
}(cdktf.ComplexList));
exports.DataCloudflarePagesProjectsResultLatestDeploymentStagesList = DataCloudflarePagesProjectsResultLatestDeploymentStagesList;
function dataCloudflarePagesProjectsResultLatestDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultLatestDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultLatestDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultLatestDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference(_this, "build_config");
        // deployment_trigger - computed: true, optional: false, required: false
        _this._deploymentTrigger = new DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference(_this, "deployment_trigger");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap(_this, "env_vars");
        // latest_stage - computed: true, optional: false, required: false
        _this._latestStage = new DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference(_this, "latest_stage");
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference(_this, "source");
        // stages - computed: true, optional: false, required: false
        _this._stages = new DataCloudflarePagesProjectsResultLatestDeploymentStagesList(_this, "stages", false);
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "aliases", {
        // aliases - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aliases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "deploymentTrigger", {
        get: function () {
            return this._deploymentTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "isSkipped", {
        // is_skipped - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_skipped');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "latestStage", {
        get: function () {
            return this._latestStage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "projectName", {
        // project_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "shortId", {
        // short_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('short_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultLatestDeploymentOutputReference.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultLatestDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultLatestDeploymentOutputReference = DataCloudflarePagesProjectsResultLatestDeploymentOutputReference;
function dataCloudflarePagesProjectsResultSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultSourceConfigOutputReference = DataCloudflarePagesProjectsResultSourceConfigOutputReference;
function dataCloudflarePagesProjectsResultSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesProjectsResultSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePagesProjectsResultSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultSourceOutputReference = DataCloudflarePagesProjectsResultSourceOutputReference;
function dataCloudflarePagesProjectsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesProjectsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesProjectsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new DataCloudflarePagesProjectsResultBuildConfigOutputReference(_this, "build_config");
        // canonical_deployment - computed: true, optional: false, required: false
        _this._canonicalDeployment = new DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference(_this, "canonical_deployment");
        // deployment_configs - computed: true, optional: false, required: false
        _this._deploymentConfigs = new DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference(_this, "deployment_configs");
        // latest_deployment - computed: true, optional: false, required: false
        _this._latestDeployment = new DataCloudflarePagesProjectsResultLatestDeploymentOutputReference(_this, "latest_deployment");
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflarePagesProjectsResultSourceOutputReference(_this, "source");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "canonicalDeployment", {
        get: function () {
            return this._canonicalDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "deploymentConfigs", {
        get: function () {
            return this._deploymentConfigs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "domains", {
        // domains - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('domains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "framework", {
        // framework - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('framework');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "frameworkVersion", {
        // framework_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('framework_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "latestDeployment", {
        get: function () {
            return this._latestDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "previewScriptName", {
        // preview_script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "productionScriptName", {
        // production_script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "subdomain", {
        // subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjectsResultOutputReference.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesProjectsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesProjectsResultOutputReference = DataCloudflarePagesProjectsResultOutputReference;
var DataCloudflarePagesProjectsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjectsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesProjectsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePagesProjectsResultList.prototype.get = function (index) {
        return new DataCloudflarePagesProjectsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePagesProjectsResultList;
}(cdktf.ComplexList));
exports.DataCloudflarePagesProjectsResultList = DataCloudflarePagesProjectsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects cloudflare_pages_projects}
*/
var DataCloudflarePagesProjects = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesProjects, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects cloudflare_pages_projects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesProjectsConfig = {}
    */
    function DataCloudflarePagesProjects(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pages_projects',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflarePagesProjectsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesProjects resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesProjects to import
    * @param importFromId The id of the existing DataCloudflarePagesProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesProjects to import is found
    */
    DataCloudflarePagesProjects.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_projects", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePagesProjects.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePagesProjects.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePagesProjects.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjects.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePagesProjects.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflarePagesProjects.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesProjects.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePagesProjects.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflarePagesProjects.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflarePagesProjects.tfResourceType = "cloudflare_pages_projects";
    return DataCloudflarePagesProjects;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePagesProjects = DataCloudflarePagesProjects;
