"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project
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
exports.PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference = exports.PagesProjectDeploymentConfigsProductionD1DatabasesMap = exports.PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference = exports.PagesProjectDeploymentConfigsProductionBrowsersMap = exports.PagesProjectDeploymentConfigsProductionBrowsersOutputReference = exports.PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap = exports.PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = exports.PagesProjectDeploymentConfigsProductionAiBindingsMap = exports.PagesProjectDeploymentConfigsProductionAiBindingsOutputReference = exports.PagesProjectDeploymentConfigsPreviewOutputReference = exports.PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap = exports.PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference = exports.PagesProjectDeploymentConfigsPreviewServicesMap = exports.PagesProjectDeploymentConfigsPreviewServicesOutputReference = exports.PagesProjectDeploymentConfigsPreviewR2BucketsMap = exports.PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference = exports.PagesProjectDeploymentConfigsPreviewQueueProducersMap = exports.PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference = exports.PagesProjectDeploymentConfigsPreviewPlacementOutputReference = exports.PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap = exports.PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference = exports.PagesProjectDeploymentConfigsPreviewLimitsOutputReference = exports.PagesProjectDeploymentConfigsPreviewKvNamespacesMap = exports.PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference = exports.PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap = exports.PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference = exports.PagesProjectDeploymentConfigsPreviewEnvVarsMap = exports.PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference = exports.PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap = exports.PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = exports.PagesProjectDeploymentConfigsPreviewD1DatabasesMap = exports.PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference = exports.PagesProjectDeploymentConfigsPreviewBrowsersMap = exports.PagesProjectDeploymentConfigsPreviewBrowsersOutputReference = exports.PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = exports.PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = exports.PagesProjectDeploymentConfigsPreviewAiBindingsMap = exports.PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference = exports.PagesProjectCanonicalDeploymentOutputReference = exports.PagesProjectCanonicalDeploymentStagesList = exports.PagesProjectCanonicalDeploymentStagesOutputReference = exports.PagesProjectCanonicalDeploymentSourceOutputReference = exports.PagesProjectCanonicalDeploymentSourceConfigOutputReference = exports.PagesProjectCanonicalDeploymentLatestStageOutputReference = exports.PagesProjectCanonicalDeploymentEnvVarsMap = exports.PagesProjectCanonicalDeploymentEnvVarsOutputReference = exports.PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference = exports.PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference = exports.PagesProjectCanonicalDeploymentBuildConfigOutputReference = exports.PagesProjectBuildConfigOutputReference = void 0;
exports.PagesProject = exports.PagesProjectSourceOutputReference = exports.PagesProjectSourceConfigOutputReference = exports.PagesProjectLatestDeploymentOutputReference = exports.PagesProjectLatestDeploymentStagesList = exports.PagesProjectLatestDeploymentStagesOutputReference = exports.PagesProjectLatestDeploymentSourceOutputReference = exports.PagesProjectLatestDeploymentSourceConfigOutputReference = exports.PagesProjectLatestDeploymentLatestStageOutputReference = exports.PagesProjectLatestDeploymentEnvVarsMap = exports.PagesProjectLatestDeploymentEnvVarsOutputReference = exports.PagesProjectLatestDeploymentDeploymentTriggerOutputReference = exports.PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference = exports.PagesProjectLatestDeploymentBuildConfigOutputReference = exports.PagesProjectDeploymentConfigsOutputReference = exports.PagesProjectDeploymentConfigsProductionOutputReference = exports.PagesProjectDeploymentConfigsProductionVectorizeBindingsMap = exports.PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference = exports.PagesProjectDeploymentConfigsProductionServicesMap = exports.PagesProjectDeploymentConfigsProductionServicesOutputReference = exports.PagesProjectDeploymentConfigsProductionR2BucketsMap = exports.PagesProjectDeploymentConfigsProductionR2BucketsOutputReference = exports.PagesProjectDeploymentConfigsProductionQueueProducersMap = exports.PagesProjectDeploymentConfigsProductionQueueProducersOutputReference = exports.PagesProjectDeploymentConfigsProductionPlacementOutputReference = exports.PagesProjectDeploymentConfigsProductionMtlsCertificatesMap = exports.PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference = exports.PagesProjectDeploymentConfigsProductionLimitsOutputReference = exports.PagesProjectDeploymentConfigsProductionKvNamespacesMap = exports.PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference = exports.PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap = exports.PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference = exports.PagesProjectDeploymentConfigsProductionEnvVarsMap = exports.PagesProjectDeploymentConfigsProductionEnvVarsOutputReference = exports.PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap = void 0;
exports.pagesProjectBuildConfigToTerraform = pagesProjectBuildConfigToTerraform;
exports.pagesProjectBuildConfigToHclTerraform = pagesProjectBuildConfigToHclTerraform;
exports.pagesProjectCanonicalDeploymentBuildConfigToTerraform = pagesProjectCanonicalDeploymentBuildConfigToTerraform;
exports.pagesProjectCanonicalDeploymentBuildConfigToHclTerraform = pagesProjectCanonicalDeploymentBuildConfigToHclTerraform;
exports.pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform = pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform;
exports.pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform = pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform;
exports.pagesProjectCanonicalDeploymentDeploymentTriggerToTerraform = pagesProjectCanonicalDeploymentDeploymentTriggerToTerraform;
exports.pagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform = pagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform;
exports.pagesProjectCanonicalDeploymentEnvVarsToTerraform = pagesProjectCanonicalDeploymentEnvVarsToTerraform;
exports.pagesProjectCanonicalDeploymentEnvVarsToHclTerraform = pagesProjectCanonicalDeploymentEnvVarsToHclTerraform;
exports.pagesProjectCanonicalDeploymentLatestStageToTerraform = pagesProjectCanonicalDeploymentLatestStageToTerraform;
exports.pagesProjectCanonicalDeploymentLatestStageToHclTerraform = pagesProjectCanonicalDeploymentLatestStageToHclTerraform;
exports.pagesProjectCanonicalDeploymentSourceConfigToTerraform = pagesProjectCanonicalDeploymentSourceConfigToTerraform;
exports.pagesProjectCanonicalDeploymentSourceConfigToHclTerraform = pagesProjectCanonicalDeploymentSourceConfigToHclTerraform;
exports.pagesProjectCanonicalDeploymentSourceToTerraform = pagesProjectCanonicalDeploymentSourceToTerraform;
exports.pagesProjectCanonicalDeploymentSourceToHclTerraform = pagesProjectCanonicalDeploymentSourceToHclTerraform;
exports.pagesProjectCanonicalDeploymentStagesToTerraform = pagesProjectCanonicalDeploymentStagesToTerraform;
exports.pagesProjectCanonicalDeploymentStagesToHclTerraform = pagesProjectCanonicalDeploymentStagesToHclTerraform;
exports.pagesProjectCanonicalDeploymentToTerraform = pagesProjectCanonicalDeploymentToTerraform;
exports.pagesProjectCanonicalDeploymentToHclTerraform = pagesProjectCanonicalDeploymentToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform = pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform;
exports.pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform = pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform = pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform;
exports.pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform = pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewBrowsersToTerraform = pagesProjectDeploymentConfigsPreviewBrowsersToTerraform;
exports.pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform = pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform = pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform;
exports.pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform = pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform = pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform;
exports.pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform = pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform = pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform;
exports.pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform = pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform = pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform;
exports.pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform = pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform = pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform;
exports.pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform = pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewLimitsToTerraform = pagesProjectDeploymentConfigsPreviewLimitsToTerraform;
exports.pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform = pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform = pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform;
exports.pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform = pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewPlacementToTerraform = pagesProjectDeploymentConfigsPreviewPlacementToTerraform;
exports.pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform = pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform = pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform;
exports.pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform = pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform = pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform;
exports.pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform = pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewServicesToTerraform = pagesProjectDeploymentConfigsPreviewServicesToTerraform;
exports.pagesProjectDeploymentConfigsPreviewServicesToHclTerraform = pagesProjectDeploymentConfigsPreviewServicesToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform = pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform;
exports.pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform = pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform;
exports.pagesProjectDeploymentConfigsPreviewToTerraform = pagesProjectDeploymentConfigsPreviewToTerraform;
exports.pagesProjectDeploymentConfigsPreviewToHclTerraform = pagesProjectDeploymentConfigsPreviewToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionAiBindingsToTerraform = pagesProjectDeploymentConfigsProductionAiBindingsToTerraform;
exports.pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform = pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform = pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform;
exports.pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform = pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionBrowsersToTerraform = pagesProjectDeploymentConfigsProductionBrowsersToTerraform;
exports.pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform = pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform = pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform;
exports.pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform = pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform = pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform;
exports.pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform = pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionEnvVarsToTerraform = pagesProjectDeploymentConfigsProductionEnvVarsToTerraform;
exports.pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform = pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform = pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform;
exports.pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform = pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform = pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform;
exports.pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform = pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionLimitsToTerraform = pagesProjectDeploymentConfigsProductionLimitsToTerraform;
exports.pagesProjectDeploymentConfigsProductionLimitsToHclTerraform = pagesProjectDeploymentConfigsProductionLimitsToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform = pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform;
exports.pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform = pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionPlacementToTerraform = pagesProjectDeploymentConfigsProductionPlacementToTerraform;
exports.pagesProjectDeploymentConfigsProductionPlacementToHclTerraform = pagesProjectDeploymentConfigsProductionPlacementToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionQueueProducersToTerraform = pagesProjectDeploymentConfigsProductionQueueProducersToTerraform;
exports.pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform = pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionR2BucketsToTerraform = pagesProjectDeploymentConfigsProductionR2BucketsToTerraform;
exports.pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform = pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionServicesToTerraform = pagesProjectDeploymentConfigsProductionServicesToTerraform;
exports.pagesProjectDeploymentConfigsProductionServicesToHclTerraform = pagesProjectDeploymentConfigsProductionServicesToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform = pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform;
exports.pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform = pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform;
exports.pagesProjectDeploymentConfigsProductionToTerraform = pagesProjectDeploymentConfigsProductionToTerraform;
exports.pagesProjectDeploymentConfigsProductionToHclTerraform = pagesProjectDeploymentConfigsProductionToHclTerraform;
exports.pagesProjectDeploymentConfigsToTerraform = pagesProjectDeploymentConfigsToTerraform;
exports.pagesProjectDeploymentConfigsToHclTerraform = pagesProjectDeploymentConfigsToHclTerraform;
exports.pagesProjectLatestDeploymentBuildConfigToTerraform = pagesProjectLatestDeploymentBuildConfigToTerraform;
exports.pagesProjectLatestDeploymentBuildConfigToHclTerraform = pagesProjectLatestDeploymentBuildConfigToHclTerraform;
exports.pagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform = pagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform;
exports.pagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform = pagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform;
exports.pagesProjectLatestDeploymentDeploymentTriggerToTerraform = pagesProjectLatestDeploymentDeploymentTriggerToTerraform;
exports.pagesProjectLatestDeploymentDeploymentTriggerToHclTerraform = pagesProjectLatestDeploymentDeploymentTriggerToHclTerraform;
exports.pagesProjectLatestDeploymentEnvVarsToTerraform = pagesProjectLatestDeploymentEnvVarsToTerraform;
exports.pagesProjectLatestDeploymentEnvVarsToHclTerraform = pagesProjectLatestDeploymentEnvVarsToHclTerraform;
exports.pagesProjectLatestDeploymentLatestStageToTerraform = pagesProjectLatestDeploymentLatestStageToTerraform;
exports.pagesProjectLatestDeploymentLatestStageToHclTerraform = pagesProjectLatestDeploymentLatestStageToHclTerraform;
exports.pagesProjectLatestDeploymentSourceConfigToTerraform = pagesProjectLatestDeploymentSourceConfigToTerraform;
exports.pagesProjectLatestDeploymentSourceConfigToHclTerraform = pagesProjectLatestDeploymentSourceConfigToHclTerraform;
exports.pagesProjectLatestDeploymentSourceToTerraform = pagesProjectLatestDeploymentSourceToTerraform;
exports.pagesProjectLatestDeploymentSourceToHclTerraform = pagesProjectLatestDeploymentSourceToHclTerraform;
exports.pagesProjectLatestDeploymentStagesToTerraform = pagesProjectLatestDeploymentStagesToTerraform;
exports.pagesProjectLatestDeploymentStagesToHclTerraform = pagesProjectLatestDeploymentStagesToHclTerraform;
exports.pagesProjectLatestDeploymentToTerraform = pagesProjectLatestDeploymentToTerraform;
exports.pagesProjectLatestDeploymentToHclTerraform = pagesProjectLatestDeploymentToHclTerraform;
exports.pagesProjectSourceConfigToTerraform = pagesProjectSourceConfigToTerraform;
exports.pagesProjectSourceConfigToHclTerraform = pagesProjectSourceConfigToHclTerraform;
exports.pagesProjectSourceToTerraform = pagesProjectSourceToTerraform;
exports.pagesProjectSourceToHclTerraform = pagesProjectSourceToHclTerraform;
var cdktf = require("cdktf");
function pagesProjectBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        build_caching: cdktf.booleanToTerraform(struct.buildCaching),
        build_command: cdktf.stringToTerraform(struct.buildCommand),
        destination_dir: cdktf.stringToTerraform(struct.destinationDir),
        root_dir: cdktf.stringToTerraform(struct.rootDir),
        web_analytics_tag: cdktf.stringToTerraform(struct.webAnalyticsTag),
        web_analytics_token: cdktf.stringToTerraform(struct.webAnalyticsToken),
    };
}
function pagesProjectBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        build_caching: {
            value: cdktf.booleanToHclTerraform(struct.buildCaching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        build_command: {
            value: cdktf.stringToHclTerraform(struct.buildCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_dir: {
            value: cdktf.stringToHclTerraform(struct.destinationDir),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_dir: {
            value: cdktf.stringToHclTerraform(struct.rootDir),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_analytics_tag: {
            value: cdktf.stringToHclTerraform(struct.webAnalyticsTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_analytics_token: {
            value: cdktf.stringToHclTerraform(struct.webAnalyticsToken),
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
}
var PagesProjectBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._buildCaching !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildCaching = this._buildCaching;
            }
            if (this._buildCommand !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildCommand = this._buildCommand;
            }
            if (this._destinationDir !== undefined) {
                hasAnyValues = true;
                internalValueResult.destinationDir = this._destinationDir;
            }
            if (this._rootDir !== undefined) {
                hasAnyValues = true;
                internalValueResult.rootDir = this._rootDir;
            }
            if (this._webAnalyticsTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.webAnalyticsTag = this._webAnalyticsTag;
            }
            if (this._webAnalyticsToken !== undefined) {
                hasAnyValues = true;
                internalValueResult.webAnalyticsToken = this._webAnalyticsToken;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._buildCaching = undefined;
                this._buildCommand = undefined;
                this._destinationDir = undefined;
                this._rootDir = undefined;
                this._webAnalyticsTag = undefined;
                this._webAnalyticsToken = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._buildCaching = value.buildCaching;
                this._buildCommand = value.buildCommand;
                this._destinationDir = value.destinationDir;
                this._rootDir = value.rootDir;
                this._webAnalyticsTag = value.webAnalyticsTag;
                this._webAnalyticsToken = value.webAnalyticsToken;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "buildCaching", {
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        set: function (value) {
            this._buildCaching = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectBuildConfigOutputReference.prototype.resetBuildCaching = function () {
        this._buildCaching = undefined;
    };
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "buildCachingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildCaching;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "buildCommand", {
        get: function () {
            return this.getStringAttribute('build_command');
        },
        set: function (value) {
            this._buildCommand = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectBuildConfigOutputReference.prototype.resetBuildCommand = function () {
        this._buildCommand = undefined;
    };
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "buildCommandInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildCommand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "destinationDir", {
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        set: function (value) {
            this._destinationDir = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectBuildConfigOutputReference.prototype.resetDestinationDir = function () {
        this._destinationDir = undefined;
    };
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "destinationDirInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationDir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "rootDir", {
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        set: function (value) {
            this._rootDir = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectBuildConfigOutputReference.prototype.resetRootDir = function () {
        this._rootDir = undefined;
    };
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "rootDirInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootDir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        set: function (value) {
            this._webAnalyticsTag = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectBuildConfigOutputReference.prototype.resetWebAnalyticsTag = function () {
        this._webAnalyticsTag = undefined;
    };
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "webAnalyticsTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webAnalyticsTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        set: function (value) {
            this._webAnalyticsToken = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectBuildConfigOutputReference.prototype.resetWebAnalyticsToken = function () {
        this._webAnalyticsToken = undefined;
    };
    Object.defineProperty(PagesProjectBuildConfigOutputReference.prototype, "webAnalyticsTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webAnalyticsToken;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectBuildConfigOutputReference = PagesProjectBuildConfigOutputReference;
function pagesProjectCanonicalDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentBuildConfigOutputReference = PagesProjectCanonicalDeploymentBuildConfigOutputReference;
function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitDirty", {
        // commit_dirty - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('commit_dirty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitHash", {
        // commit_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitMessage", {
        // commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_message');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference = PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
function pagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(_this, "metadata");
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference = PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference;
function pagesProjectCanonicalDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectCanonicalDeploymentEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentEnvVarsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentEnvVarsOutputReference = PagesProjectCanonicalDeploymentEnvVarsOutputReference;
var PagesProjectCanonicalDeploymentEnvVarsMap = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectCanonicalDeploymentEnvVarsMap.prototype.get = function (key) {
        return new PagesProjectCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectCanonicalDeploymentEnvVarsMap;
}(cdktf.ComplexMap));
exports.PagesProjectCanonicalDeploymentEnvVarsMap = PagesProjectCanonicalDeploymentEnvVarsMap;
function pagesProjectCanonicalDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentLatestStageOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentLatestStageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentLatestStageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentLatestStageOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentLatestStageOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentLatestStageOutputReference = PagesProjectCanonicalDeploymentLatestStageOutputReference;
function pagesProjectCanonicalDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentSourceConfigOutputReference = PagesProjectCanonicalDeploymentSourceConfigOutputReference;
function pagesProjectCanonicalDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentSourceOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new PagesProjectCanonicalDeploymentSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentSourceOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentSourceOutputReference = PagesProjectCanonicalDeploymentSourceOutputReference;
function pagesProjectCanonicalDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentStagesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentStagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PagesProjectCanonicalDeploymentStagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentStagesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentStagesOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentStagesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentStagesOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentStagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentStagesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentStagesOutputReference = PagesProjectCanonicalDeploymentStagesOutputReference;
var PagesProjectCanonicalDeploymentStagesList = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentStagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PagesProjectCanonicalDeploymentStagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    PagesProjectCanonicalDeploymentStagesList.prototype.get = function (index) {
        return new PagesProjectCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return PagesProjectCanonicalDeploymentStagesList;
}(cdktf.ComplexList));
exports.PagesProjectCanonicalDeploymentStagesList = PagesProjectCanonicalDeploymentStagesList;
function pagesProjectCanonicalDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectCanonicalDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectCanonicalDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectCanonicalDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectCanonicalDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new PagesProjectCanonicalDeploymentBuildConfigOutputReference(_this, "build_config");
        // deployment_trigger - computed: true, optional: false, required: false
        _this._deploymentTrigger = new PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(_this, "deployment_trigger");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new PagesProjectCanonicalDeploymentEnvVarsMap(_this, "env_vars");
        // latest_stage - computed: true, optional: false, required: false
        _this._latestStage = new PagesProjectCanonicalDeploymentLatestStageOutputReference(_this, "latest_stage");
        // source - computed: true, optional: false, required: false
        _this._source = new PagesProjectCanonicalDeploymentSourceOutputReference(_this, "source");
        // stages - computed: true, optional: false, required: false
        _this._stages = new PagesProjectCanonicalDeploymentStagesList(_this, "stages", false);
        return _this;
    }
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "aliases", {
        // aliases - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aliases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "deploymentTrigger", {
        get: function () {
            return this._deploymentTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "isSkipped", {
        // is_skipped - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_skipped');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "latestStage", {
        get: function () {
            return this._latestStage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "projectName", {
        // project_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "shortId", {
        // short_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('short_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectCanonicalDeploymentOutputReference.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectCanonicalDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectCanonicalDeploymentOutputReference = PagesProjectCanonicalDeploymentOutputReference;
function pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        project_id: cdktf.stringToTerraform(struct.projectId),
    };
}
function pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        project_id: {
            value: cdktf.stringToHclTerraform(struct.projectId),
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
}
var PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._projectId !== undefined) {
                hasAnyValues = true;
                internalValueResult.projectId = this._projectId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._projectId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._projectId = value.projectId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference = PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference;
var PagesProjectDeploymentConfigsPreviewAiBindingsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewAiBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewAiBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewAiBindingsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewAiBindingsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewAiBindingsMap = PagesProjectDeploymentConfigsPreviewAiBindingsMap;
function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dataset: cdktf.stringToTerraform(struct.dataset),
    };
}
function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        dataset: {
            value: cdktf.stringToHclTerraform(struct.dataset),
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
}
var PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._dataset !== undefined) {
                hasAnyValues = true;
                internalValueResult.dataset = this._dataset;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dataset = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dataset = value.dataset;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference.prototype, "dataset", {
        get: function () {
            return this.getStringAttribute('dataset');
        },
        set: function (value) {
            this._dataset = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference.prototype, "datasetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataset;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference = PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
var PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap = PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
function pagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectDeploymentConfigsPreviewBrowsersOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewBrowsersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewBrowsersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewBrowsersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewBrowsersOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewBrowsersOutputReference = PagesProjectDeploymentConfigsPreviewBrowsersOutputReference;
var PagesProjectDeploymentConfigsPreviewBrowsersMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewBrowsersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewBrowsersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewBrowsersMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewBrowsersMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewBrowsersMap = PagesProjectDeploymentConfigsPreviewBrowsersMap;
function pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
}
var PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference = PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference;
var PagesProjectDeploymentConfigsPreviewD1DatabasesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewD1DatabasesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewD1DatabasesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewD1DatabasesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewD1DatabasesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewD1DatabasesMap = PagesProjectDeploymentConfigsPreviewD1DatabasesMap;
function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
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
}
var PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._namespaceId !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespaceId = this._namespaceId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._namespaceId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._namespaceId = value.namespaceId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference = PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
var PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap = PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap;
function pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
}
var PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._type = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference = PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference;
var PagesProjectDeploymentConfigsPreviewEnvVarsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewEnvVarsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewEnvVarsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewEnvVarsMap = PagesProjectDeploymentConfigsPreviewEnvVarsMap;
function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
}
var PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference = PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
var PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap = PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap;
function pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
function pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
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
}
var PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._namespaceId !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespaceId = this._namespaceId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._namespaceId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._namespaceId = value.namespaceId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference = PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference;
var PagesProjectDeploymentConfigsPreviewKvNamespacesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewKvNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewKvNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewKvNamespacesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewKvNamespacesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewKvNamespacesMap = PagesProjectDeploymentConfigsPreviewKvNamespacesMap;
function pagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_ms: cdktf.numberToTerraform(struct.cpuMs),
    };
}
function pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cpu_ms: {
            value: cdktf.numberToHclTerraform(struct.cpuMs),
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
}
var PagesProjectDeploymentConfigsPreviewLimitsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cpuMs !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuMs = this._cpuMs;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cpuMs = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cpuMs = value.cpuMs;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewLimitsOutputReference.prototype, "cpuMs", {
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        set: function (value) {
            this._cpuMs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewLimitsOutputReference.prototype, "cpuMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuMs;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewLimitsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewLimitsOutputReference = PagesProjectDeploymentConfigsPreviewLimitsOutputReference;
function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
    };
}
function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
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
}
var PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._certificateId !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificateId = this._certificateId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._certificateId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._certificateId = value.certificateId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference = PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference;
var PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap = PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap;
function pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
function pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
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
}
var PagesProjectDeploymentConfigsPreviewPlacementOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewPlacementOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewPlacementOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewPlacementOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewPlacementOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewPlacementOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewPlacementOutputReference = PagesProjectDeploymentConfigsPreviewPlacementOutputReference;
function pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
}
var PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference = PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference;
var PagesProjectDeploymentConfigsPreviewQueueProducersMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewQueueProducersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewQueueProducersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewQueueProducersMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewQueueProducersMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewQueueProducersMap = PagesProjectDeploymentConfigsPreviewQueueProducersMap;
function pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
}
var PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._jurisdiction !== undefined) {
                hasAnyValues = true;
                internalValueResult.jurisdiction = this._jurisdiction;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._jurisdiction = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._jurisdiction = value.jurisdiction;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference = PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference;
var PagesProjectDeploymentConfigsPreviewR2BucketsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewR2BucketsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewR2BucketsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewR2BucketsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewR2BucketsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewR2BucketsMap = PagesProjectDeploymentConfigsPreviewR2BucketsMap;
function pagesProjectDeploymentConfigsPreviewServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
function pagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        entrypoint: {
            value: cdktf.stringToHclTerraform(struct.entrypoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
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
}
var PagesProjectDeploymentConfigsPreviewServicesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewServicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewServicesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._entrypoint !== undefined) {
                hasAnyValues = true;
                internalValueResult.entrypoint = this._entrypoint;
            }
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._entrypoint = undefined;
                this._environment = undefined;
                this._service = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._entrypoint = value.entrypoint;
                this._environment = value.environment;
                this._service = value.service;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "entrypoint", {
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        set: function (value) {
            this._entrypoint = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype.resetEntrypoint = function () {
        this._entrypoint = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "entrypointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entrypoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewServicesOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewServicesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewServicesOutputReference = PagesProjectDeploymentConfigsPreviewServicesOutputReference;
var PagesProjectDeploymentConfigsPreviewServicesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewServicesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewServicesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewServicesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewServicesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewServicesMap = PagesProjectDeploymentConfigsPreviewServicesMap;
function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
    };
}
function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        index_name: {
            value: cdktf.stringToHclTerraform(struct.indexName),
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
}
var PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._indexName !== undefined) {
                hasAnyValues = true;
                internalValueResult.indexName = this._indexName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._indexName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._indexName = value.indexName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference.prototype, "indexName", {
        get: function () {
            return this.getStringAttribute('index_name');
        },
        set: function (value) {
            this._indexName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference.prototype, "indexNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._indexName;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference = PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference;
var PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap = PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap;
function pagesProjectDeploymentConfigsPreviewToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ai_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform)(struct.aiBindings),
        always_use_latest_compatibility_date: cdktf.booleanToTerraform(struct.alwaysUseLatestCompatibilityDate),
        analytics_engine_datasets: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform)(struct.analyticsEngineDatasets),
        browsers: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewBrowsersToTerraform)(struct.browsers),
        build_image_major_version: cdktf.numberToTerraform(struct.buildImageMajorVersion),
        compatibility_date: cdktf.stringToTerraform(struct.compatibilityDate),
        compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.compatibilityFlags),
        d1_databases: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform)(struct.d1Databases),
        durable_object_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform)(struct.durableObjectNamespaces),
        env_vars: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform)(struct.envVars),
        fail_open: cdktf.booleanToTerraform(struct.failOpen),
        hyperdrive_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform)(struct.hyperdriveBindings),
        kv_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform)(struct.kvNamespaces),
        limits: pagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct.limits),
        mtls_certificates: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform)(struct.mtlsCertificates),
        placement: pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct.placement),
        queue_producers: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform)(struct.queueProducers),
        r2_buckets: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform)(struct.r2Buckets),
        services: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewServicesToTerraform)(struct.services),
        usage_model: cdktf.stringToTerraform(struct.usageModel),
        vectorize_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform)(struct.vectorizeBindings),
        wrangler_config_hash: cdktf.stringToTerraform(struct.wranglerConfigHash),
    };
}
function pagesProjectDeploymentConfigsPreviewToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ai_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform)(struct.aiBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewAiBindingsMap",
        },
        always_use_latest_compatibility_date: {
            value: cdktf.booleanToHclTerraform(struct.alwaysUseLatestCompatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        analytics_engine_datasets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform)(struct.analyticsEngineDatasets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap",
        },
        browsers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform)(struct.browsers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewBrowsersMap",
        },
        build_image_major_version: {
            value: cdktf.numberToHclTerraform(struct.buildImageMajorVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        compatibility_date: {
            value: cdktf.stringToHclTerraform(struct.compatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compatibility_flags: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.compatibilityFlags),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        d1_databases: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform)(struct.d1Databases),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewD1DatabasesMap",
        },
        durable_object_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform)(struct.durableObjectNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap",
        },
        env_vars: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform)(struct.envVars),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewEnvVarsMap",
        },
        fail_open: {
            value: cdktf.booleanToHclTerraform(struct.failOpen),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hyperdrive_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform)(struct.hyperdriveBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap",
        },
        kv_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform)(struct.kvNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewKvNamespacesMap",
        },
        limits: {
            value: pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct.limits),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsPreviewLimits",
        },
        mtls_certificates: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform)(struct.mtlsCertificates),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap",
        },
        placement: {
            value: pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsPreviewPlacement",
        },
        queue_producers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform)(struct.queueProducers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewQueueProducersMap",
        },
        r2_buckets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform)(struct.r2Buckets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewR2BucketsMap",
        },
        services: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewServicesToHclTerraform)(struct.services),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewServicesMap",
        },
        usage_model: {
            value: cdktf.stringToHclTerraform(struct.usageModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vectorize_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform)(struct.vectorizeBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap",
        },
        wrangler_config_hash: {
            value: cdktf.stringToHclTerraform(struct.wranglerConfigHash),
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
}
var PagesProjectDeploymentConfigsPreviewOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsPreviewOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsPreviewOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ai_bindings - computed: true, optional: true, required: false
        _this._aiBindings = new PagesProjectDeploymentConfigsPreviewAiBindingsMap(_this, "ai_bindings");
        // analytics_engine_datasets - computed: true, optional: true, required: false
        _this._analyticsEngineDatasets = new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(_this, "analytics_engine_datasets");
        // browsers - computed: true, optional: true, required: false
        _this._browsers = new PagesProjectDeploymentConfigsPreviewBrowsersMap(_this, "browsers");
        // d1_databases - computed: true, optional: true, required: false
        _this._d1Databases = new PagesProjectDeploymentConfigsPreviewD1DatabasesMap(_this, "d1_databases");
        // durable_object_namespaces - computed: true, optional: true, required: false
        _this._durableObjectNamespaces = new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(_this, "durable_object_namespaces");
        // env_vars - computed: true, optional: true, required: false
        _this._envVars = new PagesProjectDeploymentConfigsPreviewEnvVarsMap(_this, "env_vars");
        // hyperdrive_bindings - computed: true, optional: true, required: false
        _this._hyperdriveBindings = new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(_this, "hyperdrive_bindings");
        // kv_namespaces - computed: true, optional: true, required: false
        _this._kvNamespaces = new PagesProjectDeploymentConfigsPreviewKvNamespacesMap(_this, "kv_namespaces");
        // limits - computed: true, optional: true, required: false
        _this._limits = new PagesProjectDeploymentConfigsPreviewLimitsOutputReference(_this, "limits");
        // mtls_certificates - computed: true, optional: true, required: false
        _this._mtlsCertificates = new PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(_this, "mtls_certificates");
        // placement - computed: true, optional: true, required: false
        _this._placement = new PagesProjectDeploymentConfigsPreviewPlacementOutputReference(_this, "placement");
        // queue_producers - computed: true, optional: true, required: false
        _this._queueProducers = new PagesProjectDeploymentConfigsPreviewQueueProducersMap(_this, "queue_producers");
        // r2_buckets - computed: true, optional: true, required: false
        _this._r2Buckets = new PagesProjectDeploymentConfigsPreviewR2BucketsMap(_this, "r2_buckets");
        // services - computed: true, optional: true, required: false
        _this._services = new PagesProjectDeploymentConfigsPreviewServicesMap(_this, "services");
        // vectorize_bindings - computed: true, optional: true, required: false
        _this._vectorizeBindings = new PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(_this, "vectorize_bindings");
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._aiBindings) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.aiBindings = (_b = this._aiBindings) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._alwaysUseLatestCompatibilityDate !== undefined) {
                hasAnyValues = true;
                internalValueResult.alwaysUseLatestCompatibilityDate = this._alwaysUseLatestCompatibilityDate;
            }
            if (((_c = this._analyticsEngineDatasets) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.analyticsEngineDatasets = (_d = this._analyticsEngineDatasets) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._browsers) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.browsers = (_f = this._browsers) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._buildImageMajorVersion !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildImageMajorVersion = this._buildImageMajorVersion;
            }
            if (this._compatibilityDate !== undefined) {
                hasAnyValues = true;
                internalValueResult.compatibilityDate = this._compatibilityDate;
            }
            if (this._compatibilityFlags !== undefined) {
                hasAnyValues = true;
                internalValueResult.compatibilityFlags = this._compatibilityFlags;
            }
            if (((_g = this._d1Databases) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.d1Databases = (_h = this._d1Databases) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._durableObjectNamespaces) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.durableObjectNamespaces = (_k = this._durableObjectNamespaces) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._envVars) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.envVars = (_m = this._envVars) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (this._failOpen !== undefined) {
                hasAnyValues = true;
                internalValueResult.failOpen = this._failOpen;
            }
            if (((_o = this._hyperdriveBindings) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.hyperdriveBindings = (_p = this._hyperdriveBindings) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._kvNamespaces) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.kvNamespaces = (_r = this._kvNamespaces) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._limits) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.limits = (_t = this._limits) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._mtlsCertificates) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.mtlsCertificates = (_v = this._mtlsCertificates) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._placement) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.placement = (_x = this._placement) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._queueProducers) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.queueProducers = (_z = this._queueProducers) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._r2Buckets) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.r2Buckets = (_1 = this._r2Buckets) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._services) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.services = (_3 = this._services) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            if (this._usageModel !== undefined) {
                hasAnyValues = true;
                internalValueResult.usageModel = this._usageModel;
            }
            if (((_4 = this._vectorizeBindings) === null || _4 === void 0 ? void 0 : _4.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.vectorizeBindings = (_5 = this._vectorizeBindings) === null || _5 === void 0 ? void 0 : _5.internalValue;
            }
            if (this._wranglerConfigHash !== undefined) {
                hasAnyValues = true;
                internalValueResult.wranglerConfigHash = this._wranglerConfigHash;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._aiBindings.internalValue = undefined;
                this._alwaysUseLatestCompatibilityDate = undefined;
                this._analyticsEngineDatasets.internalValue = undefined;
                this._browsers.internalValue = undefined;
                this._buildImageMajorVersion = undefined;
                this._compatibilityDate = undefined;
                this._compatibilityFlags = undefined;
                this._d1Databases.internalValue = undefined;
                this._durableObjectNamespaces.internalValue = undefined;
                this._envVars.internalValue = undefined;
                this._failOpen = undefined;
                this._hyperdriveBindings.internalValue = undefined;
                this._kvNamespaces.internalValue = undefined;
                this._limits.internalValue = undefined;
                this._mtlsCertificates.internalValue = undefined;
                this._placement.internalValue = undefined;
                this._queueProducers.internalValue = undefined;
                this._r2Buckets.internalValue = undefined;
                this._services.internalValue = undefined;
                this._usageModel = undefined;
                this._vectorizeBindings.internalValue = undefined;
                this._wranglerConfigHash = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._aiBindings.internalValue = value.aiBindings;
                this._alwaysUseLatestCompatibilityDate = value.alwaysUseLatestCompatibilityDate;
                this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
                this._browsers.internalValue = value.browsers;
                this._buildImageMajorVersion = value.buildImageMajorVersion;
                this._compatibilityDate = value.compatibilityDate;
                this._compatibilityFlags = value.compatibilityFlags;
                this._d1Databases.internalValue = value.d1Databases;
                this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
                this._envVars.internalValue = value.envVars;
                this._failOpen = value.failOpen;
                this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
                this._kvNamespaces.internalValue = value.kvNamespaces;
                this._limits.internalValue = value.limits;
                this._mtlsCertificates.internalValue = value.mtlsCertificates;
                this._placement.internalValue = value.placement;
                this._queueProducers.internalValue = value.queueProducers;
                this._r2Buckets.internalValue = value.r2Buckets;
                this._services.internalValue = value.services;
                this._usageModel = value.usageModel;
                this._vectorizeBindings.internalValue = value.vectorizeBindings;
                this._wranglerConfigHash = value.wranglerConfigHash;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "aiBindings", {
        get: function () {
            return this._aiBindings;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putAiBindings = function (value) {
        this._aiBindings.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetAiBindings = function () {
        this._aiBindings.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "aiBindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiBindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "alwaysUseLatestCompatibilityDate", {
        get: function () {
            return this.getBooleanAttribute('always_use_latest_compatibility_date');
        },
        set: function (value) {
            this._alwaysUseLatestCompatibilityDate = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetAlwaysUseLatestCompatibilityDate = function () {
        this._alwaysUseLatestCompatibilityDate = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "alwaysUseLatestCompatibilityDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alwaysUseLatestCompatibilityDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "analyticsEngineDatasets", {
        get: function () {
            return this._analyticsEngineDatasets;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putAnalyticsEngineDatasets = function (value) {
        this._analyticsEngineDatasets.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetAnalyticsEngineDatasets = function () {
        this._analyticsEngineDatasets.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "analyticsEngineDatasetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._analyticsEngineDatasets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "browsers", {
        get: function () {
            return this._browsers;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putBrowsers = function (value) {
        this._browsers.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetBrowsers = function () {
        this._browsers.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "browsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._browsers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "buildImageMajorVersion", {
        get: function () {
            return this.getNumberAttribute('build_image_major_version');
        },
        set: function (value) {
            this._buildImageMajorVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetBuildImageMajorVersion = function () {
        this._buildImageMajorVersion = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "buildImageMajorVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildImageMajorVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "compatibilityDate", {
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        set: function (value) {
            this._compatibilityDate = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetCompatibilityDate = function () {
        this._compatibilityDate = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "compatibilityDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "compatibilityFlags", {
        get: function () {
            return this.getListAttribute('compatibility_flags');
        },
        set: function (value) {
            this._compatibilityFlags = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetCompatibilityFlags = function () {
        this._compatibilityFlags = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "compatibilityFlagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityFlags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "d1Databases", {
        get: function () {
            return this._d1Databases;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putD1Databases = function (value) {
        this._d1Databases.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetD1Databases = function () {
        this._d1Databases.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "d1DatabasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._d1Databases.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "durableObjectNamespaces", {
        get: function () {
            return this._durableObjectNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putDurableObjectNamespaces = function (value) {
        this._durableObjectNamespaces.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetDurableObjectNamespaces = function () {
        this._durableObjectNamespaces.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "durableObjectNamespacesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._durableObjectNamespaces.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putEnvVars = function (value) {
        this._envVars.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetEnvVars = function () {
        this._envVars.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "envVarsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._envVars.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "failOpen", {
        get: function () {
            return this.getBooleanAttribute('fail_open');
        },
        set: function (value) {
            this._failOpen = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetFailOpen = function () {
        this._failOpen = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "failOpenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "hyperdriveBindings", {
        get: function () {
            return this._hyperdriveBindings;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putHyperdriveBindings = function (value) {
        this._hyperdriveBindings.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetHyperdriveBindings = function () {
        this._hyperdriveBindings.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "hyperdriveBindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hyperdriveBindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "kvNamespaces", {
        get: function () {
            return this._kvNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putKvNamespaces = function (value) {
        this._kvNamespaces.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetKvNamespaces = function () {
        this._kvNamespaces.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "kvNamespacesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kvNamespaces.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putLimits = function (value) {
        this._limits.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetLimits = function () {
        this._limits.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "mtlsCertificates", {
        get: function () {
            return this._mtlsCertificates;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putMtlsCertificates = function (value) {
        this._mtlsCertificates.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetMtlsCertificates = function () {
        this._mtlsCertificates.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "mtlsCertificatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtlsCertificates.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putPlacement = function (value) {
        this._placement.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetPlacement = function () {
        this._placement.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "placementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placement.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "queueProducers", {
        get: function () {
            return this._queueProducers;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putQueueProducers = function (value) {
        this._queueProducers.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetQueueProducers = function () {
        this._queueProducers.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "queueProducersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueProducers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "r2Buckets", {
        get: function () {
            return this._r2Buckets;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putR2Buckets = function (value) {
        this._r2Buckets.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetR2Buckets = function () {
        this._r2Buckets.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "r2BucketsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._r2Buckets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "services", {
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putServices = function (value) {
        this._services.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetServices = function () {
        this._services.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "servicesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._services.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "usageModel", {
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        set: function (value) {
            this._usageModel = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetUsageModel = function () {
        this._usageModel = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "usageModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usageModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "vectorizeBindings", {
        get: function () {
            return this._vectorizeBindings;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.putVectorizeBindings = function (value) {
        this._vectorizeBindings.internalValue = value;
    };
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetVectorizeBindings = function () {
        this._vectorizeBindings.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "vectorizeBindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vectorizeBindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "wranglerConfigHash", {
        get: function () {
            return this.getStringAttribute('wrangler_config_hash');
        },
        set: function (value) {
            this._wranglerConfigHash = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsPreviewOutputReference.prototype.resetWranglerConfigHash = function () {
        this._wranglerConfigHash = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsPreviewOutputReference.prototype, "wranglerConfigHashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wranglerConfigHash;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsPreviewOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsPreviewOutputReference = PagesProjectDeploymentConfigsPreviewOutputReference;
function pagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        project_id: cdktf.stringToTerraform(struct.projectId),
    };
}
function pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        project_id: {
            value: cdktf.stringToHclTerraform(struct.projectId),
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
}
var PagesProjectDeploymentConfigsProductionAiBindingsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionAiBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionAiBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionAiBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._projectId !== undefined) {
                hasAnyValues = true;
                internalValueResult.projectId = this._projectId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._projectId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._projectId = value.projectId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionAiBindingsOutputReference.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionAiBindingsOutputReference.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionAiBindingsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionAiBindingsOutputReference = PagesProjectDeploymentConfigsProductionAiBindingsOutputReference;
var PagesProjectDeploymentConfigsProductionAiBindingsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionAiBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionAiBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionAiBindingsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionAiBindingsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionAiBindingsMap = PagesProjectDeploymentConfigsProductionAiBindingsMap;
function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dataset: cdktf.stringToTerraform(struct.dataset),
    };
}
function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        dataset: {
            value: cdktf.stringToHclTerraform(struct.dataset),
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
}
var PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._dataset !== undefined) {
                hasAnyValues = true;
                internalValueResult.dataset = this._dataset;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dataset = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dataset = value.dataset;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference.prototype, "dataset", {
        get: function () {
            return this.getStringAttribute('dataset');
        },
        set: function (value) {
            this._dataset = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference.prototype, "datasetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataset;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference = PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
var PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap = PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
function pagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectDeploymentConfigsProductionBrowsersOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionBrowsersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionBrowsersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionBrowsersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionBrowsersOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionBrowsersOutputReference = PagesProjectDeploymentConfigsProductionBrowsersOutputReference;
var PagesProjectDeploymentConfigsProductionBrowsersMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionBrowsersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionBrowsersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionBrowsersMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionBrowsersMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionBrowsersMap = PagesProjectDeploymentConfigsProductionBrowsersMap;
function pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
}
var PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference = PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference;
var PagesProjectDeploymentConfigsProductionD1DatabasesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionD1DatabasesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionD1DatabasesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionD1DatabasesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionD1DatabasesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionD1DatabasesMap = PagesProjectDeploymentConfigsProductionD1DatabasesMap;
function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
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
}
var PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._namespaceId !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespaceId = this._namespaceId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._namespaceId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._namespaceId = value.namespaceId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference = PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
var PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap = PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap;
function pagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
}
var PagesProjectDeploymentConfigsProductionEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._type = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionEnvVarsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionEnvVarsOutputReference = PagesProjectDeploymentConfigsProductionEnvVarsOutputReference;
var PagesProjectDeploymentConfigsProductionEnvVarsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionEnvVarsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionEnvVarsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionEnvVarsMap = PagesProjectDeploymentConfigsProductionEnvVarsMap;
function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
}
var PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference = PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference;
var PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap = PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap;
function pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
function pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
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
}
var PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._namespaceId !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespaceId = this._namespaceId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._namespaceId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._namespaceId = value.namespaceId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference = PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference;
var PagesProjectDeploymentConfigsProductionKvNamespacesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionKvNamespacesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionKvNamespacesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionKvNamespacesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionKvNamespacesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionKvNamespacesMap = PagesProjectDeploymentConfigsProductionKvNamespacesMap;
function pagesProjectDeploymentConfigsProductionLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_ms: cdktf.numberToTerraform(struct.cpuMs),
    };
}
function pagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cpu_ms: {
            value: cdktf.numberToHclTerraform(struct.cpuMs),
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
}
var PagesProjectDeploymentConfigsProductionLimitsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cpuMs !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuMs = this._cpuMs;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cpuMs = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cpuMs = value.cpuMs;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionLimitsOutputReference.prototype, "cpuMs", {
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        set: function (value) {
            this._cpuMs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionLimitsOutputReference.prototype, "cpuMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuMs;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionLimitsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionLimitsOutputReference = PagesProjectDeploymentConfigsProductionLimitsOutputReference;
function pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
    };
}
function pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
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
}
var PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._certificateId !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificateId = this._certificateId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._certificateId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._certificateId = value.certificateId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference = PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference;
var PagesProjectDeploymentConfigsProductionMtlsCertificatesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionMtlsCertificatesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionMtlsCertificatesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionMtlsCertificatesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionMtlsCertificatesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionMtlsCertificatesMap = PagesProjectDeploymentConfigsProductionMtlsCertificatesMap;
function pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
function pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
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
}
var PagesProjectDeploymentConfigsProductionPlacementOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionPlacementOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionPlacementOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionPlacementOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionPlacementOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionPlacementOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionPlacementOutputReference = PagesProjectDeploymentConfigsProductionPlacementOutputReference;
function pagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
}
var PagesProjectDeploymentConfigsProductionQueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionQueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionQueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionQueueProducersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionQueueProducersOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionQueueProducersOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionQueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionQueueProducersOutputReference = PagesProjectDeploymentConfigsProductionQueueProducersOutputReference;
var PagesProjectDeploymentConfigsProductionQueueProducersMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionQueueProducersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionQueueProducersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionQueueProducersMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionQueueProducersMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionQueueProducersMap = PagesProjectDeploymentConfigsProductionQueueProducersMap;
function pagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
}
var PagesProjectDeploymentConfigsProductionR2BucketsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionR2BucketsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionR2BucketsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._jurisdiction !== undefined) {
                hasAnyValues = true;
                internalValueResult.jurisdiction = this._jurisdiction;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._jurisdiction = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._jurisdiction = value.jurisdiction;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionR2BucketsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionR2BucketsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionR2BucketsOutputReference = PagesProjectDeploymentConfigsProductionR2BucketsOutputReference;
var PagesProjectDeploymentConfigsProductionR2BucketsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionR2BucketsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionR2BucketsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionR2BucketsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionR2BucketsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionR2BucketsMap = PagesProjectDeploymentConfigsProductionR2BucketsMap;
function pagesProjectDeploymentConfigsProductionServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
function pagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        entrypoint: {
            value: cdktf.stringToHclTerraform(struct.entrypoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
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
}
var PagesProjectDeploymentConfigsProductionServicesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionServicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionServicesOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._entrypoint !== undefined) {
                hasAnyValues = true;
                internalValueResult.entrypoint = this._entrypoint;
            }
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._entrypoint = undefined;
                this._environment = undefined;
                this._service = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._entrypoint = value.entrypoint;
                this._environment = value.environment;
                this._service = value.service;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "entrypoint", {
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        set: function (value) {
            this._entrypoint = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype.resetEntrypoint = function () {
        this._entrypoint = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "entrypointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entrypoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionServicesOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionServicesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionServicesOutputReference = PagesProjectDeploymentConfigsProductionServicesOutputReference;
var PagesProjectDeploymentConfigsProductionServicesMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionServicesMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionServicesMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionServicesMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionServicesMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionServicesMap = PagesProjectDeploymentConfigsProductionServicesMap;
function pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
    };
}
function pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        index_name: {
            value: cdktf.stringToHclTerraform(struct.indexName),
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
}
var PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._indexName !== undefined) {
                hasAnyValues = true;
                internalValueResult.indexName = this._indexName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._indexName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._indexName = value.indexName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference.prototype, "indexName", {
        get: function () {
            return this.getStringAttribute('index_name');
        },
        set: function (value) {
            this._indexName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference.prototype, "indexNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._indexName;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference = PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference;
var PagesProjectDeploymentConfigsProductionVectorizeBindingsMap = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionVectorizeBindingsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionVectorizeBindingsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectDeploymentConfigsProductionVectorizeBindingsMap.prototype.get = function (key) {
        return new PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectDeploymentConfigsProductionVectorizeBindingsMap;
}(cdktf.ComplexMap));
exports.PagesProjectDeploymentConfigsProductionVectorizeBindingsMap = PagesProjectDeploymentConfigsProductionVectorizeBindingsMap;
function pagesProjectDeploymentConfigsProductionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ai_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionAiBindingsToTerraform)(struct.aiBindings),
        always_use_latest_compatibility_date: cdktf.booleanToTerraform(struct.alwaysUseLatestCompatibilityDate),
        analytics_engine_datasets: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform)(struct.analyticsEngineDatasets),
        browsers: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionBrowsersToTerraform)(struct.browsers),
        build_image_major_version: cdktf.numberToTerraform(struct.buildImageMajorVersion),
        compatibility_date: cdktf.stringToTerraform(struct.compatibilityDate),
        compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.compatibilityFlags),
        d1_databases: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform)(struct.d1Databases),
        durable_object_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform)(struct.durableObjectNamespaces),
        env_vars: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionEnvVarsToTerraform)(struct.envVars),
        fail_open: cdktf.booleanToTerraform(struct.failOpen),
        hyperdrive_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform)(struct.hyperdriveBindings),
        kv_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform)(struct.kvNamespaces),
        limits: pagesProjectDeploymentConfigsProductionLimitsToTerraform(struct.limits),
        mtls_certificates: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform)(struct.mtlsCertificates),
        placement: pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct.placement),
        queue_producers: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionQueueProducersToTerraform)(struct.queueProducers),
        r2_buckets: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionR2BucketsToTerraform)(struct.r2Buckets),
        services: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionServicesToTerraform)(struct.services),
        usage_model: cdktf.stringToTerraform(struct.usageModel),
        vectorize_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform)(struct.vectorizeBindings),
        wrangler_config_hash: cdktf.stringToTerraform(struct.wranglerConfigHash),
    };
}
function pagesProjectDeploymentConfigsProductionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ai_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform)(struct.aiBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionAiBindingsMap",
        },
        always_use_latest_compatibility_date: {
            value: cdktf.booleanToHclTerraform(struct.alwaysUseLatestCompatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        analytics_engine_datasets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform)(struct.analyticsEngineDatasets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap",
        },
        browsers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform)(struct.browsers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionBrowsersMap",
        },
        build_image_major_version: {
            value: cdktf.numberToHclTerraform(struct.buildImageMajorVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        compatibility_date: {
            value: cdktf.stringToHclTerraform(struct.compatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compatibility_flags: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.compatibilityFlags),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        d1_databases: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform)(struct.d1Databases),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionD1DatabasesMap",
        },
        durable_object_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform)(struct.durableObjectNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap",
        },
        env_vars: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform)(struct.envVars),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionEnvVarsMap",
        },
        fail_open: {
            value: cdktf.booleanToHclTerraform(struct.failOpen),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hyperdrive_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform)(struct.hyperdriveBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap",
        },
        kv_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform)(struct.kvNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionKvNamespacesMap",
        },
        limits: {
            value: pagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct.limits),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsProductionLimits",
        },
        mtls_certificates: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform)(struct.mtlsCertificates),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionMtlsCertificatesMap",
        },
        placement: {
            value: pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsProductionPlacement",
        },
        queue_producers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform)(struct.queueProducers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionQueueProducersMap",
        },
        r2_buckets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform)(struct.r2Buckets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionR2BucketsMap",
        },
        services: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionServicesToHclTerraform)(struct.services),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionServicesMap",
        },
        usage_model: {
            value: cdktf.stringToHclTerraform(struct.usageModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vectorize_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform)(struct.vectorizeBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionVectorizeBindingsMap",
        },
        wrangler_config_hash: {
            value: cdktf.stringToHclTerraform(struct.wranglerConfigHash),
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
}
var PagesProjectDeploymentConfigsProductionOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsProductionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsProductionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ai_bindings - computed: true, optional: true, required: false
        _this._aiBindings = new PagesProjectDeploymentConfigsProductionAiBindingsMap(_this, "ai_bindings");
        // analytics_engine_datasets - computed: true, optional: true, required: false
        _this._analyticsEngineDatasets = new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(_this, "analytics_engine_datasets");
        // browsers - computed: true, optional: true, required: false
        _this._browsers = new PagesProjectDeploymentConfigsProductionBrowsersMap(_this, "browsers");
        // d1_databases - computed: true, optional: true, required: false
        _this._d1Databases = new PagesProjectDeploymentConfigsProductionD1DatabasesMap(_this, "d1_databases");
        // durable_object_namespaces - computed: true, optional: true, required: false
        _this._durableObjectNamespaces = new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(_this, "durable_object_namespaces");
        // env_vars - computed: true, optional: true, required: false
        _this._envVars = new PagesProjectDeploymentConfigsProductionEnvVarsMap(_this, "env_vars");
        // hyperdrive_bindings - computed: true, optional: true, required: false
        _this._hyperdriveBindings = new PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(_this, "hyperdrive_bindings");
        // kv_namespaces - computed: true, optional: true, required: false
        _this._kvNamespaces = new PagesProjectDeploymentConfigsProductionKvNamespacesMap(_this, "kv_namespaces");
        // limits - computed: true, optional: true, required: false
        _this._limits = new PagesProjectDeploymentConfigsProductionLimitsOutputReference(_this, "limits");
        // mtls_certificates - computed: true, optional: true, required: false
        _this._mtlsCertificates = new PagesProjectDeploymentConfigsProductionMtlsCertificatesMap(_this, "mtls_certificates");
        // placement - computed: true, optional: true, required: false
        _this._placement = new PagesProjectDeploymentConfigsProductionPlacementOutputReference(_this, "placement");
        // queue_producers - computed: true, optional: true, required: false
        _this._queueProducers = new PagesProjectDeploymentConfigsProductionQueueProducersMap(_this, "queue_producers");
        // r2_buckets - computed: true, optional: true, required: false
        _this._r2Buckets = new PagesProjectDeploymentConfigsProductionR2BucketsMap(_this, "r2_buckets");
        // services - computed: true, optional: true, required: false
        _this._services = new PagesProjectDeploymentConfigsProductionServicesMap(_this, "services");
        // vectorize_bindings - computed: true, optional: true, required: false
        _this._vectorizeBindings = new PagesProjectDeploymentConfigsProductionVectorizeBindingsMap(_this, "vectorize_bindings");
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._aiBindings) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.aiBindings = (_b = this._aiBindings) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._alwaysUseLatestCompatibilityDate !== undefined) {
                hasAnyValues = true;
                internalValueResult.alwaysUseLatestCompatibilityDate = this._alwaysUseLatestCompatibilityDate;
            }
            if (((_c = this._analyticsEngineDatasets) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.analyticsEngineDatasets = (_d = this._analyticsEngineDatasets) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._browsers) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.browsers = (_f = this._browsers) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._buildImageMajorVersion !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildImageMajorVersion = this._buildImageMajorVersion;
            }
            if (this._compatibilityDate !== undefined) {
                hasAnyValues = true;
                internalValueResult.compatibilityDate = this._compatibilityDate;
            }
            if (this._compatibilityFlags !== undefined) {
                hasAnyValues = true;
                internalValueResult.compatibilityFlags = this._compatibilityFlags;
            }
            if (((_g = this._d1Databases) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.d1Databases = (_h = this._d1Databases) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._durableObjectNamespaces) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.durableObjectNamespaces = (_k = this._durableObjectNamespaces) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._envVars) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.envVars = (_m = this._envVars) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (this._failOpen !== undefined) {
                hasAnyValues = true;
                internalValueResult.failOpen = this._failOpen;
            }
            if (((_o = this._hyperdriveBindings) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.hyperdriveBindings = (_p = this._hyperdriveBindings) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._kvNamespaces) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.kvNamespaces = (_r = this._kvNamespaces) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._limits) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.limits = (_t = this._limits) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._mtlsCertificates) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.mtlsCertificates = (_v = this._mtlsCertificates) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._placement) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.placement = (_x = this._placement) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._queueProducers) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.queueProducers = (_z = this._queueProducers) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._r2Buckets) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.r2Buckets = (_1 = this._r2Buckets) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._services) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.services = (_3 = this._services) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            if (this._usageModel !== undefined) {
                hasAnyValues = true;
                internalValueResult.usageModel = this._usageModel;
            }
            if (((_4 = this._vectorizeBindings) === null || _4 === void 0 ? void 0 : _4.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.vectorizeBindings = (_5 = this._vectorizeBindings) === null || _5 === void 0 ? void 0 : _5.internalValue;
            }
            if (this._wranglerConfigHash !== undefined) {
                hasAnyValues = true;
                internalValueResult.wranglerConfigHash = this._wranglerConfigHash;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._aiBindings.internalValue = undefined;
                this._alwaysUseLatestCompatibilityDate = undefined;
                this._analyticsEngineDatasets.internalValue = undefined;
                this._browsers.internalValue = undefined;
                this._buildImageMajorVersion = undefined;
                this._compatibilityDate = undefined;
                this._compatibilityFlags = undefined;
                this._d1Databases.internalValue = undefined;
                this._durableObjectNamespaces.internalValue = undefined;
                this._envVars.internalValue = undefined;
                this._failOpen = undefined;
                this._hyperdriveBindings.internalValue = undefined;
                this._kvNamespaces.internalValue = undefined;
                this._limits.internalValue = undefined;
                this._mtlsCertificates.internalValue = undefined;
                this._placement.internalValue = undefined;
                this._queueProducers.internalValue = undefined;
                this._r2Buckets.internalValue = undefined;
                this._services.internalValue = undefined;
                this._usageModel = undefined;
                this._vectorizeBindings.internalValue = undefined;
                this._wranglerConfigHash = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._aiBindings.internalValue = value.aiBindings;
                this._alwaysUseLatestCompatibilityDate = value.alwaysUseLatestCompatibilityDate;
                this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
                this._browsers.internalValue = value.browsers;
                this._buildImageMajorVersion = value.buildImageMajorVersion;
                this._compatibilityDate = value.compatibilityDate;
                this._compatibilityFlags = value.compatibilityFlags;
                this._d1Databases.internalValue = value.d1Databases;
                this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
                this._envVars.internalValue = value.envVars;
                this._failOpen = value.failOpen;
                this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
                this._kvNamespaces.internalValue = value.kvNamespaces;
                this._limits.internalValue = value.limits;
                this._mtlsCertificates.internalValue = value.mtlsCertificates;
                this._placement.internalValue = value.placement;
                this._queueProducers.internalValue = value.queueProducers;
                this._r2Buckets.internalValue = value.r2Buckets;
                this._services.internalValue = value.services;
                this._usageModel = value.usageModel;
                this._vectorizeBindings.internalValue = value.vectorizeBindings;
                this._wranglerConfigHash = value.wranglerConfigHash;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "aiBindings", {
        get: function () {
            return this._aiBindings;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putAiBindings = function (value) {
        this._aiBindings.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetAiBindings = function () {
        this._aiBindings.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "aiBindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiBindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "alwaysUseLatestCompatibilityDate", {
        get: function () {
            return this.getBooleanAttribute('always_use_latest_compatibility_date');
        },
        set: function (value) {
            this._alwaysUseLatestCompatibilityDate = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetAlwaysUseLatestCompatibilityDate = function () {
        this._alwaysUseLatestCompatibilityDate = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "alwaysUseLatestCompatibilityDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alwaysUseLatestCompatibilityDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "analyticsEngineDatasets", {
        get: function () {
            return this._analyticsEngineDatasets;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putAnalyticsEngineDatasets = function (value) {
        this._analyticsEngineDatasets.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetAnalyticsEngineDatasets = function () {
        this._analyticsEngineDatasets.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "analyticsEngineDatasetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._analyticsEngineDatasets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "browsers", {
        get: function () {
            return this._browsers;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putBrowsers = function (value) {
        this._browsers.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetBrowsers = function () {
        this._browsers.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "browsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._browsers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "buildImageMajorVersion", {
        get: function () {
            return this.getNumberAttribute('build_image_major_version');
        },
        set: function (value) {
            this._buildImageMajorVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetBuildImageMajorVersion = function () {
        this._buildImageMajorVersion = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "buildImageMajorVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildImageMajorVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "compatibilityDate", {
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        set: function (value) {
            this._compatibilityDate = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetCompatibilityDate = function () {
        this._compatibilityDate = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "compatibilityDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "compatibilityFlags", {
        get: function () {
            return this.getListAttribute('compatibility_flags');
        },
        set: function (value) {
            this._compatibilityFlags = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetCompatibilityFlags = function () {
        this._compatibilityFlags = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "compatibilityFlagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityFlags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "d1Databases", {
        get: function () {
            return this._d1Databases;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putD1Databases = function (value) {
        this._d1Databases.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetD1Databases = function () {
        this._d1Databases.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "d1DatabasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._d1Databases.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "durableObjectNamespaces", {
        get: function () {
            return this._durableObjectNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putDurableObjectNamespaces = function (value) {
        this._durableObjectNamespaces.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetDurableObjectNamespaces = function () {
        this._durableObjectNamespaces.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "durableObjectNamespacesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._durableObjectNamespaces.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putEnvVars = function (value) {
        this._envVars.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetEnvVars = function () {
        this._envVars.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "envVarsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._envVars.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "failOpen", {
        get: function () {
            return this.getBooleanAttribute('fail_open');
        },
        set: function (value) {
            this._failOpen = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetFailOpen = function () {
        this._failOpen = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "failOpenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "hyperdriveBindings", {
        get: function () {
            return this._hyperdriveBindings;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putHyperdriveBindings = function (value) {
        this._hyperdriveBindings.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetHyperdriveBindings = function () {
        this._hyperdriveBindings.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "hyperdriveBindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hyperdriveBindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "kvNamespaces", {
        get: function () {
            return this._kvNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putKvNamespaces = function (value) {
        this._kvNamespaces.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetKvNamespaces = function () {
        this._kvNamespaces.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "kvNamespacesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kvNamespaces.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putLimits = function (value) {
        this._limits.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetLimits = function () {
        this._limits.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "mtlsCertificates", {
        get: function () {
            return this._mtlsCertificates;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putMtlsCertificates = function (value) {
        this._mtlsCertificates.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetMtlsCertificates = function () {
        this._mtlsCertificates.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "mtlsCertificatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtlsCertificates.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putPlacement = function (value) {
        this._placement.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetPlacement = function () {
        this._placement.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "placementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placement.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "queueProducers", {
        get: function () {
            return this._queueProducers;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putQueueProducers = function (value) {
        this._queueProducers.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetQueueProducers = function () {
        this._queueProducers.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "queueProducersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueProducers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "r2Buckets", {
        get: function () {
            return this._r2Buckets;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putR2Buckets = function (value) {
        this._r2Buckets.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetR2Buckets = function () {
        this._r2Buckets.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "r2BucketsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._r2Buckets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "services", {
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putServices = function (value) {
        this._services.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetServices = function () {
        this._services.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "servicesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._services.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "usageModel", {
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        set: function (value) {
            this._usageModel = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetUsageModel = function () {
        this._usageModel = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "usageModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usageModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "vectorizeBindings", {
        get: function () {
            return this._vectorizeBindings;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.putVectorizeBindings = function (value) {
        this._vectorizeBindings.internalValue = value;
    };
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetVectorizeBindings = function () {
        this._vectorizeBindings.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "vectorizeBindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vectorizeBindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "wranglerConfigHash", {
        get: function () {
            return this.getStringAttribute('wrangler_config_hash');
        },
        set: function (value) {
            this._wranglerConfigHash = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsProductionOutputReference.prototype.resetWranglerConfigHash = function () {
        this._wranglerConfigHash = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsProductionOutputReference.prototype, "wranglerConfigHashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wranglerConfigHash;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsProductionOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsProductionOutputReference = PagesProjectDeploymentConfigsProductionOutputReference;
function pagesProjectDeploymentConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        preview: pagesProjectDeploymentConfigsPreviewToTerraform(struct.preview),
        production: pagesProjectDeploymentConfigsProductionToTerraform(struct.production),
    };
}
function pagesProjectDeploymentConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        preview: {
            value: pagesProjectDeploymentConfigsPreviewToHclTerraform(struct.preview),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsPreview",
        },
        production: {
            value: pagesProjectDeploymentConfigsProductionToHclTerraform(struct.production),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsProduction",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PagesProjectDeploymentConfigsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectDeploymentConfigsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectDeploymentConfigsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // preview - computed: true, optional: true, required: false
        _this._preview = new PagesProjectDeploymentConfigsPreviewOutputReference(_this, "preview");
        // production - computed: true, optional: true, required: false
        _this._production = new PagesProjectDeploymentConfigsProductionOutputReference(_this, "production");
        return _this;
    }
    Object.defineProperty(PagesProjectDeploymentConfigsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._preview) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.preview = (_b = this._preview) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._production) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.production = (_d = this._production) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._preview.internalValue = undefined;
                this._production.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._preview.internalValue = value.preview;
                this._production.internalValue = value.production;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsOutputReference.prototype, "preview", {
        get: function () {
            return this._preview;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsOutputReference.prototype.putPreview = function (value) {
        this._preview.internalValue = value;
    };
    PagesProjectDeploymentConfigsOutputReference.prototype.resetPreview = function () {
        this._preview.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsOutputReference.prototype, "previewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preview.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectDeploymentConfigsOutputReference.prototype, "production", {
        get: function () {
            return this._production;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectDeploymentConfigsOutputReference.prototype.putProduction = function (value) {
        this._production.internalValue = value;
    };
    PagesProjectDeploymentConfigsOutputReference.prototype.resetProduction = function () {
        this._production.internalValue = undefined;
    };
    Object.defineProperty(PagesProjectDeploymentConfigsOutputReference.prototype, "productionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._production.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectDeploymentConfigsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectDeploymentConfigsOutputReference = PagesProjectDeploymentConfigsOutputReference;
function pagesProjectLatestDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentBuildConfigOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentBuildConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentBuildConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "buildCaching", {
        // build_caching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('build_caching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "buildCommand", {
        // build_command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "destinationDir", {
        // destination_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "rootDir", {
        // root_dir - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_dir');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "webAnalyticsTag", {
        // web_analytics_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentBuildConfigOutputReference.prototype, "webAnalyticsToken", {
        // web_analytics_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('web_analytics_token');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentBuildConfigOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentBuildConfigOutputReference = PagesProjectLatestDeploymentBuildConfigOutputReference;
function pagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitDirty", {
        // commit_dirty - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('commit_dirty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitHash", {
        // commit_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference.prototype, "commitMessage", {
        // commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_message');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference = PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference;
function pagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentDeploymentTriggerOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentDeploymentTriggerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentDeploymentTriggerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(_this, "metadata");
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerOutputReference.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentDeploymentTriggerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentDeploymentTriggerOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentDeploymentTriggerOutputReference = PagesProjectLatestDeploymentDeploymentTriggerOutputReference;
function pagesProjectLatestDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentEnvVarsOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentEnvVarsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function PagesProjectLatestDeploymentEnvVarsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentEnvVarsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentEnvVarsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentEnvVarsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentEnvVarsOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentEnvVarsOutputReference = PagesProjectLatestDeploymentEnvVarsOutputReference;
var PagesProjectLatestDeploymentEnvVarsMap = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentEnvVarsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentEnvVarsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    PagesProjectLatestDeploymentEnvVarsMap.prototype.get = function (key) {
        return new PagesProjectLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return PagesProjectLatestDeploymentEnvVarsMap;
}(cdktf.ComplexMap));
exports.PagesProjectLatestDeploymentEnvVarsMap = PagesProjectLatestDeploymentEnvVarsMap;
function pagesProjectLatestDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentLatestStageOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentLatestStageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentLatestStageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentLatestStageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentLatestStageOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentLatestStageOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentLatestStageOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentLatestStageOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentLatestStageOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentLatestStageOutputReference = PagesProjectLatestDeploymentLatestStageOutputReference;
function pagesProjectLatestDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        // deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "pathExcludes", {
        // path_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "pathIncludes", {
        // path_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('path_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        // pr_comments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        // preview_branch_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        // preview_branch_includes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        // preview_deployment_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "productionBranch", {
        // production_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        // production_deployments_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceConfigOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentSourceConfigOutputReference = PagesProjectLatestDeploymentSourceConfigOutputReference;
function pagesProjectLatestDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentSourceOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new PagesProjectLatestDeploymentSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentSourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentSourceOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentSourceOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentSourceOutputReference = PagesProjectLatestDeploymentSourceOutputReference;
function pagesProjectLatestDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentStagesOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentStagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PagesProjectLatestDeploymentStagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentStagesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentStagesOutputReference.prototype, "endedOn", {
        // ended_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ended_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentStagesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentStagesOutputReference.prototype, "startedOn", {
        // started_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('started_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentStagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentStagesOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentStagesOutputReference = PagesProjectLatestDeploymentStagesOutputReference;
var PagesProjectLatestDeploymentStagesList = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentStagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PagesProjectLatestDeploymentStagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    PagesProjectLatestDeploymentStagesList.prototype.get = function (index) {
        return new PagesProjectLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return PagesProjectLatestDeploymentStagesList;
}(cdktf.ComplexList));
exports.PagesProjectLatestDeploymentStagesList = PagesProjectLatestDeploymentStagesList;
function pagesProjectLatestDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesProjectLatestDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesProjectLatestDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectLatestDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectLatestDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // build_config - computed: true, optional: false, required: false
        _this._buildConfig = new PagesProjectLatestDeploymentBuildConfigOutputReference(_this, "build_config");
        // deployment_trigger - computed: true, optional: false, required: false
        _this._deploymentTrigger = new PagesProjectLatestDeploymentDeploymentTriggerOutputReference(_this, "deployment_trigger");
        // env_vars - computed: true, optional: false, required: false
        _this._envVars = new PagesProjectLatestDeploymentEnvVarsMap(_this, "env_vars");
        // latest_stage - computed: true, optional: false, required: false
        _this._latestStage = new PagesProjectLatestDeploymentLatestStageOutputReference(_this, "latest_stage");
        // source - computed: true, optional: false, required: false
        _this._source = new PagesProjectLatestDeploymentSourceOutputReference(_this, "source");
        // stages - computed: true, optional: false, required: false
        _this._stages = new PagesProjectLatestDeploymentStagesList(_this, "stages", false);
        return _this;
    }
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "aliases", {
        // aliases - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aliases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "deploymentTrigger", {
        get: function () {
            return this._deploymentTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "envVars", {
        get: function () {
            return this._envVars;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "isSkipped", {
        // is_skipped - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_skipped');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "latestStage", {
        get: function () {
            return this._latestStage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "projectName", {
        // project_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('project_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "shortId", {
        // short_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('short_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectLatestDeploymentOutputReference.prototype, "usesFunctions", {
        // uses_functions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('uses_functions');
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectLatestDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectLatestDeploymentOutputReference = PagesProjectLatestDeploymentOutputReference;
function pagesProjectSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deployments_enabled: cdktf.booleanToTerraform(struct.deploymentsEnabled),
        owner: cdktf.stringToTerraform(struct.owner),
        owner_id: cdktf.stringToTerraform(struct.ownerId),
        path_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.pathExcludes),
        path_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.pathIncludes),
        pr_comments_enabled: cdktf.booleanToTerraform(struct.prCommentsEnabled),
        preview_branch_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.previewBranchExcludes),
        preview_branch_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.previewBranchIncludes),
        preview_deployment_setting: cdktf.stringToTerraform(struct.previewDeploymentSetting),
        production_branch: cdktf.stringToTerraform(struct.productionBranch),
        production_deployments_enabled: cdktf.booleanToTerraform(struct.productionDeploymentsEnabled),
        repo_id: cdktf.stringToTerraform(struct.repoId),
        repo_name: cdktf.stringToTerraform(struct.repoName),
    };
}
function pagesProjectSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        deployments_enabled: {
            value: cdktf.booleanToHclTerraform(struct.deploymentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        owner: {
            value: cdktf.stringToHclTerraform(struct.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner_id: {
            value: cdktf.stringToHclTerraform(struct.ownerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path_excludes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.pathExcludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        path_includes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.pathIncludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pr_comments_enabled: {
            value: cdktf.booleanToHclTerraform(struct.prCommentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preview_branch_excludes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.previewBranchExcludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        preview_branch_includes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.previewBranchIncludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        preview_deployment_setting: {
            value: cdktf.stringToHclTerraform(struct.previewDeploymentSetting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        production_branch: {
            value: cdktf.stringToHclTerraform(struct.productionBranch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        production_deployments_enabled: {
            value: cdktf.booleanToHclTerraform(struct.productionDeploymentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        repo_id: {
            value: cdktf.stringToHclTerraform(struct.repoId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repo_name: {
            value: cdktf.stringToHclTerraform(struct.repoName),
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
}
var PagesProjectSourceConfigOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectSourceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectSourceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._deploymentsEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.deploymentsEnabled = this._deploymentsEnabled;
            }
            if (this._owner !== undefined) {
                hasAnyValues = true;
                internalValueResult.owner = this._owner;
            }
            if (this._ownerId !== undefined) {
                hasAnyValues = true;
                internalValueResult.ownerId = this._ownerId;
            }
            if (this._pathExcludes !== undefined) {
                hasAnyValues = true;
                internalValueResult.pathExcludes = this._pathExcludes;
            }
            if (this._pathIncludes !== undefined) {
                hasAnyValues = true;
                internalValueResult.pathIncludes = this._pathIncludes;
            }
            if (this._prCommentsEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.prCommentsEnabled = this._prCommentsEnabled;
            }
            if (this._previewBranchExcludes !== undefined) {
                hasAnyValues = true;
                internalValueResult.previewBranchExcludes = this._previewBranchExcludes;
            }
            if (this._previewBranchIncludes !== undefined) {
                hasAnyValues = true;
                internalValueResult.previewBranchIncludes = this._previewBranchIncludes;
            }
            if (this._previewDeploymentSetting !== undefined) {
                hasAnyValues = true;
                internalValueResult.previewDeploymentSetting = this._previewDeploymentSetting;
            }
            if (this._productionBranch !== undefined) {
                hasAnyValues = true;
                internalValueResult.productionBranch = this._productionBranch;
            }
            if (this._productionDeploymentsEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.productionDeploymentsEnabled = this._productionDeploymentsEnabled;
            }
            if (this._repoId !== undefined) {
                hasAnyValues = true;
                internalValueResult.repoId = this._repoId;
            }
            if (this._repoName !== undefined) {
                hasAnyValues = true;
                internalValueResult.repoName = this._repoName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._deploymentsEnabled = undefined;
                this._owner = undefined;
                this._ownerId = undefined;
                this._pathExcludes = undefined;
                this._pathIncludes = undefined;
                this._prCommentsEnabled = undefined;
                this._previewBranchExcludes = undefined;
                this._previewBranchIncludes = undefined;
                this._previewDeploymentSetting = undefined;
                this._productionBranch = undefined;
                this._productionDeploymentsEnabled = undefined;
                this._repoId = undefined;
                this._repoName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._deploymentsEnabled = value.deploymentsEnabled;
                this._owner = value.owner;
                this._ownerId = value.ownerId;
                this._pathExcludes = value.pathExcludes;
                this._pathIncludes = value.pathIncludes;
                this._prCommentsEnabled = value.prCommentsEnabled;
                this._previewBranchExcludes = value.previewBranchExcludes;
                this._previewBranchIncludes = value.previewBranchIncludes;
                this._previewDeploymentSetting = value.previewDeploymentSetting;
                this._productionBranch = value.productionBranch;
                this._productionDeploymentsEnabled = value.productionDeploymentsEnabled;
                this._repoId = value.repoId;
                this._repoName = value.repoName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "deploymentsEnabled", {
        get: function () {
            return this.getBooleanAttribute('deployments_enabled');
        },
        set: function (value) {
            this._deploymentsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetDeploymentsEnabled = function () {
        this._deploymentsEnabled = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "deploymentsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetOwner = function () {
        this._owner = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "ownerId", {
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        set: function (value) {
            this._ownerId = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetOwnerId = function () {
        this._ownerId = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "ownerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "pathExcludes", {
        get: function () {
            return this.getListAttribute('path_excludes');
        },
        set: function (value) {
            this._pathExcludes = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetPathExcludes = function () {
        this._pathExcludes = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "pathExcludesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathExcludes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "pathIncludes", {
        get: function () {
            return this.getListAttribute('path_includes');
        },
        set: function (value) {
            this._pathIncludes = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetPathIncludes = function () {
        this._pathIncludes = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "pathIncludesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathIncludes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "prCommentsEnabled", {
        get: function () {
            return this.getBooleanAttribute('pr_comments_enabled');
        },
        set: function (value) {
            this._prCommentsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetPrCommentsEnabled = function () {
        this._prCommentsEnabled = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "prCommentsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prCommentsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "previewBranchExcludes", {
        get: function () {
            return this.getListAttribute('preview_branch_excludes');
        },
        set: function (value) {
            this._previewBranchExcludes = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetPreviewBranchExcludes = function () {
        this._previewBranchExcludes = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "previewBranchExcludesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._previewBranchExcludes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "previewBranchIncludes", {
        get: function () {
            return this.getListAttribute('preview_branch_includes');
        },
        set: function (value) {
            this._previewBranchIncludes = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetPreviewBranchIncludes = function () {
        this._previewBranchIncludes = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "previewBranchIncludesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._previewBranchIncludes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "previewDeploymentSetting", {
        get: function () {
            return this.getStringAttribute('preview_deployment_setting');
        },
        set: function (value) {
            this._previewDeploymentSetting = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetPreviewDeploymentSetting = function () {
        this._previewDeploymentSetting = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "previewDeploymentSettingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._previewDeploymentSetting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "productionBranch", {
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        set: function (value) {
            this._productionBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetProductionBranch = function () {
        this._productionBranch = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "productionBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productionBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "productionDeploymentsEnabled", {
        get: function () {
            return this.getBooleanAttribute('production_deployments_enabled');
        },
        set: function (value) {
            this._productionDeploymentsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetProductionDeploymentsEnabled = function () {
        this._productionDeploymentsEnabled = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "productionDeploymentsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productionDeploymentsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "repoId", {
        get: function () {
            return this.getStringAttribute('repo_id');
        },
        set: function (value) {
            this._repoId = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetRepoId = function () {
        this._repoId = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "repoIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repoId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "repoName", {
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        set: function (value) {
            this._repoName = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceConfigOutputReference.prototype.resetRepoName = function () {
        this._repoName = undefined;
    };
    Object.defineProperty(PagesProjectSourceConfigOutputReference.prototype, "repoNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repoName;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectSourceConfigOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectSourceConfigOutputReference = PagesProjectSourceConfigOutputReference;
function pagesProjectSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config: pagesProjectSourceConfigToTerraform(struct.config),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function pagesProjectSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        config: {
            value: pagesProjectSourceConfigToHclTerraform(struct.config),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectSourceConfig",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
}
var PagesProjectSourceOutputReference = /** @class */ (function (_super) {
    __extends(PagesProjectSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesProjectSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: false, optional: false, required: true
        _this._config = new PagesProjectSourceConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(PagesProjectSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.config = (_b = this._config) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._config.internalValue = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._config.internalValue = value.config;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    PagesProjectSourceOutputReference.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    Object.defineProperty(PagesProjectSourceOutputReference.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProjectSourceOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return PagesProjectSourceOutputReference;
}(cdktf.ComplexObject));
exports.PagesProjectSourceOutputReference = PagesProjectSourceOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project cloudflare_pages_project}
*/
var PagesProject = /** @class */ (function (_super) {
    __extends(PagesProject, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project cloudflare_pages_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PagesProjectConfig
    */
    function PagesProject(scope, id, config) {
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
        // build_config - computed: true, optional: true, required: false
        _this._buildConfig = new PagesProjectBuildConfigOutputReference(_this, "build_config");
        // canonical_deployment - computed: true, optional: false, required: false
        _this._canonicalDeployment = new PagesProjectCanonicalDeploymentOutputReference(_this, "canonical_deployment");
        // deployment_configs - computed: true, optional: true, required: false
        _this._deploymentConfigs = new PagesProjectDeploymentConfigsOutputReference(_this, "deployment_configs");
        // latest_deployment - computed: true, optional: false, required: false
        _this._latestDeployment = new PagesProjectLatestDeploymentOutputReference(_this, "latest_deployment");
        // source - computed: false, optional: true, required: false
        _this._source = new PagesProjectSourceOutputReference(_this, "source");
        _this._accountId = config.accountId;
        _this._buildConfig.internalValue = config.buildConfig;
        _this._deploymentConfigs.internalValue = config.deploymentConfigs;
        _this._name = config.name;
        _this._productionBranch = config.productionBranch;
        _this._source.internalValue = config.source;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PagesProject to import
    * @param importFromId The id of the existing PagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PagesProject to import is found
    */
    PagesProject.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_project", importId: importFromId, provider: provider });
    };
    Object.defineProperty(PagesProject.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesProject.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(PagesProject.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "buildConfig", {
        get: function () {
            return this._buildConfig;
        },
        enumerable: false,
        configurable: true
    });
    PagesProject.prototype.putBuildConfig = function (value) {
        this._buildConfig.internalValue = value;
    };
    PagesProject.prototype.resetBuildConfig = function () {
        this._buildConfig.internalValue = undefined;
    };
    Object.defineProperty(PagesProject.prototype, "buildConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "canonicalDeployment", {
        get: function () {
            return this._canonicalDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "deploymentConfigs", {
        get: function () {
            return this._deploymentConfigs;
        },
        enumerable: false,
        configurable: true
    });
    PagesProject.prototype.putDeploymentConfigs = function (value) {
        this._deploymentConfigs.internalValue = value;
    };
    PagesProject.prototype.resetDeploymentConfigs = function () {
        this._deploymentConfigs.internalValue = undefined;
    };
    Object.defineProperty(PagesProject.prototype, "deploymentConfigsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentConfigs.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "domains", {
        // domains - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('domains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "framework", {
        // framework - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('framework');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "frameworkVersion", {
        // framework_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('framework_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "latestDeployment", {
        get: function () {
            return this._latestDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "previewScriptName", {
        // preview_script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview_script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "productionBranch", {
        get: function () {
            return this.getStringAttribute('production_branch');
        },
        set: function (value) {
            this._productionBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "productionBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productionBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "productionScriptName", {
        // production_script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('production_script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    PagesProject.prototype.putSource = function (value) {
        this._source.internalValue = value;
    };
    PagesProject.prototype.resetSource = function () {
        this._source.internalValue = undefined;
    };
    Object.defineProperty(PagesProject.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "subdomain", {
        // subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesProject.prototype, "usesFunctions", {
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
    PagesProject.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            build_config: pagesProjectBuildConfigToTerraform(this._buildConfig.internalValue),
            deployment_configs: pagesProjectDeploymentConfigsToTerraform(this._deploymentConfigs.internalValue),
            name: cdktf.stringToTerraform(this._name),
            production_branch: cdktf.stringToTerraform(this._productionBranch),
            source: pagesProjectSourceToTerraform(this._source.internalValue),
        };
    };
    PagesProject.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            build_config: {
                value: pagesProjectBuildConfigToHclTerraform(this._buildConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PagesProjectBuildConfig",
            },
            deployment_configs: {
                value: pagesProjectDeploymentConfigsToHclTerraform(this._deploymentConfigs.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PagesProjectDeploymentConfigs",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            production_branch: {
                value: cdktf.stringToHclTerraform(this._productionBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: pagesProjectSourceToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PagesProjectSource",
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
    PagesProject.tfResourceType = "cloudflare_pages_project";
    return PagesProject;
}(cdktf.TerraformResource));
exports.PagesProject = PagesProject;
