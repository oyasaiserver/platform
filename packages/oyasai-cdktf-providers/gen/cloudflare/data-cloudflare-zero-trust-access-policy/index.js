"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy
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
exports.DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeList = exports.DataCloudflareZeroTrustAccessPolicyExcludeOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference = exports.DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference = exports.DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference = exports.DataCloudflareZeroTrustAccessPolicyApprovalGroupsList = exports.DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference = void 0;
exports.DataCloudflareZeroTrustAccessPolicy = exports.DataCloudflareZeroTrustAccessPolicyRequireList = exports.DataCloudflareZeroTrustAccessPolicyRequireOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference = exports.DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeList = exports.DataCloudflareZeroTrustAccessPolicyIncludeOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference = exports.DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessPolicyApprovalGroupsToTerraform = dataCloudflareZeroTrustAccessPolicyApprovalGroupsToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyApprovalGroupsToHclTerraform = dataCloudflareZeroTrustAccessPolicyApprovalGroupsToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToTerraform = dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToHclTerraform = dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyConnectionRulesToTerraform = dataCloudflareZeroTrustAccessPolicyConnectionRulesToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyConnectionRulesToHclTerraform = dataCloudflareZeroTrustAccessPolicyConnectionRulesToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeCertificateToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeCertificateToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeCertificateToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeCertificateToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEmailToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEmailToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEmailToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEmailToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGeoToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGeoToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGeoToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGeoToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGroupToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGroupToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGroupToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGroupToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeIpToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeIpToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeIpToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeIpToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeOidcToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeOidcToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeOidcToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeOidcToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeOktaToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeOktaToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeOktaToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeOktaToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeSamlToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeSamlToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeSamlToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeSamlToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeToTerraform = dataCloudflareZeroTrustAccessPolicyExcludeToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyExcludeToHclTerraform = dataCloudflareZeroTrustAccessPolicyExcludeToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeCertificateToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeCertificateToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeCertificateToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeCertificateToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEmailToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEmailToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEmailToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEmailToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGeoToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGeoToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGeoToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGeoToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGroupToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGroupToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGroupToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGroupToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeIpToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeIpToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeIpToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeIpToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeOidcToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeOidcToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeOidcToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeOidcToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeOktaToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeOktaToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeOktaToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeOktaToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeSamlToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeSamlToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeSamlToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeSamlToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeToTerraform = dataCloudflareZeroTrustAccessPolicyIncludeToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyIncludeToHclTerraform = dataCloudflareZeroTrustAccessPolicyIncludeToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyMfaConfigToTerraform = dataCloudflareZeroTrustAccessPolicyMfaConfigToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyMfaConfigToHclTerraform = dataCloudflareZeroTrustAccessPolicyMfaConfigToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform = dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAuthContextToTerraform = dataCloudflareZeroTrustAccessPolicyRequireAuthContextToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAuthContextToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireAuthContextToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToTerraform = dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAzureAdToTerraform = dataCloudflareZeroTrustAccessPolicyRequireAzureAdToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireAzureAdToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireAzureAdToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireCertificateToTerraform = dataCloudflareZeroTrustAccessPolicyRequireCertificateToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireCertificateToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireCertificateToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireCommonNameToTerraform = dataCloudflareZeroTrustAccessPolicyRequireCommonNameToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireCommonNameToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireCommonNameToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToTerraform = dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEmailToTerraform = dataCloudflareZeroTrustAccessPolicyRequireEmailToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEmailToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireEmailToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToTerraform = dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToTerraform = dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEveryoneToTerraform = dataCloudflareZeroTrustAccessPolicyRequireEveryoneToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireEveryoneToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireEveryoneToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToTerraform = dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGeoToTerraform = dataCloudflareZeroTrustAccessPolicyRequireGeoToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGeoToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireGeoToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToTerraform = dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGroupToTerraform = dataCloudflareZeroTrustAccessPolicyRequireGroupToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGroupToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireGroupToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGsuiteToTerraform = dataCloudflareZeroTrustAccessPolicyRequireGsuiteToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireGsuiteToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireGsuiteToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireIpToTerraform = dataCloudflareZeroTrustAccessPolicyRequireIpToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireIpToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireIpToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireIpListStructToTerraform = dataCloudflareZeroTrustAccessPolicyRequireIpListStructToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireIpListStructToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireIpListStructToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToTerraform = dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToTerraform = dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireOidcToTerraform = dataCloudflareZeroTrustAccessPolicyRequireOidcToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireOidcToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireOidcToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireOktaToTerraform = dataCloudflareZeroTrustAccessPolicyRequireOktaToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireOktaToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireOktaToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireSamlToTerraform = dataCloudflareZeroTrustAccessPolicyRequireSamlToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireSamlToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireSamlToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToTerraform = dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToTerraform = dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireToTerraform = dataCloudflareZeroTrustAccessPolicyRequireToTerraform;
exports.dataCloudflareZeroTrustAccessPolicyRequireToHclTerraform = dataCloudflareZeroTrustAccessPolicyRequireToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessPolicyApprovalGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyApprovalGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "approvalsNeeded", {
        // approvals_needed - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('approvals_needed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "emailAddresses", {
        // email_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('email_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "emailListUuid", {
        // email_list_uuid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email_list_uuid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference = DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference;
var DataCloudflareZeroTrustAccessPolicyApprovalGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyApprovalGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyApprovalGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessPolicyApprovalGroupsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessPolicyApprovalGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessPolicyApprovalGroupsList = DataCloudflareZeroTrustAccessPolicyApprovalGroupsList;
function dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "allowedClipboardLocalToRemoteFormats", {
        // allowed_clipboard_local_to_remote_formats - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_clipboard_local_to_remote_formats');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "allowedClipboardRemoteToLocalFormats", {
        // allowed_clipboard_remote_to_local_formats - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_clipboard_remote_to_local_formats');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference = DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference;
function dataCloudflareZeroTrustAccessPolicyConnectionRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyConnectionRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // rdp - computed: true, optional: false, required: false
        _this._rdp = new DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference(_this, "rdp");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference.prototype, "rdp", {
        get: function () {
            return this._rdp;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference = DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "acId", {
        // ac_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference.prototype, "authMethod", {
        // auth_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference.prototype, "commonName", {
        // common_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('common_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference.prototype, "integrationUid", {
        // integration_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        // evaluate_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "keysUrl", {
        // keys_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference.prototype, "countryCode", {
        // country_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "team", {
        // team - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference.prototype, "appUid", {
        // app_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "claimName", {
        // claim_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "claimValue", {
        // claim_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "attributeName", {
        // attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "attributeValue", {
        // attribute_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference.prototype, "tokenId", {
        // token_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference.prototype, "userRiskScore", {
        // user_risk_score - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference;
function dataCloudflareZeroTrustAccessPolicyExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyExcludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: true, optional: false, required: false
        _this._anyValidServiceToken = new DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: true, optional: false, required: false
        _this._authContext = new DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: true, optional: false, required: false
        _this._authMethod = new DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: true, optional: false, required: false
        _this._azureAd = new DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: true, optional: false, required: false
        _this._certificate = new DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference(_this, "certificate");
        // common_name - computed: true, optional: false, required: false
        _this._commonName = new DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: true, optional: false, required: false
        _this._devicePosture = new DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference(_this, "device_posture");
        // email - computed: true, optional: false, required: false
        _this._email = new DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference(_this, "email");
        // email_domain - computed: true, optional: false, required: false
        _this._emailDomain = new DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: true, optional: false, required: false
        _this._emailList = new DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: true, optional: false, required: false
        _this._everyone = new DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: true, optional: false, required: false
        _this._externalEvaluation = new DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: true, optional: false, required: false
        _this._geo = new DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference(_this, "geo");
        // github_organization - computed: true, optional: false, required: false
        _this._githubOrganization = new DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: true, optional: false, required: false
        _this._group = new DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference(_this, "group");
        // gsuite - computed: true, optional: false, required: false
        _this._gsuite = new DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference(_this, "gsuite");
        // ip - computed: true, optional: false, required: false
        _this._ip = new DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference(_this, "ip");
        // ip_list - computed: true, optional: false, required: false
        _this._ipList = new DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: true, optional: false, required: false
        _this._linkedAppToken = new DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: true, optional: false, required: false
        _this._loginMethod = new DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: true, optional: false, required: false
        _this._oidc = new DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference(_this, "oidc");
        // okta - computed: true, optional: false, required: false
        _this._okta = new DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference(_this, "okta");
        // saml - computed: true, optional: false, required: false
        _this._saml = new DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference(_this, "saml");
        // service_token - computed: true, optional: false, required: false
        _this._serviceToken = new DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: true, optional: false, required: false
        _this._userRiskScore = new DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyExcludeOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyExcludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyExcludeOutputReference = DataCloudflareZeroTrustAccessPolicyExcludeOutputReference;
var DataCloudflareZeroTrustAccessPolicyExcludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessPolicyExcludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessPolicyExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessPolicyExcludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessPolicyExcludeList = DataCloudflareZeroTrustAccessPolicyExcludeList;
function dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "acId", {
        // ac_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference.prototype, "authMethod", {
        // auth_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference.prototype, "commonName", {
        // common_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('common_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference.prototype, "integrationUid", {
        // integration_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        // evaluate_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "keysUrl", {
        // keys_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference.prototype, "countryCode", {
        // country_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "team", {
        // team - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference.prototype, "appUid", {
        // app_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "claimName", {
        // claim_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "claimValue", {
        // claim_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "attributeName", {
        // attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "attributeValue", {
        // attribute_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference.prototype, "tokenId", {
        // token_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference.prototype, "userRiskScore", {
        // user_risk_score - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference;
function dataCloudflareZeroTrustAccessPolicyIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyIncludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: true, optional: false, required: false
        _this._anyValidServiceToken = new DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: true, optional: false, required: false
        _this._authContext = new DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: true, optional: false, required: false
        _this._authMethod = new DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: true, optional: false, required: false
        _this._azureAd = new DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: true, optional: false, required: false
        _this._certificate = new DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference(_this, "certificate");
        // common_name - computed: true, optional: false, required: false
        _this._commonName = new DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: true, optional: false, required: false
        _this._devicePosture = new DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference(_this, "device_posture");
        // email - computed: true, optional: false, required: false
        _this._email = new DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference(_this, "email");
        // email_domain - computed: true, optional: false, required: false
        _this._emailDomain = new DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: true, optional: false, required: false
        _this._emailList = new DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: true, optional: false, required: false
        _this._everyone = new DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: true, optional: false, required: false
        _this._externalEvaluation = new DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: true, optional: false, required: false
        _this._geo = new DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference(_this, "geo");
        // github_organization - computed: true, optional: false, required: false
        _this._githubOrganization = new DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: true, optional: false, required: false
        _this._group = new DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference(_this, "group");
        // gsuite - computed: true, optional: false, required: false
        _this._gsuite = new DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference(_this, "gsuite");
        // ip - computed: true, optional: false, required: false
        _this._ip = new DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference(_this, "ip");
        // ip_list - computed: true, optional: false, required: false
        _this._ipList = new DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: true, optional: false, required: false
        _this._linkedAppToken = new DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: true, optional: false, required: false
        _this._loginMethod = new DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: true, optional: false, required: false
        _this._oidc = new DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference(_this, "oidc");
        // okta - computed: true, optional: false, required: false
        _this._okta = new DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference(_this, "okta");
        // saml - computed: true, optional: false, required: false
        _this._saml = new DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference(_this, "saml");
        // service_token - computed: true, optional: false, required: false
        _this._serviceToken = new DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: true, optional: false, required: false
        _this._userRiskScore = new DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyIncludeOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyIncludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyIncludeOutputReference = DataCloudflareZeroTrustAccessPolicyIncludeOutputReference;
var DataCloudflareZeroTrustAccessPolicyIncludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessPolicyIncludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessPolicyIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessPolicyIncludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessPolicyIncludeList = DataCloudflareZeroTrustAccessPolicyIncludeList;
function dataCloudflareZeroTrustAccessPolicyMfaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyMfaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "allowedAuthenticators", {
        // allowed_authenticators - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_authenticators');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "mfaDisabled", {
        // mfa_disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('mfa_disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference = DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference = DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "acId", {
        // ac_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference = DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference.prototype, "authMethod", {
        // auth_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference = DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference = DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference = DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference.prototype, "commonName", {
        // common_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('common_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference = DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference.prototype, "integrationUid", {
        // integration_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference = DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference = DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference = DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference = DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference.prototype, "internalValue", {
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
    return DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference = DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        // evaluate_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "keysUrl", {
        // keys_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference = DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference.prototype, "countryCode", {
        // country_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference = DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "team", {
        // team - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference = DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference = DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference = DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference = DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireIpListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference = DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference.prototype, "appUid", {
        // app_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference = DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference = DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "claimName", {
        // claim_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "claimValue", {
        // claim_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference = DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference = DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "attributeName", {
        // attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "attributeValue", {
        // attribute_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "identityProviderId", {
        // identity_provider_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference = DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference.prototype, "tokenId", {
        // token_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference = DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference.prototype, "userRiskScore", {
        // user_risk_score - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference = DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference;
function dataCloudflareZeroTrustAccessPolicyRequireToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessPolicyRequireToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessPolicyRequireOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyRequireOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: true, optional: false, required: false
        _this._anyValidServiceToken = new DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: true, optional: false, required: false
        _this._authContext = new DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: true, optional: false, required: false
        _this._authMethod = new DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: true, optional: false, required: false
        _this._azureAd = new DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: true, optional: false, required: false
        _this._certificate = new DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference(_this, "certificate");
        // common_name - computed: true, optional: false, required: false
        _this._commonName = new DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: true, optional: false, required: false
        _this._devicePosture = new DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference(_this, "device_posture");
        // email - computed: true, optional: false, required: false
        _this._email = new DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference(_this, "email");
        // email_domain - computed: true, optional: false, required: false
        _this._emailDomain = new DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: true, optional: false, required: false
        _this._emailList = new DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: true, optional: false, required: false
        _this._everyone = new DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: true, optional: false, required: false
        _this._externalEvaluation = new DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: true, optional: false, required: false
        _this._geo = new DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference(_this, "geo");
        // github_organization - computed: true, optional: false, required: false
        _this._githubOrganization = new DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: true, optional: false, required: false
        _this._group = new DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference(_this, "group");
        // gsuite - computed: true, optional: false, required: false
        _this._gsuite = new DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference(_this, "gsuite");
        // ip - computed: true, optional: false, required: false
        _this._ip = new DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference(_this, "ip");
        // ip_list - computed: true, optional: false, required: false
        _this._ipList = new DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: true, optional: false, required: false
        _this._linkedAppToken = new DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: true, optional: false, required: false
        _this._loginMethod = new DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: true, optional: false, required: false
        _this._oidc = new DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference(_this, "oidc");
        // okta - computed: true, optional: false, required: false
        _this._okta = new DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference(_this, "okta");
        // saml - computed: true, optional: false, required: false
        _this._saml = new DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference(_this, "saml");
        // service_token - computed: true, optional: false, required: false
        _this._serviceToken = new DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: true, optional: false, required: false
        _this._userRiskScore = new DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicyRequireOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessPolicyRequireOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessPolicyRequireOutputReference = DataCloudflareZeroTrustAccessPolicyRequireOutputReference;
var DataCloudflareZeroTrustAccessPolicyRequireList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicyRequireList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessPolicyRequireList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessPolicyRequireList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessPolicyRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessPolicyRequireList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessPolicyRequireList = DataCloudflareZeroTrustAccessPolicyRequireList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy cloudflare_zero_trust_access_policy}
*/
var DataCloudflareZeroTrustAccessPolicy = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy cloudflare_zero_trust_access_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessPolicyConfig
    */
    function DataCloudflareZeroTrustAccessPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_policy',
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
        // approval_groups - computed: true, optional: false, required: false
        _this._approvalGroups = new DataCloudflareZeroTrustAccessPolicyApprovalGroupsList(_this, "approval_groups", true);
        // connection_rules - computed: true, optional: false, required: false
        _this._connectionRules = new DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference(_this, "connection_rules");
        // exclude - computed: true, optional: false, required: false
        _this._exclude = new DataCloudflareZeroTrustAccessPolicyExcludeList(_this, "exclude", true);
        // include - computed: true, optional: false, required: false
        _this._include = new DataCloudflareZeroTrustAccessPolicyIncludeList(_this, "include", true);
        // mfa_config - computed: true, optional: false, required: false
        _this._mfaConfig = new DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference(_this, "mfa_config");
        // require - computed: true, optional: false, required: false
        _this._require = new DataCloudflareZeroTrustAccessPolicyRequireList(_this, "require", true);
        _this._accountId = config.accountId;
        _this._policyId = config.policyId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessPolicy to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessPolicy to import is found
    */
    DataCloudflareZeroTrustAccessPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessPolicy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "appCount", {
        // app_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('app_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "approvalGroups", {
        get: function () {
            return this._approvalGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "approvalRequired", {
        // approval_required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('approval_required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "connectionRules", {
        get: function () {
            return this._connectionRules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "decision", {
        // decision - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "isolationRequired", {
        // isolation_required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('isolation_required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "mfaConfig", {
        get: function () {
            return this._mfaConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "policyId", {
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        set: function (value) {
            this._policyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "policyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "purposeJustificationPrompt", {
        // purpose_justification_prompt - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('purpose_justification_prompt');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "purposeJustificationRequired", {
        // purpose_justification_required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('purpose_justification_required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "require", {
        get: function () {
            return this._require;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "reusable", {
        // reusable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('reusable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessPolicy.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustAccessPolicy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            policy_id: cdktf.stringToTerraform(this._policyId),
        };
    };
    DataCloudflareZeroTrustAccessPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_id: {
                value: cdktf.stringToHclTerraform(this._policyId),
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
    DataCloudflareZeroTrustAccessPolicy.tfResourceType = "cloudflare_zero_trust_access_policy";
    return DataCloudflareZeroTrustAccessPolicy;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessPolicy = DataCloudflareZeroTrustAccessPolicy;
