"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy
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
exports.ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference = exports.ZeroTrustAccessPolicyIncludeIpListStructOutputReference = exports.ZeroTrustAccessPolicyIncludeIpOutputReference = exports.ZeroTrustAccessPolicyIncludeGsuiteOutputReference = exports.ZeroTrustAccessPolicyIncludeGroupOutputReference = exports.ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference = exports.ZeroTrustAccessPolicyIncludeGeoOutputReference = exports.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference = exports.ZeroTrustAccessPolicyIncludeEveryoneOutputReference = exports.ZeroTrustAccessPolicyIncludeEmailListStructOutputReference = exports.ZeroTrustAccessPolicyIncludeEmailDomainOutputReference = exports.ZeroTrustAccessPolicyIncludeEmailOutputReference = exports.ZeroTrustAccessPolicyIncludeDevicePostureOutputReference = exports.ZeroTrustAccessPolicyIncludeCommonNameOutputReference = exports.ZeroTrustAccessPolicyIncludeCertificateOutputReference = exports.ZeroTrustAccessPolicyIncludeAzureAdOutputReference = exports.ZeroTrustAccessPolicyIncludeAuthMethodOutputReference = exports.ZeroTrustAccessPolicyIncludeAuthContextOutputReference = exports.ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference = exports.ZeroTrustAccessPolicyExcludeList = exports.ZeroTrustAccessPolicyExcludeOutputReference = exports.ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference = exports.ZeroTrustAccessPolicyExcludeServiceTokenOutputReference = exports.ZeroTrustAccessPolicyExcludeSamlOutputReference = exports.ZeroTrustAccessPolicyExcludeOktaOutputReference = exports.ZeroTrustAccessPolicyExcludeOidcOutputReference = exports.ZeroTrustAccessPolicyExcludeLoginMethodOutputReference = exports.ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference = exports.ZeroTrustAccessPolicyExcludeIpListStructOutputReference = exports.ZeroTrustAccessPolicyExcludeIpOutputReference = exports.ZeroTrustAccessPolicyExcludeGsuiteOutputReference = exports.ZeroTrustAccessPolicyExcludeGroupOutputReference = exports.ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference = exports.ZeroTrustAccessPolicyExcludeGeoOutputReference = exports.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference = exports.ZeroTrustAccessPolicyExcludeEveryoneOutputReference = exports.ZeroTrustAccessPolicyExcludeEmailListStructOutputReference = exports.ZeroTrustAccessPolicyExcludeEmailDomainOutputReference = exports.ZeroTrustAccessPolicyExcludeEmailOutputReference = exports.ZeroTrustAccessPolicyExcludeDevicePostureOutputReference = exports.ZeroTrustAccessPolicyExcludeCommonNameOutputReference = exports.ZeroTrustAccessPolicyExcludeCertificateOutputReference = exports.ZeroTrustAccessPolicyExcludeAzureAdOutputReference = exports.ZeroTrustAccessPolicyExcludeAuthMethodOutputReference = exports.ZeroTrustAccessPolicyExcludeAuthContextOutputReference = exports.ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference = exports.ZeroTrustAccessPolicyConnectionRulesOutputReference = exports.ZeroTrustAccessPolicyConnectionRulesRdpOutputReference = exports.ZeroTrustAccessPolicyApprovalGroupsList = exports.ZeroTrustAccessPolicyApprovalGroupsOutputReference = void 0;
exports.ZeroTrustAccessPolicy = exports.ZeroTrustAccessPolicyRequireList = exports.ZeroTrustAccessPolicyRequireOutputReference = exports.ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference = exports.ZeroTrustAccessPolicyRequireServiceTokenOutputReference = exports.ZeroTrustAccessPolicyRequireSamlOutputReference = exports.ZeroTrustAccessPolicyRequireOktaOutputReference = exports.ZeroTrustAccessPolicyRequireOidcOutputReference = exports.ZeroTrustAccessPolicyRequireLoginMethodOutputReference = exports.ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference = exports.ZeroTrustAccessPolicyRequireIpListStructOutputReference = exports.ZeroTrustAccessPolicyRequireIpOutputReference = exports.ZeroTrustAccessPolicyRequireGsuiteOutputReference = exports.ZeroTrustAccessPolicyRequireGroupOutputReference = exports.ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference = exports.ZeroTrustAccessPolicyRequireGeoOutputReference = exports.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference = exports.ZeroTrustAccessPolicyRequireEveryoneOutputReference = exports.ZeroTrustAccessPolicyRequireEmailListStructOutputReference = exports.ZeroTrustAccessPolicyRequireEmailDomainOutputReference = exports.ZeroTrustAccessPolicyRequireEmailOutputReference = exports.ZeroTrustAccessPolicyRequireDevicePostureOutputReference = exports.ZeroTrustAccessPolicyRequireCommonNameOutputReference = exports.ZeroTrustAccessPolicyRequireCertificateOutputReference = exports.ZeroTrustAccessPolicyRequireAzureAdOutputReference = exports.ZeroTrustAccessPolicyRequireAuthMethodOutputReference = exports.ZeroTrustAccessPolicyRequireAuthContextOutputReference = exports.ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference = exports.ZeroTrustAccessPolicyMfaConfigOutputReference = exports.ZeroTrustAccessPolicyIncludeList = exports.ZeroTrustAccessPolicyIncludeOutputReference = exports.ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference = exports.ZeroTrustAccessPolicyIncludeServiceTokenOutputReference = exports.ZeroTrustAccessPolicyIncludeSamlOutputReference = exports.ZeroTrustAccessPolicyIncludeOktaOutputReference = exports.ZeroTrustAccessPolicyIncludeOidcOutputReference = exports.ZeroTrustAccessPolicyIncludeLoginMethodOutputReference = void 0;
exports.zeroTrustAccessPolicyApprovalGroupsToTerraform = zeroTrustAccessPolicyApprovalGroupsToTerraform;
exports.zeroTrustAccessPolicyApprovalGroupsToHclTerraform = zeroTrustAccessPolicyApprovalGroupsToHclTerraform;
exports.zeroTrustAccessPolicyConnectionRulesRdpToTerraform = zeroTrustAccessPolicyConnectionRulesRdpToTerraform;
exports.zeroTrustAccessPolicyConnectionRulesRdpToHclTerraform = zeroTrustAccessPolicyConnectionRulesRdpToHclTerraform;
exports.zeroTrustAccessPolicyConnectionRulesToTerraform = zeroTrustAccessPolicyConnectionRulesToTerraform;
exports.zeroTrustAccessPolicyConnectionRulesToHclTerraform = zeroTrustAccessPolicyConnectionRulesToHclTerraform;
exports.zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform = zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform;
exports.zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform = zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform;
exports.zeroTrustAccessPolicyExcludeAuthContextToTerraform = zeroTrustAccessPolicyExcludeAuthContextToTerraform;
exports.zeroTrustAccessPolicyExcludeAuthContextToHclTerraform = zeroTrustAccessPolicyExcludeAuthContextToHclTerraform;
exports.zeroTrustAccessPolicyExcludeAuthMethodToTerraform = zeroTrustAccessPolicyExcludeAuthMethodToTerraform;
exports.zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform = zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform;
exports.zeroTrustAccessPolicyExcludeAzureAdToTerraform = zeroTrustAccessPolicyExcludeAzureAdToTerraform;
exports.zeroTrustAccessPolicyExcludeAzureAdToHclTerraform = zeroTrustAccessPolicyExcludeAzureAdToHclTerraform;
exports.zeroTrustAccessPolicyExcludeCertificateToTerraform = zeroTrustAccessPolicyExcludeCertificateToTerraform;
exports.zeroTrustAccessPolicyExcludeCertificateToHclTerraform = zeroTrustAccessPolicyExcludeCertificateToHclTerraform;
exports.zeroTrustAccessPolicyExcludeCommonNameToTerraform = zeroTrustAccessPolicyExcludeCommonNameToTerraform;
exports.zeroTrustAccessPolicyExcludeCommonNameToHclTerraform = zeroTrustAccessPolicyExcludeCommonNameToHclTerraform;
exports.zeroTrustAccessPolicyExcludeDevicePostureToTerraform = zeroTrustAccessPolicyExcludeDevicePostureToTerraform;
exports.zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform = zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform;
exports.zeroTrustAccessPolicyExcludeEmailToTerraform = zeroTrustAccessPolicyExcludeEmailToTerraform;
exports.zeroTrustAccessPolicyExcludeEmailToHclTerraform = zeroTrustAccessPolicyExcludeEmailToHclTerraform;
exports.zeroTrustAccessPolicyExcludeEmailDomainToTerraform = zeroTrustAccessPolicyExcludeEmailDomainToTerraform;
exports.zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform = zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform;
exports.zeroTrustAccessPolicyExcludeEmailListStructToTerraform = zeroTrustAccessPolicyExcludeEmailListStructToTerraform;
exports.zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform = zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform;
exports.zeroTrustAccessPolicyExcludeEveryoneToTerraform = zeroTrustAccessPolicyExcludeEveryoneToTerraform;
exports.zeroTrustAccessPolicyExcludeEveryoneToHclTerraform = zeroTrustAccessPolicyExcludeEveryoneToHclTerraform;
exports.zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform = zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform;
exports.zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform = zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform;
exports.zeroTrustAccessPolicyExcludeGeoToTerraform = zeroTrustAccessPolicyExcludeGeoToTerraform;
exports.zeroTrustAccessPolicyExcludeGeoToHclTerraform = zeroTrustAccessPolicyExcludeGeoToHclTerraform;
exports.zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform = zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform;
exports.zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform = zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform;
exports.zeroTrustAccessPolicyExcludeGroupToTerraform = zeroTrustAccessPolicyExcludeGroupToTerraform;
exports.zeroTrustAccessPolicyExcludeGroupToHclTerraform = zeroTrustAccessPolicyExcludeGroupToHclTerraform;
exports.zeroTrustAccessPolicyExcludeGsuiteToTerraform = zeroTrustAccessPolicyExcludeGsuiteToTerraform;
exports.zeroTrustAccessPolicyExcludeGsuiteToHclTerraform = zeroTrustAccessPolicyExcludeGsuiteToHclTerraform;
exports.zeroTrustAccessPolicyExcludeIpToTerraform = zeroTrustAccessPolicyExcludeIpToTerraform;
exports.zeroTrustAccessPolicyExcludeIpToHclTerraform = zeroTrustAccessPolicyExcludeIpToHclTerraform;
exports.zeroTrustAccessPolicyExcludeIpListStructToTerraform = zeroTrustAccessPolicyExcludeIpListStructToTerraform;
exports.zeroTrustAccessPolicyExcludeIpListStructToHclTerraform = zeroTrustAccessPolicyExcludeIpListStructToHclTerraform;
exports.zeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform = zeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform;
exports.zeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform = zeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform;
exports.zeroTrustAccessPolicyExcludeLoginMethodToTerraform = zeroTrustAccessPolicyExcludeLoginMethodToTerraform;
exports.zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform = zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform;
exports.zeroTrustAccessPolicyExcludeOidcToTerraform = zeroTrustAccessPolicyExcludeOidcToTerraform;
exports.zeroTrustAccessPolicyExcludeOidcToHclTerraform = zeroTrustAccessPolicyExcludeOidcToHclTerraform;
exports.zeroTrustAccessPolicyExcludeOktaToTerraform = zeroTrustAccessPolicyExcludeOktaToTerraform;
exports.zeroTrustAccessPolicyExcludeOktaToHclTerraform = zeroTrustAccessPolicyExcludeOktaToHclTerraform;
exports.zeroTrustAccessPolicyExcludeSamlToTerraform = zeroTrustAccessPolicyExcludeSamlToTerraform;
exports.zeroTrustAccessPolicyExcludeSamlToHclTerraform = zeroTrustAccessPolicyExcludeSamlToHclTerraform;
exports.zeroTrustAccessPolicyExcludeServiceTokenToTerraform = zeroTrustAccessPolicyExcludeServiceTokenToTerraform;
exports.zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform = zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform;
exports.zeroTrustAccessPolicyExcludeUserRiskScoreToTerraform = zeroTrustAccessPolicyExcludeUserRiskScoreToTerraform;
exports.zeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform = zeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform;
exports.zeroTrustAccessPolicyExcludeToTerraform = zeroTrustAccessPolicyExcludeToTerraform;
exports.zeroTrustAccessPolicyExcludeToHclTerraform = zeroTrustAccessPolicyExcludeToHclTerraform;
exports.zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform = zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform;
exports.zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform = zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform;
exports.zeroTrustAccessPolicyIncludeAuthContextToTerraform = zeroTrustAccessPolicyIncludeAuthContextToTerraform;
exports.zeroTrustAccessPolicyIncludeAuthContextToHclTerraform = zeroTrustAccessPolicyIncludeAuthContextToHclTerraform;
exports.zeroTrustAccessPolicyIncludeAuthMethodToTerraform = zeroTrustAccessPolicyIncludeAuthMethodToTerraform;
exports.zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform = zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform;
exports.zeroTrustAccessPolicyIncludeAzureAdToTerraform = zeroTrustAccessPolicyIncludeAzureAdToTerraform;
exports.zeroTrustAccessPolicyIncludeAzureAdToHclTerraform = zeroTrustAccessPolicyIncludeAzureAdToHclTerraform;
exports.zeroTrustAccessPolicyIncludeCertificateToTerraform = zeroTrustAccessPolicyIncludeCertificateToTerraform;
exports.zeroTrustAccessPolicyIncludeCertificateToHclTerraform = zeroTrustAccessPolicyIncludeCertificateToHclTerraform;
exports.zeroTrustAccessPolicyIncludeCommonNameToTerraform = zeroTrustAccessPolicyIncludeCommonNameToTerraform;
exports.zeroTrustAccessPolicyIncludeCommonNameToHclTerraform = zeroTrustAccessPolicyIncludeCommonNameToHclTerraform;
exports.zeroTrustAccessPolicyIncludeDevicePostureToTerraform = zeroTrustAccessPolicyIncludeDevicePostureToTerraform;
exports.zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform = zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform;
exports.zeroTrustAccessPolicyIncludeEmailToTerraform = zeroTrustAccessPolicyIncludeEmailToTerraform;
exports.zeroTrustAccessPolicyIncludeEmailToHclTerraform = zeroTrustAccessPolicyIncludeEmailToHclTerraform;
exports.zeroTrustAccessPolicyIncludeEmailDomainToTerraform = zeroTrustAccessPolicyIncludeEmailDomainToTerraform;
exports.zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform = zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform;
exports.zeroTrustAccessPolicyIncludeEmailListStructToTerraform = zeroTrustAccessPolicyIncludeEmailListStructToTerraform;
exports.zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform = zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform;
exports.zeroTrustAccessPolicyIncludeEveryoneToTerraform = zeroTrustAccessPolicyIncludeEveryoneToTerraform;
exports.zeroTrustAccessPolicyIncludeEveryoneToHclTerraform = zeroTrustAccessPolicyIncludeEveryoneToHclTerraform;
exports.zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform = zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform;
exports.zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform = zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform;
exports.zeroTrustAccessPolicyIncludeGeoToTerraform = zeroTrustAccessPolicyIncludeGeoToTerraform;
exports.zeroTrustAccessPolicyIncludeGeoToHclTerraform = zeroTrustAccessPolicyIncludeGeoToHclTerraform;
exports.zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform = zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform;
exports.zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform = zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform;
exports.zeroTrustAccessPolicyIncludeGroupToTerraform = zeroTrustAccessPolicyIncludeGroupToTerraform;
exports.zeroTrustAccessPolicyIncludeGroupToHclTerraform = zeroTrustAccessPolicyIncludeGroupToHclTerraform;
exports.zeroTrustAccessPolicyIncludeGsuiteToTerraform = zeroTrustAccessPolicyIncludeGsuiteToTerraform;
exports.zeroTrustAccessPolicyIncludeGsuiteToHclTerraform = zeroTrustAccessPolicyIncludeGsuiteToHclTerraform;
exports.zeroTrustAccessPolicyIncludeIpToTerraform = zeroTrustAccessPolicyIncludeIpToTerraform;
exports.zeroTrustAccessPolicyIncludeIpToHclTerraform = zeroTrustAccessPolicyIncludeIpToHclTerraform;
exports.zeroTrustAccessPolicyIncludeIpListStructToTerraform = zeroTrustAccessPolicyIncludeIpListStructToTerraform;
exports.zeroTrustAccessPolicyIncludeIpListStructToHclTerraform = zeroTrustAccessPolicyIncludeIpListStructToHclTerraform;
exports.zeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform = zeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform;
exports.zeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform = zeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform;
exports.zeroTrustAccessPolicyIncludeLoginMethodToTerraform = zeroTrustAccessPolicyIncludeLoginMethodToTerraform;
exports.zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform = zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform;
exports.zeroTrustAccessPolicyIncludeOidcToTerraform = zeroTrustAccessPolicyIncludeOidcToTerraform;
exports.zeroTrustAccessPolicyIncludeOidcToHclTerraform = zeroTrustAccessPolicyIncludeOidcToHclTerraform;
exports.zeroTrustAccessPolicyIncludeOktaToTerraform = zeroTrustAccessPolicyIncludeOktaToTerraform;
exports.zeroTrustAccessPolicyIncludeOktaToHclTerraform = zeroTrustAccessPolicyIncludeOktaToHclTerraform;
exports.zeroTrustAccessPolicyIncludeSamlToTerraform = zeroTrustAccessPolicyIncludeSamlToTerraform;
exports.zeroTrustAccessPolicyIncludeSamlToHclTerraform = zeroTrustAccessPolicyIncludeSamlToHclTerraform;
exports.zeroTrustAccessPolicyIncludeServiceTokenToTerraform = zeroTrustAccessPolicyIncludeServiceTokenToTerraform;
exports.zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform = zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform;
exports.zeroTrustAccessPolicyIncludeUserRiskScoreToTerraform = zeroTrustAccessPolicyIncludeUserRiskScoreToTerraform;
exports.zeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform = zeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform;
exports.zeroTrustAccessPolicyIncludeToTerraform = zeroTrustAccessPolicyIncludeToTerraform;
exports.zeroTrustAccessPolicyIncludeToHclTerraform = zeroTrustAccessPolicyIncludeToHclTerraform;
exports.zeroTrustAccessPolicyMfaConfigToTerraform = zeroTrustAccessPolicyMfaConfigToTerraform;
exports.zeroTrustAccessPolicyMfaConfigToHclTerraform = zeroTrustAccessPolicyMfaConfigToHclTerraform;
exports.zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform = zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform;
exports.zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform = zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform;
exports.zeroTrustAccessPolicyRequireAuthContextToTerraform = zeroTrustAccessPolicyRequireAuthContextToTerraform;
exports.zeroTrustAccessPolicyRequireAuthContextToHclTerraform = zeroTrustAccessPolicyRequireAuthContextToHclTerraform;
exports.zeroTrustAccessPolicyRequireAuthMethodToTerraform = zeroTrustAccessPolicyRequireAuthMethodToTerraform;
exports.zeroTrustAccessPolicyRequireAuthMethodToHclTerraform = zeroTrustAccessPolicyRequireAuthMethodToHclTerraform;
exports.zeroTrustAccessPolicyRequireAzureAdToTerraform = zeroTrustAccessPolicyRequireAzureAdToTerraform;
exports.zeroTrustAccessPolicyRequireAzureAdToHclTerraform = zeroTrustAccessPolicyRequireAzureAdToHclTerraform;
exports.zeroTrustAccessPolicyRequireCertificateToTerraform = zeroTrustAccessPolicyRequireCertificateToTerraform;
exports.zeroTrustAccessPolicyRequireCertificateToHclTerraform = zeroTrustAccessPolicyRequireCertificateToHclTerraform;
exports.zeroTrustAccessPolicyRequireCommonNameToTerraform = zeroTrustAccessPolicyRequireCommonNameToTerraform;
exports.zeroTrustAccessPolicyRequireCommonNameToHclTerraform = zeroTrustAccessPolicyRequireCommonNameToHclTerraform;
exports.zeroTrustAccessPolicyRequireDevicePostureToTerraform = zeroTrustAccessPolicyRequireDevicePostureToTerraform;
exports.zeroTrustAccessPolicyRequireDevicePostureToHclTerraform = zeroTrustAccessPolicyRequireDevicePostureToHclTerraform;
exports.zeroTrustAccessPolicyRequireEmailToTerraform = zeroTrustAccessPolicyRequireEmailToTerraform;
exports.zeroTrustAccessPolicyRequireEmailToHclTerraform = zeroTrustAccessPolicyRequireEmailToHclTerraform;
exports.zeroTrustAccessPolicyRequireEmailDomainToTerraform = zeroTrustAccessPolicyRequireEmailDomainToTerraform;
exports.zeroTrustAccessPolicyRequireEmailDomainToHclTerraform = zeroTrustAccessPolicyRequireEmailDomainToHclTerraform;
exports.zeroTrustAccessPolicyRequireEmailListStructToTerraform = zeroTrustAccessPolicyRequireEmailListStructToTerraform;
exports.zeroTrustAccessPolicyRequireEmailListStructToHclTerraform = zeroTrustAccessPolicyRequireEmailListStructToHclTerraform;
exports.zeroTrustAccessPolicyRequireEveryoneToTerraform = zeroTrustAccessPolicyRequireEveryoneToTerraform;
exports.zeroTrustAccessPolicyRequireEveryoneToHclTerraform = zeroTrustAccessPolicyRequireEveryoneToHclTerraform;
exports.zeroTrustAccessPolicyRequireExternalEvaluationToTerraform = zeroTrustAccessPolicyRequireExternalEvaluationToTerraform;
exports.zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform = zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform;
exports.zeroTrustAccessPolicyRequireGeoToTerraform = zeroTrustAccessPolicyRequireGeoToTerraform;
exports.zeroTrustAccessPolicyRequireGeoToHclTerraform = zeroTrustAccessPolicyRequireGeoToHclTerraform;
exports.zeroTrustAccessPolicyRequireGithubOrganizationToTerraform = zeroTrustAccessPolicyRequireGithubOrganizationToTerraform;
exports.zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform = zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform;
exports.zeroTrustAccessPolicyRequireGroupToTerraform = zeroTrustAccessPolicyRequireGroupToTerraform;
exports.zeroTrustAccessPolicyRequireGroupToHclTerraform = zeroTrustAccessPolicyRequireGroupToHclTerraform;
exports.zeroTrustAccessPolicyRequireGsuiteToTerraform = zeroTrustAccessPolicyRequireGsuiteToTerraform;
exports.zeroTrustAccessPolicyRequireGsuiteToHclTerraform = zeroTrustAccessPolicyRequireGsuiteToHclTerraform;
exports.zeroTrustAccessPolicyRequireIpToTerraform = zeroTrustAccessPolicyRequireIpToTerraform;
exports.zeroTrustAccessPolicyRequireIpToHclTerraform = zeroTrustAccessPolicyRequireIpToHclTerraform;
exports.zeroTrustAccessPolicyRequireIpListStructToTerraform = zeroTrustAccessPolicyRequireIpListStructToTerraform;
exports.zeroTrustAccessPolicyRequireIpListStructToHclTerraform = zeroTrustAccessPolicyRequireIpListStructToHclTerraform;
exports.zeroTrustAccessPolicyRequireLinkedAppTokenToTerraform = zeroTrustAccessPolicyRequireLinkedAppTokenToTerraform;
exports.zeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform = zeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform;
exports.zeroTrustAccessPolicyRequireLoginMethodToTerraform = zeroTrustAccessPolicyRequireLoginMethodToTerraform;
exports.zeroTrustAccessPolicyRequireLoginMethodToHclTerraform = zeroTrustAccessPolicyRequireLoginMethodToHclTerraform;
exports.zeroTrustAccessPolicyRequireOidcToTerraform = zeroTrustAccessPolicyRequireOidcToTerraform;
exports.zeroTrustAccessPolicyRequireOidcToHclTerraform = zeroTrustAccessPolicyRequireOidcToHclTerraform;
exports.zeroTrustAccessPolicyRequireOktaToTerraform = zeroTrustAccessPolicyRequireOktaToTerraform;
exports.zeroTrustAccessPolicyRequireOktaToHclTerraform = zeroTrustAccessPolicyRequireOktaToHclTerraform;
exports.zeroTrustAccessPolicyRequireSamlToTerraform = zeroTrustAccessPolicyRequireSamlToTerraform;
exports.zeroTrustAccessPolicyRequireSamlToHclTerraform = zeroTrustAccessPolicyRequireSamlToHclTerraform;
exports.zeroTrustAccessPolicyRequireServiceTokenToTerraform = zeroTrustAccessPolicyRequireServiceTokenToTerraform;
exports.zeroTrustAccessPolicyRequireServiceTokenToHclTerraform = zeroTrustAccessPolicyRequireServiceTokenToHclTerraform;
exports.zeroTrustAccessPolicyRequireUserRiskScoreToTerraform = zeroTrustAccessPolicyRequireUserRiskScoreToTerraform;
exports.zeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform = zeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform;
exports.zeroTrustAccessPolicyRequireToTerraform = zeroTrustAccessPolicyRequireToTerraform;
exports.zeroTrustAccessPolicyRequireToHclTerraform = zeroTrustAccessPolicyRequireToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustAccessPolicyApprovalGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        approvals_needed: cdktf.numberToTerraform(struct.approvalsNeeded),
        email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.emailAddresses),
        email_list_uuid: cdktf.stringToTerraform(struct.emailListUuid),
    };
}
function zeroTrustAccessPolicyApprovalGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        approvals_needed: {
            value: cdktf.numberToHclTerraform(struct.approvalsNeeded),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        email_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.emailAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        email_list_uuid: {
            value: cdktf.stringToHclTerraform(struct.emailListUuid),
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
var ZeroTrustAccessPolicyApprovalGroupsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyApprovalGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyApprovalGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._approvalsNeeded !== undefined) {
                hasAnyValues = true;
                internalValueResult.approvalsNeeded = this._approvalsNeeded;
            }
            if (this._emailAddresses !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailAddresses = this._emailAddresses;
            }
            if (this._emailListUuid !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailListUuid = this._emailListUuid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._approvalsNeeded = undefined;
                this._emailAddresses = undefined;
                this._emailListUuid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._approvalsNeeded = value.approvalsNeeded;
                this._emailAddresses = value.emailAddresses;
                this._emailListUuid = value.emailListUuid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "approvalsNeeded", {
        get: function () {
            return this.getNumberAttribute('approvals_needed');
        },
        set: function (value) {
            this._approvalsNeeded = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "approvalsNeededInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvalsNeeded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "emailAddresses", {
        get: function () {
            return this.getListAttribute('email_addresses');
        },
        set: function (value) {
            this._emailAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype.resetEmailAddresses = function () {
        this._emailAddresses = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "emailAddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailAddresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "emailListUuid", {
        get: function () {
            return this.getStringAttribute('email_list_uuid');
        },
        set: function (value) {
            this._emailListUuid = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype.resetEmailListUuid = function () {
        this._emailListUuid = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyApprovalGroupsOutputReference.prototype, "emailListUuidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailListUuid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyApprovalGroupsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyApprovalGroupsOutputReference = ZeroTrustAccessPolicyApprovalGroupsOutputReference;
var ZeroTrustAccessPolicyApprovalGroupsList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyApprovalGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyApprovalGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessPolicyApprovalGroupsList.prototype.get = function (index) {
        return new ZeroTrustAccessPolicyApprovalGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessPolicyApprovalGroupsList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessPolicyApprovalGroupsList = ZeroTrustAccessPolicyApprovalGroupsList;
function zeroTrustAccessPolicyConnectionRulesRdpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_clipboard_local_to_remote_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedClipboardLocalToRemoteFormats),
        allowed_clipboard_remote_to_local_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedClipboardRemoteToLocalFormats),
    };
}
function zeroTrustAccessPolicyConnectionRulesRdpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed_clipboard_local_to_remote_formats: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedClipboardLocalToRemoteFormats),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_clipboard_remote_to_local_formats: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedClipboardRemoteToLocalFormats),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyConnectionRulesRdpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyConnectionRulesRdpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyConnectionRulesRdpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowedClipboardLocalToRemoteFormats !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedClipboardLocalToRemoteFormats = this._allowedClipboardLocalToRemoteFormats;
            }
            if (this._allowedClipboardRemoteToLocalFormats !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedClipboardRemoteToLocalFormats = this._allowedClipboardRemoteToLocalFormats;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowedClipboardLocalToRemoteFormats = undefined;
                this._allowedClipboardRemoteToLocalFormats = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowedClipboardLocalToRemoteFormats = value.allowedClipboardLocalToRemoteFormats;
                this._allowedClipboardRemoteToLocalFormats = value.allowedClipboardRemoteToLocalFormats;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "allowedClipboardLocalToRemoteFormats", {
        get: function () {
            return this.getListAttribute('allowed_clipboard_local_to_remote_formats');
        },
        set: function (value) {
            this._allowedClipboardLocalToRemoteFormats = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype.resetAllowedClipboardLocalToRemoteFormats = function () {
        this._allowedClipboardLocalToRemoteFormats = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "allowedClipboardLocalToRemoteFormatsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedClipboardLocalToRemoteFormats;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "allowedClipboardRemoteToLocalFormats", {
        get: function () {
            return this.getListAttribute('allowed_clipboard_remote_to_local_formats');
        },
        set: function (value) {
            this._allowedClipboardRemoteToLocalFormats = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype.resetAllowedClipboardRemoteToLocalFormats = function () {
        this._allowedClipboardRemoteToLocalFormats = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesRdpOutputReference.prototype, "allowedClipboardRemoteToLocalFormatsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedClipboardRemoteToLocalFormats;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyConnectionRulesRdpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyConnectionRulesRdpOutputReference = ZeroTrustAccessPolicyConnectionRulesRdpOutputReference;
function zeroTrustAccessPolicyConnectionRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rdp: zeroTrustAccessPolicyConnectionRulesRdpToTerraform(struct.rdp),
    };
}
function zeroTrustAccessPolicyConnectionRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        rdp: {
            value: zeroTrustAccessPolicyConnectionRulesRdpToHclTerraform(struct.rdp),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyConnectionRulesRdp",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyConnectionRulesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyConnectionRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyConnectionRulesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // rdp - computed: false, optional: true, required: false
        _this._rdp = new ZeroTrustAccessPolicyConnectionRulesRdpOutputReference(_this, "rdp");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._rdp) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.rdp = (_b = this._rdp) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._rdp.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._rdp.internalValue = value.rdp;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesOutputReference.prototype, "rdp", {
        get: function () {
            return this._rdp;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyConnectionRulesOutputReference.prototype.putRdp = function (value) {
        this._rdp.internalValue = value;
    };
    ZeroTrustAccessPolicyConnectionRulesOutputReference.prototype.resetRdp = function () {
        this._rdp.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyConnectionRulesOutputReference.prototype, "rdpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rdp.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyConnectionRulesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyConnectionRulesOutputReference = ZeroTrustAccessPolicyConnectionRulesOutputReference;
function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference = ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference;
function zeroTrustAccessPolicyExcludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyExcludeAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._acId !== undefined) {
                hasAnyValues = true;
                internalValueResult.acId = this._acId;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._acId = undefined;
                this._id = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._acId = value.acId;
                this._id = value.id;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "acId", {
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        set: function (value) {
            this._acId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "acIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthContextOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeAuthContextOutputReference = ZeroTrustAccessPolicyExcludeAuthContextOutputReference;
function zeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
function zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
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
var ZeroTrustAccessPolicyExcludeAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthMethodOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._authMethod !== undefined) {
                hasAnyValues = true;
                internalValueResult.authMethod = this._authMethod;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._authMethod = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._authMethod = value.authMethod;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthMethodOutputReference.prototype, "authMethod", {
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        set: function (value) {
            this._authMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAuthMethodOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeAuthMethodOutputReference = ZeroTrustAccessPolicyExcludeAuthMethodOutputReference;
function zeroTrustAccessPolicyExcludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct) {
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
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyExcludeAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "internalValue", {
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
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeAzureAdOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeAzureAdOutputReference = ZeroTrustAccessPolicyExcludeAzureAdOutputReference;
function zeroTrustAccessPolicyExcludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyExcludeCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeCertificateOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyExcludeCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeCertificateOutputReference = ZeroTrustAccessPolicyExcludeCertificateOutputReference;
function zeroTrustAccessPolicyExcludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
function zeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
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
var ZeroTrustAccessPolicyExcludeCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeCommonNameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._commonName !== undefined) {
                hasAnyValues = true;
                internalValueResult.commonName = this._commonName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._commonName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._commonName = value.commonName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeCommonNameOutputReference.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeCommonNameOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeCommonNameOutputReference = ZeroTrustAccessPolicyExcludeCommonNameOutputReference;
function zeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
function zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
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
var ZeroTrustAccessPolicyExcludeDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeDevicePostureOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._integrationUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.integrationUid = this._integrationUid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._integrationUid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._integrationUid = value.integrationUid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeDevicePostureOutputReference.prototype, "integrationUid", {
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        set: function (value) {
            this._integrationUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeDevicePostureOutputReference.prototype, "integrationUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeDevicePostureOutputReference = ZeroTrustAccessPolicyExcludeDevicePostureOutputReference;
function zeroTrustAccessPolicyExcludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
function zeroTrustAccessPolicyExcludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
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
var ZeroTrustAccessPolicyExcludeEmailOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._email !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = this._email;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._email = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._email = value.email;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeEmailOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeEmailOutputReference = ZeroTrustAccessPolicyExcludeEmailOutputReference;
function zeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
function zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
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
var ZeroTrustAccessPolicyExcludeEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailDomainOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._domain !== undefined) {
                hasAnyValues = true;
                internalValueResult.domain = this._domain;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._domain = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._domain = value.domain;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailDomainOutputReference.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailDomainOutputReference.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeEmailDomainOutputReference = ZeroTrustAccessPolicyExcludeEmailDomainOutputReference;
function zeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct) {
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
function zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyExcludeEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEmailListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeEmailListStructOutputReference = ZeroTrustAccessPolicyExcludeEmailListStructOutputReference;
function zeroTrustAccessPolicyExcludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyExcludeEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeEveryoneOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyExcludeEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeEveryoneOutputReference = ZeroTrustAccessPolicyExcludeEveryoneOutputReference;
function zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
function zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
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
var ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._evaluateUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.evaluateUrl = this._evaluateUrl;
            }
            if (this._keysUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.keysUrl = this._keysUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._evaluateUrl = undefined;
                this._keysUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._evaluateUrl = value.evaluateUrl;
                this._keysUrl = value.keysUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        set: function (value) {
            this._evaluateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "evaluateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "keysUrl", {
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        set: function (value) {
            this._keysUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.prototype, "keysUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keysUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference = ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference;
function zeroTrustAccessPolicyExcludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
function zeroTrustAccessPolicyExcludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
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
var ZeroTrustAccessPolicyExcludeGeoOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGeoOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._countryCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.countryCode = this._countryCode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._countryCode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._countryCode = value.countryCode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGeoOutputReference.prototype, "countryCode", {
        get: function () {
            return this.getStringAttribute('country_code');
        },
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGeoOutputReference.prototype, "countryCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryCode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeGeoOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeGeoOutputReference = ZeroTrustAccessPolicyExcludeGeoOutputReference;
function zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
function zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
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
var ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._team !== undefined) {
                hasAnyValues = true;
                internalValueResult.team = this._team;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._identityProviderId = undefined;
                this._name = undefined;
                this._team = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._identityProviderId = value.identityProviderId;
                this._name = value.name;
                this._team = value.team;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "team", {
        get: function () {
            return this.getStringAttribute('team');
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype.resetTeam = function () {
        this._team = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference.prototype, "teamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._team;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference = ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference;
function zeroTrustAccessPolicyExcludeGroupToTerraform(struct) {
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
function zeroTrustAccessPolicyExcludeGroupToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyExcludeGroupOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGroupOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGroupOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeGroupOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeGroupOutputReference = ZeroTrustAccessPolicyExcludeGroupOutputReference;
function zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyExcludeGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._email !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = this._email;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._email = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._email = value.email;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeGsuiteOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeGsuiteOutputReference = ZeroTrustAccessPolicyExcludeGsuiteOutputReference;
function zeroTrustAccessPolicyExcludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
function zeroTrustAccessPolicyExcludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
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
var ZeroTrustAccessPolicyExcludeIpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeIpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ip = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ip = value.ip;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeIpOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeIpOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeIpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeIpOutputReference = ZeroTrustAccessPolicyExcludeIpOutputReference;
function zeroTrustAccessPolicyExcludeIpListStructToTerraform(struct) {
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
function zeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyExcludeIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyExcludeIpListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeIpListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeIpListStructOutputReference = ZeroTrustAccessPolicyExcludeIpListStructOutputReference;
function zeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
function zeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
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
var ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._appUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.appUid = this._appUid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._appUid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._appUid = value.appUid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference.prototype, "appUid", {
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        set: function (value) {
            this._appUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference.prototype, "appUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference = ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference;
function zeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct) {
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
function zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyExcludeLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyExcludeLoginMethodOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeLoginMethodOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeLoginMethodOutputReference = ZeroTrustAccessPolicyExcludeLoginMethodOutputReference;
function zeroTrustAccessPolicyExcludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyExcludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyExcludeOidcOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._claimName !== undefined) {
                hasAnyValues = true;
                internalValueResult.claimName = this._claimName;
            }
            if (this._claimValue !== undefined) {
                hasAnyValues = true;
                internalValueResult.claimValue = this._claimValue;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._claimName = undefined;
                this._claimValue = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._claimName = value.claimName;
                this._claimValue = value.claimValue;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "claimName", {
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        set: function (value) {
            this._claimName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "claimNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "claimValue", {
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        set: function (value) {
            this._claimValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "claimValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOidcOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeOidcOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeOidcOutputReference = ZeroTrustAccessPolicyExcludeOidcOutputReference;
function zeroTrustAccessPolicyExcludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function zeroTrustAccessPolicyExcludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyExcludeOktaOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
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
                this._identityProviderId = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._identityProviderId = value.identityProviderId;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOktaOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeOktaOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeOktaOutputReference = ZeroTrustAccessPolicyExcludeOktaOutputReference;
function zeroTrustAccessPolicyExcludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyExcludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyExcludeSamlOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._attributeName !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributeName = this._attributeName;
            }
            if (this._attributeValue !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributeValue = this._attributeValue;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._attributeName = undefined;
                this._attributeValue = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._attributeName = value.attributeName;
                this._attributeValue = value.attributeValue;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "attributeName", {
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        set: function (value) {
            this._attributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "attributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "attributeValue", {
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        set: function (value) {
            this._attributeValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "attributeValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeSamlOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeSamlOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeSamlOutputReference = ZeroTrustAccessPolicyExcludeSamlOutputReference;
function zeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
function zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
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
var ZeroTrustAccessPolicyExcludeServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeServiceTokenOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._tokenId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tokenId = this._tokenId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._tokenId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._tokenId = value.tokenId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeServiceTokenOutputReference.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeServiceTokenOutputReference.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeServiceTokenOutputReference = ZeroTrustAccessPolicyExcludeServiceTokenOutputReference;
function zeroTrustAccessPolicyExcludeUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        user_risk_score: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.userRiskScore),
    };
}
function zeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        user_risk_score: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.userRiskScore),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._userRiskScore !== undefined) {
                hasAnyValues = true;
                internalValueResult.userRiskScore = this._userRiskScore;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._userRiskScore = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._userRiskScore = value.userRiskScore;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        set: function (value) {
            this._userRiskScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference = ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference;
function zeroTrustAccessPolicyExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessPolicyExcludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessPolicyExcludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessPolicyExcludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessPolicyExcludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessPolicyExcludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessPolicyExcludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessPolicyExcludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessPolicyExcludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessPolicyExcludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessPolicyExcludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessPolicyExcludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessPolicyExcludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessPolicyExcludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessPolicyExcludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
function zeroTrustAccessPolicyExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessPolicyExcludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessPolicyExcludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessPolicyExcludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGsuite",
        },
        ip: {
            value: zeroTrustAccessPolicyExcludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeIp",
        },
        ip_list: {
            value: zeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessPolicyExcludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeOidc",
        },
        okta: {
            value: zeroTrustAccessPolicyExcludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeOkta",
        },
        saml: {
            value: zeroTrustAccessPolicyExcludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeSaml",
        },
        service_token: {
            value: zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyExcludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: false, optional: true, required: false
        _this._anyValidServiceToken = new ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: false, optional: true, required: false
        _this._authContext = new ZeroTrustAccessPolicyExcludeAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: false, optional: true, required: false
        _this._authMethod = new ZeroTrustAccessPolicyExcludeAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: false, optional: true, required: false
        _this._azureAd = new ZeroTrustAccessPolicyExcludeAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: false, optional: true, required: false
        _this._certificate = new ZeroTrustAccessPolicyExcludeCertificateOutputReference(_this, "certificate");
        // common_name - computed: false, optional: true, required: false
        _this._commonName = new ZeroTrustAccessPolicyExcludeCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: false, optional: true, required: false
        _this._devicePosture = new ZeroTrustAccessPolicyExcludeDevicePostureOutputReference(_this, "device_posture");
        // email - computed: false, optional: true, required: false
        _this._email = new ZeroTrustAccessPolicyExcludeEmailOutputReference(_this, "email");
        // email_domain - computed: false, optional: true, required: false
        _this._emailDomain = new ZeroTrustAccessPolicyExcludeEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: false, optional: true, required: false
        _this._emailList = new ZeroTrustAccessPolicyExcludeEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: false, optional: true, required: false
        _this._everyone = new ZeroTrustAccessPolicyExcludeEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: false, optional: true, required: false
        _this._externalEvaluation = new ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: false, optional: true, required: false
        _this._geo = new ZeroTrustAccessPolicyExcludeGeoOutputReference(_this, "geo");
        // github_organization - computed: false, optional: true, required: false
        _this._githubOrganization = new ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: false, optional: true, required: false
        _this._group = new ZeroTrustAccessPolicyExcludeGroupOutputReference(_this, "group");
        // gsuite - computed: false, optional: true, required: false
        _this._gsuite = new ZeroTrustAccessPolicyExcludeGsuiteOutputReference(_this, "gsuite");
        // ip - computed: false, optional: true, required: false
        _this._ip = new ZeroTrustAccessPolicyExcludeIpOutputReference(_this, "ip");
        // ip_list - computed: false, optional: true, required: false
        _this._ipList = new ZeroTrustAccessPolicyExcludeIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: false, optional: true, required: false
        _this._linkedAppToken = new ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: false, optional: true, required: false
        _this._loginMethod = new ZeroTrustAccessPolicyExcludeLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: false, optional: true, required: false
        _this._oidc = new ZeroTrustAccessPolicyExcludeOidcOutputReference(_this, "oidc");
        // okta - computed: false, optional: true, required: false
        _this._okta = new ZeroTrustAccessPolicyExcludeOktaOutputReference(_this, "okta");
        // saml - computed: false, optional: true, required: false
        _this._saml = new ZeroTrustAccessPolicyExcludeSamlOutputReference(_this, "saml");
        // service_token - computed: false, optional: true, required: false
        _this._serviceToken = new ZeroTrustAccessPolicyExcludeServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: false, optional: true, required: false
        _this._userRiskScore = new ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._anyValidServiceToken) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.anyValidServiceToken = (_b = this._anyValidServiceToken) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._authContext) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.authContext = (_d = this._authContext) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._authMethod) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.authMethod = (_f = this._authMethod) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._azureAd) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.azureAd = (_h = this._azureAd) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._certificate) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificate = (_k = this._certificate) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._commonName) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.commonName = (_m = this._commonName) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (((_o = this._devicePosture) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.devicePosture = (_p = this._devicePosture) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._email) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = (_r = this._email) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._emailDomain) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailDomain = (_t = this._emailDomain) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._emailList) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailList = (_v = this._emailList) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._everyone) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.everyone = (_x = this._everyone) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._externalEvaluation) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.externalEvaluation = (_z = this._externalEvaluation) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._geo) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.geo = (_1 = this._geo) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._githubOrganization) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.githubOrganization = (_3 = this._githubOrganization) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            if (((_4 = this._group) === null || _4 === void 0 ? void 0 : _4.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.group = (_5 = this._group) === null || _5 === void 0 ? void 0 : _5.internalValue;
            }
            if (((_6 = this._gsuite) === null || _6 === void 0 ? void 0 : _6.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.gsuite = (_7 = this._gsuite) === null || _7 === void 0 ? void 0 : _7.internalValue;
            }
            if (((_8 = this._ip) === null || _8 === void 0 ? void 0 : _8.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = (_9 = this._ip) === null || _9 === void 0 ? void 0 : _9.internalValue;
            }
            if (((_10 = this._ipList) === null || _10 === void 0 ? void 0 : _10.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipList = (_11 = this._ipList) === null || _11 === void 0 ? void 0 : _11.internalValue;
            }
            if (((_12 = this._linkedAppToken) === null || _12 === void 0 ? void 0 : _12.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.linkedAppToken = (_13 = this._linkedAppToken) === null || _13 === void 0 ? void 0 : _13.internalValue;
            }
            if (((_14 = this._loginMethod) === null || _14 === void 0 ? void 0 : _14.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.loginMethod = (_15 = this._loginMethod) === null || _15 === void 0 ? void 0 : _15.internalValue;
            }
            if (((_16 = this._oidc) === null || _16 === void 0 ? void 0 : _16.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.oidc = (_17 = this._oidc) === null || _17 === void 0 ? void 0 : _17.internalValue;
            }
            if (((_18 = this._okta) === null || _18 === void 0 ? void 0 : _18.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.okta = (_19 = this._okta) === null || _19 === void 0 ? void 0 : _19.internalValue;
            }
            if (((_20 = this._saml) === null || _20 === void 0 ? void 0 : _20.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.saml = (_21 = this._saml) === null || _21 === void 0 ? void 0 : _21.internalValue;
            }
            if (((_22 = this._serviceToken) === null || _22 === void 0 ? void 0 : _22.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.serviceToken = (_23 = this._serviceToken) === null || _23 === void 0 ? void 0 : _23.internalValue;
            }
            if (((_24 = this._userRiskScore) === null || _24 === void 0 ? void 0 : _24.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.userRiskScore = (_25 = this._userRiskScore) === null || _25 === void 0 ? void 0 : _25.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._anyValidServiceToken.internalValue = undefined;
                this._authContext.internalValue = undefined;
                this._authMethod.internalValue = undefined;
                this._azureAd.internalValue = undefined;
                this._certificate.internalValue = undefined;
                this._commonName.internalValue = undefined;
                this._devicePosture.internalValue = undefined;
                this._email.internalValue = undefined;
                this._emailDomain.internalValue = undefined;
                this._emailList.internalValue = undefined;
                this._everyone.internalValue = undefined;
                this._externalEvaluation.internalValue = undefined;
                this._geo.internalValue = undefined;
                this._githubOrganization.internalValue = undefined;
                this._group.internalValue = undefined;
                this._gsuite.internalValue = undefined;
                this._ip.internalValue = undefined;
                this._ipList.internalValue = undefined;
                this._linkedAppToken.internalValue = undefined;
                this._loginMethod.internalValue = undefined;
                this._oidc.internalValue = undefined;
                this._okta.internalValue = undefined;
                this._saml.internalValue = undefined;
                this._serviceToken.internalValue = undefined;
                this._userRiskScore.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
                this._authContext.internalValue = value.authContext;
                this._authMethod.internalValue = value.authMethod;
                this._azureAd.internalValue = value.azureAd;
                this._certificate.internalValue = value.certificate;
                this._commonName.internalValue = value.commonName;
                this._devicePosture.internalValue = value.devicePosture;
                this._email.internalValue = value.email;
                this._emailDomain.internalValue = value.emailDomain;
                this._emailList.internalValue = value.emailList;
                this._everyone.internalValue = value.everyone;
                this._externalEvaluation.internalValue = value.externalEvaluation;
                this._geo.internalValue = value.geo;
                this._githubOrganization.internalValue = value.githubOrganization;
                this._group.internalValue = value.group;
                this._gsuite.internalValue = value.gsuite;
                this._ip.internalValue = value.ip;
                this._ipList.internalValue = value.ipList;
                this._linkedAppToken.internalValue = value.linkedAppToken;
                this._loginMethod.internalValue = value.loginMethod;
                this._oidc.internalValue = value.oidc;
                this._okta.internalValue = value.okta;
                this._saml.internalValue = value.saml;
                this._serviceToken.internalValue = value.serviceToken;
                this._userRiskScore.internalValue = value.userRiskScore;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putAnyValidServiceToken = function (value) {
        this._anyValidServiceToken.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetAnyValidServiceToken = function () {
        this._anyValidServiceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "anyValidServiceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._anyValidServiceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putAuthContext = function (value) {
        this._authContext.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetAuthContext = function () {
        this._authContext.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "authContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authContext.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putAuthMethod = function (value) {
        this._authMethod.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetAuthMethod = function () {
        this._authMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putAzureAd = function (value) {
        this._azureAd.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetAzureAd = function () {
        this._azureAd.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "azureAdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azureAd.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putCertificate = function (value) {
        this._certificate.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetCertificate = function () {
        this._certificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putCommonName = function (value) {
        this._commonName.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetCommonName = function () {
        this._commonName.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putDevicePosture = function (value) {
        this._devicePosture.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetDevicePosture = function () {
        this._devicePosture.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "devicePostureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devicePosture.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putEmail = function (value) {
        this._email.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetEmail = function () {
        this._email.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putEmailDomain = function (value) {
        this._emailDomain.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetEmailDomain = function () {
        this._emailDomain.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "emailDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailDomain.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putEmailList = function (value) {
        this._emailList.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetEmailList = function () {
        this._emailList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "emailListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putEveryone = function (value) {
        this._everyone.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetEveryone = function () {
        this._everyone.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "everyoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._everyone.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putExternalEvaluation = function (value) {
        this._externalEvaluation.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetExternalEvaluation = function () {
        this._externalEvaluation.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "externalEvaluationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEvaluation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putGeo = function (value) {
        this._geo.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetGeo = function () {
        this._geo.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putGithubOrganization = function (value) {
        this._githubOrganization.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetGithubOrganization = function () {
        this._githubOrganization.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "githubOrganizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOrganization.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putGroup = function (value) {
        this._group.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetGroup = function () {
        this._group.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putGsuite = function (value) {
        this._gsuite.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetGsuite = function () {
        this._gsuite.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "gsuiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gsuite.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putIp = function (value) {
        this._ip.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetIp = function () {
        this._ip.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putIpList = function (value) {
        this._ipList.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetIpList = function () {
        this._ipList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "ipListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putLinkedAppToken = function (value) {
        this._linkedAppToken.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetLinkedAppToken = function () {
        this._linkedAppToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "linkedAppTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._linkedAppToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putLoginMethod = function (value) {
        this._loginMethod.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetLoginMethod = function () {
        this._loginMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "loginMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loginMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putOidc = function (value) {
        this._oidc.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetOidc = function () {
        this._oidc.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "oidcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putOkta = function (value) {
        this._okta.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetOkta = function () {
        this._okta.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "oktaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okta.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putSaml = function (value) {
        this._saml.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetSaml = function () {
        this._saml.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "samlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saml.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putServiceToken = function (value) {
        this._serviceToken.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetServiceToken = function () {
        this._serviceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "serviceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.putUserRiskScore = function (value) {
        this._userRiskScore.internalValue = value;
    };
    ZeroTrustAccessPolicyExcludeOutputReference.prototype.resetUserRiskScore = function () {
        this._userRiskScore.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyExcludeOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyExcludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyExcludeOutputReference = ZeroTrustAccessPolicyExcludeOutputReference;
var ZeroTrustAccessPolicyExcludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessPolicyExcludeList.prototype.get = function (index) {
        return new ZeroTrustAccessPolicyExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessPolicyExcludeList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessPolicyExcludeList = ZeroTrustAccessPolicyExcludeList;
function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference = ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference;
function zeroTrustAccessPolicyIncludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyIncludeAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._acId !== undefined) {
                hasAnyValues = true;
                internalValueResult.acId = this._acId;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._acId = undefined;
                this._id = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._acId = value.acId;
                this._id = value.id;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "acId", {
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        set: function (value) {
            this._acId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "acIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthContextOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeAuthContextOutputReference = ZeroTrustAccessPolicyIncludeAuthContextOutputReference;
function zeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
function zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
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
var ZeroTrustAccessPolicyIncludeAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthMethodOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._authMethod !== undefined) {
                hasAnyValues = true;
                internalValueResult.authMethod = this._authMethod;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._authMethod = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._authMethod = value.authMethod;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthMethodOutputReference.prototype, "authMethod", {
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        set: function (value) {
            this._authMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAuthMethodOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeAuthMethodOutputReference = ZeroTrustAccessPolicyIncludeAuthMethodOutputReference;
function zeroTrustAccessPolicyIncludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct) {
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
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyIncludeAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "internalValue", {
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
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeAzureAdOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeAzureAdOutputReference = ZeroTrustAccessPolicyIncludeAzureAdOutputReference;
function zeroTrustAccessPolicyIncludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyIncludeCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeCertificateOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyIncludeCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeCertificateOutputReference = ZeroTrustAccessPolicyIncludeCertificateOutputReference;
function zeroTrustAccessPolicyIncludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
function zeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
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
var ZeroTrustAccessPolicyIncludeCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeCommonNameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._commonName !== undefined) {
                hasAnyValues = true;
                internalValueResult.commonName = this._commonName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._commonName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._commonName = value.commonName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeCommonNameOutputReference.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeCommonNameOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeCommonNameOutputReference = ZeroTrustAccessPolicyIncludeCommonNameOutputReference;
function zeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
function zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
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
var ZeroTrustAccessPolicyIncludeDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeDevicePostureOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._integrationUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.integrationUid = this._integrationUid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._integrationUid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._integrationUid = value.integrationUid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeDevicePostureOutputReference.prototype, "integrationUid", {
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        set: function (value) {
            this._integrationUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeDevicePostureOutputReference.prototype, "integrationUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeDevicePostureOutputReference = ZeroTrustAccessPolicyIncludeDevicePostureOutputReference;
function zeroTrustAccessPolicyIncludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
function zeroTrustAccessPolicyIncludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
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
var ZeroTrustAccessPolicyIncludeEmailOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._email !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = this._email;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._email = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._email = value.email;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeEmailOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeEmailOutputReference = ZeroTrustAccessPolicyIncludeEmailOutputReference;
function zeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
function zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
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
var ZeroTrustAccessPolicyIncludeEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailDomainOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._domain !== undefined) {
                hasAnyValues = true;
                internalValueResult.domain = this._domain;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._domain = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._domain = value.domain;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailDomainOutputReference.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailDomainOutputReference.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeEmailDomainOutputReference = ZeroTrustAccessPolicyIncludeEmailDomainOutputReference;
function zeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct) {
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
function zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyIncludeEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEmailListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeEmailListStructOutputReference = ZeroTrustAccessPolicyIncludeEmailListStructOutputReference;
function zeroTrustAccessPolicyIncludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyIncludeEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeEveryoneOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyIncludeEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeEveryoneOutputReference = ZeroTrustAccessPolicyIncludeEveryoneOutputReference;
function zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
function zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
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
var ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._evaluateUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.evaluateUrl = this._evaluateUrl;
            }
            if (this._keysUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.keysUrl = this._keysUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._evaluateUrl = undefined;
                this._keysUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._evaluateUrl = value.evaluateUrl;
                this._keysUrl = value.keysUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        set: function (value) {
            this._evaluateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "evaluateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "keysUrl", {
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        set: function (value) {
            this._keysUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.prototype, "keysUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keysUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference = ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference;
function zeroTrustAccessPolicyIncludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
function zeroTrustAccessPolicyIncludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
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
var ZeroTrustAccessPolicyIncludeGeoOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGeoOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._countryCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.countryCode = this._countryCode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._countryCode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._countryCode = value.countryCode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGeoOutputReference.prototype, "countryCode", {
        get: function () {
            return this.getStringAttribute('country_code');
        },
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGeoOutputReference.prototype, "countryCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryCode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeGeoOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeGeoOutputReference = ZeroTrustAccessPolicyIncludeGeoOutputReference;
function zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
function zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
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
var ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._team !== undefined) {
                hasAnyValues = true;
                internalValueResult.team = this._team;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._identityProviderId = undefined;
                this._name = undefined;
                this._team = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._identityProviderId = value.identityProviderId;
                this._name = value.name;
                this._team = value.team;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "team", {
        get: function () {
            return this.getStringAttribute('team');
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype.resetTeam = function () {
        this._team = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference.prototype, "teamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._team;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference = ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference;
function zeroTrustAccessPolicyIncludeGroupToTerraform(struct) {
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
function zeroTrustAccessPolicyIncludeGroupToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyIncludeGroupOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGroupOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGroupOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeGroupOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeGroupOutputReference = ZeroTrustAccessPolicyIncludeGroupOutputReference;
function zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyIncludeGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._email !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = this._email;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._email = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._email = value.email;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeGsuiteOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeGsuiteOutputReference = ZeroTrustAccessPolicyIncludeGsuiteOutputReference;
function zeroTrustAccessPolicyIncludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
function zeroTrustAccessPolicyIncludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
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
var ZeroTrustAccessPolicyIncludeIpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeIpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ip = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ip = value.ip;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeIpOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeIpOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeIpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeIpOutputReference = ZeroTrustAccessPolicyIncludeIpOutputReference;
function zeroTrustAccessPolicyIncludeIpListStructToTerraform(struct) {
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
function zeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyIncludeIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyIncludeIpListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeIpListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeIpListStructOutputReference = ZeroTrustAccessPolicyIncludeIpListStructOutputReference;
function zeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
function zeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
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
var ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._appUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.appUid = this._appUid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._appUid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._appUid = value.appUid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference.prototype, "appUid", {
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        set: function (value) {
            this._appUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference.prototype, "appUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference = ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference;
function zeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct) {
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
function zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyIncludeLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyIncludeLoginMethodOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeLoginMethodOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeLoginMethodOutputReference = ZeroTrustAccessPolicyIncludeLoginMethodOutputReference;
function zeroTrustAccessPolicyIncludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyIncludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyIncludeOidcOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._claimName !== undefined) {
                hasAnyValues = true;
                internalValueResult.claimName = this._claimName;
            }
            if (this._claimValue !== undefined) {
                hasAnyValues = true;
                internalValueResult.claimValue = this._claimValue;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._claimName = undefined;
                this._claimValue = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._claimName = value.claimName;
                this._claimValue = value.claimValue;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "claimName", {
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        set: function (value) {
            this._claimName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "claimNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "claimValue", {
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        set: function (value) {
            this._claimValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "claimValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOidcOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeOidcOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeOidcOutputReference = ZeroTrustAccessPolicyIncludeOidcOutputReference;
function zeroTrustAccessPolicyIncludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function zeroTrustAccessPolicyIncludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyIncludeOktaOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
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
                this._identityProviderId = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._identityProviderId = value.identityProviderId;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOktaOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeOktaOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeOktaOutputReference = ZeroTrustAccessPolicyIncludeOktaOutputReference;
function zeroTrustAccessPolicyIncludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyIncludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyIncludeSamlOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._attributeName !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributeName = this._attributeName;
            }
            if (this._attributeValue !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributeValue = this._attributeValue;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._attributeName = undefined;
                this._attributeValue = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._attributeName = value.attributeName;
                this._attributeValue = value.attributeValue;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "attributeName", {
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        set: function (value) {
            this._attributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "attributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "attributeValue", {
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        set: function (value) {
            this._attributeValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "attributeValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeSamlOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeSamlOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeSamlOutputReference = ZeroTrustAccessPolicyIncludeSamlOutputReference;
function zeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
function zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
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
var ZeroTrustAccessPolicyIncludeServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeServiceTokenOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._tokenId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tokenId = this._tokenId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._tokenId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._tokenId = value.tokenId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeServiceTokenOutputReference.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeServiceTokenOutputReference.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeServiceTokenOutputReference = ZeroTrustAccessPolicyIncludeServiceTokenOutputReference;
function zeroTrustAccessPolicyIncludeUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        user_risk_score: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.userRiskScore),
    };
}
function zeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        user_risk_score: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.userRiskScore),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._userRiskScore !== undefined) {
                hasAnyValues = true;
                internalValueResult.userRiskScore = this._userRiskScore;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._userRiskScore = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._userRiskScore = value.userRiskScore;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        set: function (value) {
            this._userRiskScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference = ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference;
function zeroTrustAccessPolicyIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessPolicyIncludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessPolicyIncludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessPolicyIncludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessPolicyIncludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessPolicyIncludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessPolicyIncludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessPolicyIncludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessPolicyIncludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessPolicyIncludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessPolicyIncludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessPolicyIncludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessPolicyIncludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessPolicyIncludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessPolicyIncludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
function zeroTrustAccessPolicyIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessPolicyIncludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessPolicyIncludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessPolicyIncludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGsuite",
        },
        ip: {
            value: zeroTrustAccessPolicyIncludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeIp",
        },
        ip_list: {
            value: zeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessPolicyIncludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeOidc",
        },
        okta: {
            value: zeroTrustAccessPolicyIncludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeOkta",
        },
        saml: {
            value: zeroTrustAccessPolicyIncludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeSaml",
        },
        service_token: {
            value: zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyIncludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: true, optional: true, required: false
        _this._anyValidServiceToken = new ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: true, optional: true, required: false
        _this._authContext = new ZeroTrustAccessPolicyIncludeAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: true, optional: true, required: false
        _this._authMethod = new ZeroTrustAccessPolicyIncludeAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: true, optional: true, required: false
        _this._azureAd = new ZeroTrustAccessPolicyIncludeAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: true, optional: true, required: false
        _this._certificate = new ZeroTrustAccessPolicyIncludeCertificateOutputReference(_this, "certificate");
        // common_name - computed: true, optional: true, required: false
        _this._commonName = new ZeroTrustAccessPolicyIncludeCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: true, optional: true, required: false
        _this._devicePosture = new ZeroTrustAccessPolicyIncludeDevicePostureOutputReference(_this, "device_posture");
        // email - computed: true, optional: true, required: false
        _this._email = new ZeroTrustAccessPolicyIncludeEmailOutputReference(_this, "email");
        // email_domain - computed: true, optional: true, required: false
        _this._emailDomain = new ZeroTrustAccessPolicyIncludeEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: true, optional: true, required: false
        _this._emailList = new ZeroTrustAccessPolicyIncludeEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: true, optional: true, required: false
        _this._everyone = new ZeroTrustAccessPolicyIncludeEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: true, optional: true, required: false
        _this._externalEvaluation = new ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: true, optional: true, required: false
        _this._geo = new ZeroTrustAccessPolicyIncludeGeoOutputReference(_this, "geo");
        // github_organization - computed: true, optional: true, required: false
        _this._githubOrganization = new ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: true, optional: true, required: false
        _this._group = new ZeroTrustAccessPolicyIncludeGroupOutputReference(_this, "group");
        // gsuite - computed: true, optional: true, required: false
        _this._gsuite = new ZeroTrustAccessPolicyIncludeGsuiteOutputReference(_this, "gsuite");
        // ip - computed: true, optional: true, required: false
        _this._ip = new ZeroTrustAccessPolicyIncludeIpOutputReference(_this, "ip");
        // ip_list - computed: true, optional: true, required: false
        _this._ipList = new ZeroTrustAccessPolicyIncludeIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: true, optional: true, required: false
        _this._linkedAppToken = new ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: true, optional: true, required: false
        _this._loginMethod = new ZeroTrustAccessPolicyIncludeLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: true, optional: true, required: false
        _this._oidc = new ZeroTrustAccessPolicyIncludeOidcOutputReference(_this, "oidc");
        // okta - computed: true, optional: true, required: false
        _this._okta = new ZeroTrustAccessPolicyIncludeOktaOutputReference(_this, "okta");
        // saml - computed: true, optional: true, required: false
        _this._saml = new ZeroTrustAccessPolicyIncludeSamlOutputReference(_this, "saml");
        // service_token - computed: true, optional: true, required: false
        _this._serviceToken = new ZeroTrustAccessPolicyIncludeServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: true, optional: true, required: false
        _this._userRiskScore = new ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._anyValidServiceToken) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.anyValidServiceToken = (_b = this._anyValidServiceToken) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._authContext) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.authContext = (_d = this._authContext) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._authMethod) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.authMethod = (_f = this._authMethod) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._azureAd) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.azureAd = (_h = this._azureAd) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._certificate) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificate = (_k = this._certificate) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._commonName) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.commonName = (_m = this._commonName) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (((_o = this._devicePosture) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.devicePosture = (_p = this._devicePosture) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._email) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = (_r = this._email) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._emailDomain) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailDomain = (_t = this._emailDomain) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._emailList) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailList = (_v = this._emailList) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._everyone) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.everyone = (_x = this._everyone) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._externalEvaluation) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.externalEvaluation = (_z = this._externalEvaluation) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._geo) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.geo = (_1 = this._geo) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._githubOrganization) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.githubOrganization = (_3 = this._githubOrganization) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            if (((_4 = this._group) === null || _4 === void 0 ? void 0 : _4.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.group = (_5 = this._group) === null || _5 === void 0 ? void 0 : _5.internalValue;
            }
            if (((_6 = this._gsuite) === null || _6 === void 0 ? void 0 : _6.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.gsuite = (_7 = this._gsuite) === null || _7 === void 0 ? void 0 : _7.internalValue;
            }
            if (((_8 = this._ip) === null || _8 === void 0 ? void 0 : _8.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = (_9 = this._ip) === null || _9 === void 0 ? void 0 : _9.internalValue;
            }
            if (((_10 = this._ipList) === null || _10 === void 0 ? void 0 : _10.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipList = (_11 = this._ipList) === null || _11 === void 0 ? void 0 : _11.internalValue;
            }
            if (((_12 = this._linkedAppToken) === null || _12 === void 0 ? void 0 : _12.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.linkedAppToken = (_13 = this._linkedAppToken) === null || _13 === void 0 ? void 0 : _13.internalValue;
            }
            if (((_14 = this._loginMethod) === null || _14 === void 0 ? void 0 : _14.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.loginMethod = (_15 = this._loginMethod) === null || _15 === void 0 ? void 0 : _15.internalValue;
            }
            if (((_16 = this._oidc) === null || _16 === void 0 ? void 0 : _16.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.oidc = (_17 = this._oidc) === null || _17 === void 0 ? void 0 : _17.internalValue;
            }
            if (((_18 = this._okta) === null || _18 === void 0 ? void 0 : _18.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.okta = (_19 = this._okta) === null || _19 === void 0 ? void 0 : _19.internalValue;
            }
            if (((_20 = this._saml) === null || _20 === void 0 ? void 0 : _20.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.saml = (_21 = this._saml) === null || _21 === void 0 ? void 0 : _21.internalValue;
            }
            if (((_22 = this._serviceToken) === null || _22 === void 0 ? void 0 : _22.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.serviceToken = (_23 = this._serviceToken) === null || _23 === void 0 ? void 0 : _23.internalValue;
            }
            if (((_24 = this._userRiskScore) === null || _24 === void 0 ? void 0 : _24.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.userRiskScore = (_25 = this._userRiskScore) === null || _25 === void 0 ? void 0 : _25.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._anyValidServiceToken.internalValue = undefined;
                this._authContext.internalValue = undefined;
                this._authMethod.internalValue = undefined;
                this._azureAd.internalValue = undefined;
                this._certificate.internalValue = undefined;
                this._commonName.internalValue = undefined;
                this._devicePosture.internalValue = undefined;
                this._email.internalValue = undefined;
                this._emailDomain.internalValue = undefined;
                this._emailList.internalValue = undefined;
                this._everyone.internalValue = undefined;
                this._externalEvaluation.internalValue = undefined;
                this._geo.internalValue = undefined;
                this._githubOrganization.internalValue = undefined;
                this._group.internalValue = undefined;
                this._gsuite.internalValue = undefined;
                this._ip.internalValue = undefined;
                this._ipList.internalValue = undefined;
                this._linkedAppToken.internalValue = undefined;
                this._loginMethod.internalValue = undefined;
                this._oidc.internalValue = undefined;
                this._okta.internalValue = undefined;
                this._saml.internalValue = undefined;
                this._serviceToken.internalValue = undefined;
                this._userRiskScore.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
                this._authContext.internalValue = value.authContext;
                this._authMethod.internalValue = value.authMethod;
                this._azureAd.internalValue = value.azureAd;
                this._certificate.internalValue = value.certificate;
                this._commonName.internalValue = value.commonName;
                this._devicePosture.internalValue = value.devicePosture;
                this._email.internalValue = value.email;
                this._emailDomain.internalValue = value.emailDomain;
                this._emailList.internalValue = value.emailList;
                this._everyone.internalValue = value.everyone;
                this._externalEvaluation.internalValue = value.externalEvaluation;
                this._geo.internalValue = value.geo;
                this._githubOrganization.internalValue = value.githubOrganization;
                this._group.internalValue = value.group;
                this._gsuite.internalValue = value.gsuite;
                this._ip.internalValue = value.ip;
                this._ipList.internalValue = value.ipList;
                this._linkedAppToken.internalValue = value.linkedAppToken;
                this._loginMethod.internalValue = value.loginMethod;
                this._oidc.internalValue = value.oidc;
                this._okta.internalValue = value.okta;
                this._saml.internalValue = value.saml;
                this._serviceToken.internalValue = value.serviceToken;
                this._userRiskScore.internalValue = value.userRiskScore;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putAnyValidServiceToken = function (value) {
        this._anyValidServiceToken.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetAnyValidServiceToken = function () {
        this._anyValidServiceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "anyValidServiceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._anyValidServiceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putAuthContext = function (value) {
        this._authContext.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetAuthContext = function () {
        this._authContext.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "authContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authContext.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putAuthMethod = function (value) {
        this._authMethod.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetAuthMethod = function () {
        this._authMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putAzureAd = function (value) {
        this._azureAd.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetAzureAd = function () {
        this._azureAd.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "azureAdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azureAd.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putCertificate = function (value) {
        this._certificate.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetCertificate = function () {
        this._certificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putCommonName = function (value) {
        this._commonName.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetCommonName = function () {
        this._commonName.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putDevicePosture = function (value) {
        this._devicePosture.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetDevicePosture = function () {
        this._devicePosture.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "devicePostureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devicePosture.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putEmail = function (value) {
        this._email.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetEmail = function () {
        this._email.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putEmailDomain = function (value) {
        this._emailDomain.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetEmailDomain = function () {
        this._emailDomain.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "emailDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailDomain.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putEmailList = function (value) {
        this._emailList.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetEmailList = function () {
        this._emailList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "emailListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putEveryone = function (value) {
        this._everyone.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetEveryone = function () {
        this._everyone.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "everyoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._everyone.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putExternalEvaluation = function (value) {
        this._externalEvaluation.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetExternalEvaluation = function () {
        this._externalEvaluation.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "externalEvaluationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEvaluation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putGeo = function (value) {
        this._geo.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetGeo = function () {
        this._geo.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putGithubOrganization = function (value) {
        this._githubOrganization.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetGithubOrganization = function () {
        this._githubOrganization.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "githubOrganizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOrganization.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putGroup = function (value) {
        this._group.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetGroup = function () {
        this._group.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putGsuite = function (value) {
        this._gsuite.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetGsuite = function () {
        this._gsuite.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "gsuiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gsuite.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putIp = function (value) {
        this._ip.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetIp = function () {
        this._ip.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putIpList = function (value) {
        this._ipList.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetIpList = function () {
        this._ipList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "ipListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putLinkedAppToken = function (value) {
        this._linkedAppToken.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetLinkedAppToken = function () {
        this._linkedAppToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "linkedAppTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._linkedAppToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putLoginMethod = function (value) {
        this._loginMethod.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetLoginMethod = function () {
        this._loginMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "loginMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loginMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putOidc = function (value) {
        this._oidc.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetOidc = function () {
        this._oidc.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "oidcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putOkta = function (value) {
        this._okta.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetOkta = function () {
        this._okta.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "oktaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okta.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putSaml = function (value) {
        this._saml.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetSaml = function () {
        this._saml.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "samlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saml.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putServiceToken = function (value) {
        this._serviceToken.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetServiceToken = function () {
        this._serviceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "serviceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.putUserRiskScore = function (value) {
        this._userRiskScore.internalValue = value;
    };
    ZeroTrustAccessPolicyIncludeOutputReference.prototype.resetUserRiskScore = function () {
        this._userRiskScore.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyIncludeOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyIncludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyIncludeOutputReference = ZeroTrustAccessPolicyIncludeOutputReference;
var ZeroTrustAccessPolicyIncludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessPolicyIncludeList.prototype.get = function (index) {
        return new ZeroTrustAccessPolicyIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessPolicyIncludeList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessPolicyIncludeList = ZeroTrustAccessPolicyIncludeList;
function zeroTrustAccessPolicyMfaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_authenticators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedAuthenticators),
        mfa_disabled: cdktf.booleanToTerraform(struct.mfaDisabled),
        session_duration: cdktf.stringToTerraform(struct.sessionDuration),
    };
}
function zeroTrustAccessPolicyMfaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed_authenticators: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedAuthenticators),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        mfa_disabled: {
            value: cdktf.booleanToHclTerraform(struct.mfaDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        session_duration: {
            value: cdktf.stringToHclTerraform(struct.sessionDuration),
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
var ZeroTrustAccessPolicyMfaConfigOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyMfaConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyMfaConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowedAuthenticators !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedAuthenticators = this._allowedAuthenticators;
            }
            if (this._mfaDisabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.mfaDisabled = this._mfaDisabled;
            }
            if (this._sessionDuration !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionDuration = this._sessionDuration;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowedAuthenticators = undefined;
                this._mfaDisabled = undefined;
                this._sessionDuration = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowedAuthenticators = value.allowedAuthenticators;
                this._mfaDisabled = value.mfaDisabled;
                this._sessionDuration = value.sessionDuration;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "allowedAuthenticators", {
        get: function () {
            return this.getListAttribute('allowed_authenticators');
        },
        set: function (value) {
            this._allowedAuthenticators = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyMfaConfigOutputReference.prototype.resetAllowedAuthenticators = function () {
        this._allowedAuthenticators = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "allowedAuthenticatorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedAuthenticators;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "mfaDisabled", {
        get: function () {
            return this.getBooleanAttribute('mfa_disabled');
        },
        set: function (value) {
            this._mfaDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyMfaConfigOutputReference.prototype.resetMfaDisabled = function () {
        this._mfaDisabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "mfaDisabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mfaDisabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "sessionDuration", {
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        set: function (value) {
            this._sessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyMfaConfigOutputReference.prototype.resetSessionDuration = function () {
        this._sessionDuration = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyMfaConfigOutputReference.prototype, "sessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyMfaConfigOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyMfaConfigOutputReference = ZeroTrustAccessPolicyMfaConfigOutputReference;
function zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference = ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference;
function zeroTrustAccessPolicyRequireAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyRequireAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._acId !== undefined) {
                hasAnyValues = true;
                internalValueResult.acId = this._acId;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._acId = undefined;
                this._id = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._acId = value.acId;
                this._id = value.id;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "acId", {
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        set: function (value) {
            this._acId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "acIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthContextOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireAuthContextOutputReference = ZeroTrustAccessPolicyRequireAuthContextOutputReference;
function zeroTrustAccessPolicyRequireAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
function zeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
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
var ZeroTrustAccessPolicyRequireAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthMethodOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._authMethod !== undefined) {
                hasAnyValues = true;
                internalValueResult.authMethod = this._authMethod;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._authMethod = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._authMethod = value.authMethod;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthMethodOutputReference.prototype, "authMethod", {
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        set: function (value) {
            this._authMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAuthMethodOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireAuthMethodOutputReference = ZeroTrustAccessPolicyRequireAuthMethodOutputReference;
function zeroTrustAccessPolicyRequireAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct) {
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
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyRequireAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "internalValue", {
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
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireAzureAdOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireAzureAdOutputReference = ZeroTrustAccessPolicyRequireAzureAdOutputReference;
function zeroTrustAccessPolicyRequireCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyRequireCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyRequireCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireCertificateOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyRequireCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireCertificateOutputReference = ZeroTrustAccessPolicyRequireCertificateOutputReference;
function zeroTrustAccessPolicyRequireCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
function zeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
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
var ZeroTrustAccessPolicyRequireCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireCommonNameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._commonName !== undefined) {
                hasAnyValues = true;
                internalValueResult.commonName = this._commonName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._commonName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._commonName = value.commonName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireCommonNameOutputReference.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireCommonNameOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireCommonNameOutputReference = ZeroTrustAccessPolicyRequireCommonNameOutputReference;
function zeroTrustAccessPolicyRequireDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
function zeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
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
var ZeroTrustAccessPolicyRequireDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireDevicePostureOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._integrationUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.integrationUid = this._integrationUid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._integrationUid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._integrationUid = value.integrationUid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireDevicePostureOutputReference.prototype, "integrationUid", {
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        set: function (value) {
            this._integrationUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireDevicePostureOutputReference.prototype, "integrationUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireDevicePostureOutputReference = ZeroTrustAccessPolicyRequireDevicePostureOutputReference;
function zeroTrustAccessPolicyRequireEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
function zeroTrustAccessPolicyRequireEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
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
var ZeroTrustAccessPolicyRequireEmailOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._email !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = this._email;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._email = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._email = value.email;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireEmailOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireEmailOutputReference = ZeroTrustAccessPolicyRequireEmailOutputReference;
function zeroTrustAccessPolicyRequireEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
function zeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
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
var ZeroTrustAccessPolicyRequireEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailDomainOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._domain !== undefined) {
                hasAnyValues = true;
                internalValueResult.domain = this._domain;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._domain = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._domain = value.domain;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailDomainOutputReference.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailDomainOutputReference.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireEmailDomainOutputReference = ZeroTrustAccessPolicyRequireEmailDomainOutputReference;
function zeroTrustAccessPolicyRequireEmailListStructToTerraform(struct) {
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
function zeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyRequireEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireEmailListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireEmailListStructOutputReference = ZeroTrustAccessPolicyRequireEmailListStructOutputReference;
function zeroTrustAccessPolicyRequireEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessPolicyRequireEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireEveryoneOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessPolicyRequireEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireEveryoneOutputReference = ZeroTrustAccessPolicyRequireEveryoneOutputReference;
function zeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
function zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
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
var ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._evaluateUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.evaluateUrl = this._evaluateUrl;
            }
            if (this._keysUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.keysUrl = this._keysUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._evaluateUrl = undefined;
                this._keysUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._evaluateUrl = value.evaluateUrl;
                this._keysUrl = value.keysUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        set: function (value) {
            this._evaluateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "evaluateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "keysUrl", {
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        set: function (value) {
            this._keysUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.prototype, "keysUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keysUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference = ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference;
function zeroTrustAccessPolicyRequireGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
function zeroTrustAccessPolicyRequireGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
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
var ZeroTrustAccessPolicyRequireGeoOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireGeoOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._countryCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.countryCode = this._countryCode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._countryCode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._countryCode = value.countryCode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGeoOutputReference.prototype, "countryCode", {
        get: function () {
            return this.getStringAttribute('country_code');
        },
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGeoOutputReference.prototype, "countryCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryCode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireGeoOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireGeoOutputReference = ZeroTrustAccessPolicyRequireGeoOutputReference;
function zeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
function zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
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
var ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._team !== undefined) {
                hasAnyValues = true;
                internalValueResult.team = this._team;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._identityProviderId = undefined;
                this._name = undefined;
                this._team = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._identityProviderId = value.identityProviderId;
                this._name = value.name;
                this._team = value.team;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "team", {
        get: function () {
            return this.getStringAttribute('team');
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype.resetTeam = function () {
        this._team = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference.prototype, "teamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._team;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference = ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference;
function zeroTrustAccessPolicyRequireGroupToTerraform(struct) {
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
function zeroTrustAccessPolicyRequireGroupToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyRequireGroupOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyRequireGroupOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGroupOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireGroupOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireGroupOutputReference = ZeroTrustAccessPolicyRequireGroupOutputReference;
function zeroTrustAccessPolicyRequireGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyRequireGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._email !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = this._email;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._email = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._email = value.email;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireGsuiteOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireGsuiteOutputReference = ZeroTrustAccessPolicyRequireGsuiteOutputReference;
function zeroTrustAccessPolicyRequireIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
function zeroTrustAccessPolicyRequireIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
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
var ZeroTrustAccessPolicyRequireIpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireIpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ip = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ip = value.ip;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireIpOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireIpOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireIpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireIpOutputReference = ZeroTrustAccessPolicyRequireIpOutputReference;
function zeroTrustAccessPolicyRequireIpListStructToTerraform(struct) {
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
function zeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyRequireIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyRequireIpListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireIpListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireIpListStructOutputReference = ZeroTrustAccessPolicyRequireIpListStructOutputReference;
function zeroTrustAccessPolicyRequireLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
function zeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
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
var ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._appUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.appUid = this._appUid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._appUid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._appUid = value.appUid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference.prototype, "appUid", {
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        set: function (value) {
            this._appUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference.prototype, "appUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference = ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference;
function zeroTrustAccessPolicyRequireLoginMethodToTerraform(struct) {
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
function zeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct) {
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
var ZeroTrustAccessPolicyRequireLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessPolicyRequireLoginMethodOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireLoginMethodOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireLoginMethodOutputReference = ZeroTrustAccessPolicyRequireLoginMethodOutputReference;
function zeroTrustAccessPolicyRequireOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyRequireOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyRequireOidcOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._claimName !== undefined) {
                hasAnyValues = true;
                internalValueResult.claimName = this._claimName;
            }
            if (this._claimValue !== undefined) {
                hasAnyValues = true;
                internalValueResult.claimValue = this._claimValue;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._claimName = undefined;
                this._claimValue = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._claimName = value.claimName;
                this._claimValue = value.claimValue;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "claimName", {
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        set: function (value) {
            this._claimName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "claimNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "claimValue", {
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        set: function (value) {
            this._claimValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "claimValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOidcOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireOidcOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireOidcOutputReference = ZeroTrustAccessPolicyRequireOidcOutputReference;
function zeroTrustAccessPolicyRequireOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function zeroTrustAccessPolicyRequireOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyRequireOktaOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
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
                this._identityProviderId = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._identityProviderId = value.identityProviderId;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOktaOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireOktaOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireOktaOutputReference = ZeroTrustAccessPolicyRequireOktaOutputReference;
function zeroTrustAccessPolicyRequireSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
function zeroTrustAccessPolicyRequireSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
var ZeroTrustAccessPolicyRequireSamlOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._attributeName !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributeName = this._attributeName;
            }
            if (this._attributeValue !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributeValue = this._attributeValue;
            }
            if (this._identityProviderId !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityProviderId = this._identityProviderId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._attributeName = undefined;
                this._attributeValue = undefined;
                this._identityProviderId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._attributeName = value.attributeName;
                this._attributeValue = value.attributeValue;
                this._identityProviderId = value.identityProviderId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "attributeName", {
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        set: function (value) {
            this._attributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "attributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "attributeValue", {
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        set: function (value) {
            this._attributeValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "attributeValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireSamlOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireSamlOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireSamlOutputReference = ZeroTrustAccessPolicyRequireSamlOutputReference;
function zeroTrustAccessPolicyRequireServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
function zeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
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
var ZeroTrustAccessPolicyRequireServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireServiceTokenOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._tokenId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tokenId = this._tokenId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._tokenId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._tokenId = value.tokenId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireServiceTokenOutputReference.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireServiceTokenOutputReference.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireServiceTokenOutputReference = ZeroTrustAccessPolicyRequireServiceTokenOutputReference;
function zeroTrustAccessPolicyRequireUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        user_risk_score: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.userRiskScore),
    };
}
function zeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        user_risk_score: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.userRiskScore),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._userRiskScore !== undefined) {
                hasAnyValues = true;
                internalValueResult.userRiskScore = this._userRiskScore;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._userRiskScore = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._userRiskScore = value.userRiskScore;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        set: function (value) {
            this._userRiskScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference = ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference;
function zeroTrustAccessPolicyRequireToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessPolicyRequireAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessPolicyRequireAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessPolicyRequireAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessPolicyRequireCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessPolicyRequireCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessPolicyRequireDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessPolicyRequireEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessPolicyRequireEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessPolicyRequireEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessPolicyRequireEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessPolicyRequireGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessPolicyRequireGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessPolicyRequireGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessPolicyRequireIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessPolicyRequireIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessPolicyRequireLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessPolicyRequireLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessPolicyRequireOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessPolicyRequireOktaToTerraform(struct.okta),
        saml: zeroTrustAccessPolicyRequireSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessPolicyRequireServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessPolicyRequireUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
function zeroTrustAccessPolicyRequireToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAzureAd",
        },
        certificate: {
            value: zeroTrustAccessPolicyRequireCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireCertificate",
        },
        common_name: {
            value: zeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireCommonName",
        },
        device_posture: {
            value: zeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireDevicePosture",
        },
        email: {
            value: zeroTrustAccessPolicyRequireEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEmail",
        },
        email_domain: {
            value: zeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessPolicyRequireGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGeo",
        },
        github_organization: {
            value: zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGithubOrganization",
        },
        group: {
            value: zeroTrustAccessPolicyRequireGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGroup",
        },
        gsuite: {
            value: zeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGsuite",
        },
        ip: {
            value: zeroTrustAccessPolicyRequireIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireIp",
        },
        ip_list: {
            value: zeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessPolicyRequireOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireOidc",
        },
        okta: {
            value: zeroTrustAccessPolicyRequireOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireOkta",
        },
        saml: {
            value: zeroTrustAccessPolicyRequireSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireSaml",
        },
        service_token: {
            value: zeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessPolicyRequireOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyRequireOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: false, optional: true, required: false
        _this._anyValidServiceToken = new ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: false, optional: true, required: false
        _this._authContext = new ZeroTrustAccessPolicyRequireAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: false, optional: true, required: false
        _this._authMethod = new ZeroTrustAccessPolicyRequireAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: false, optional: true, required: false
        _this._azureAd = new ZeroTrustAccessPolicyRequireAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: false, optional: true, required: false
        _this._certificate = new ZeroTrustAccessPolicyRequireCertificateOutputReference(_this, "certificate");
        // common_name - computed: false, optional: true, required: false
        _this._commonName = new ZeroTrustAccessPolicyRequireCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: false, optional: true, required: false
        _this._devicePosture = new ZeroTrustAccessPolicyRequireDevicePostureOutputReference(_this, "device_posture");
        // email - computed: false, optional: true, required: false
        _this._email = new ZeroTrustAccessPolicyRequireEmailOutputReference(_this, "email");
        // email_domain - computed: false, optional: true, required: false
        _this._emailDomain = new ZeroTrustAccessPolicyRequireEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: false, optional: true, required: false
        _this._emailList = new ZeroTrustAccessPolicyRequireEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: false, optional: true, required: false
        _this._everyone = new ZeroTrustAccessPolicyRequireEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: false, optional: true, required: false
        _this._externalEvaluation = new ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: false, optional: true, required: false
        _this._geo = new ZeroTrustAccessPolicyRequireGeoOutputReference(_this, "geo");
        // github_organization - computed: false, optional: true, required: false
        _this._githubOrganization = new ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: false, optional: true, required: false
        _this._group = new ZeroTrustAccessPolicyRequireGroupOutputReference(_this, "group");
        // gsuite - computed: false, optional: true, required: false
        _this._gsuite = new ZeroTrustAccessPolicyRequireGsuiteOutputReference(_this, "gsuite");
        // ip - computed: false, optional: true, required: false
        _this._ip = new ZeroTrustAccessPolicyRequireIpOutputReference(_this, "ip");
        // ip_list - computed: false, optional: true, required: false
        _this._ipList = new ZeroTrustAccessPolicyRequireIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: false, optional: true, required: false
        _this._linkedAppToken = new ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: false, optional: true, required: false
        _this._loginMethod = new ZeroTrustAccessPolicyRequireLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: false, optional: true, required: false
        _this._oidc = new ZeroTrustAccessPolicyRequireOidcOutputReference(_this, "oidc");
        // okta - computed: false, optional: true, required: false
        _this._okta = new ZeroTrustAccessPolicyRequireOktaOutputReference(_this, "okta");
        // saml - computed: false, optional: true, required: false
        _this._saml = new ZeroTrustAccessPolicyRequireSamlOutputReference(_this, "saml");
        // service_token - computed: false, optional: true, required: false
        _this._serviceToken = new ZeroTrustAccessPolicyRequireServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: false, optional: true, required: false
        _this._userRiskScore = new ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._anyValidServiceToken) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.anyValidServiceToken = (_b = this._anyValidServiceToken) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._authContext) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.authContext = (_d = this._authContext) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._authMethod) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.authMethod = (_f = this._authMethod) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._azureAd) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.azureAd = (_h = this._azureAd) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._certificate) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificate = (_k = this._certificate) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._commonName) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.commonName = (_m = this._commonName) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (((_o = this._devicePosture) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.devicePosture = (_p = this._devicePosture) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._email) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = (_r = this._email) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._emailDomain) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailDomain = (_t = this._emailDomain) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._emailList) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailList = (_v = this._emailList) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._everyone) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.everyone = (_x = this._everyone) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._externalEvaluation) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.externalEvaluation = (_z = this._externalEvaluation) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._geo) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.geo = (_1 = this._geo) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._githubOrganization) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.githubOrganization = (_3 = this._githubOrganization) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            if (((_4 = this._group) === null || _4 === void 0 ? void 0 : _4.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.group = (_5 = this._group) === null || _5 === void 0 ? void 0 : _5.internalValue;
            }
            if (((_6 = this._gsuite) === null || _6 === void 0 ? void 0 : _6.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.gsuite = (_7 = this._gsuite) === null || _7 === void 0 ? void 0 : _7.internalValue;
            }
            if (((_8 = this._ip) === null || _8 === void 0 ? void 0 : _8.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = (_9 = this._ip) === null || _9 === void 0 ? void 0 : _9.internalValue;
            }
            if (((_10 = this._ipList) === null || _10 === void 0 ? void 0 : _10.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipList = (_11 = this._ipList) === null || _11 === void 0 ? void 0 : _11.internalValue;
            }
            if (((_12 = this._linkedAppToken) === null || _12 === void 0 ? void 0 : _12.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.linkedAppToken = (_13 = this._linkedAppToken) === null || _13 === void 0 ? void 0 : _13.internalValue;
            }
            if (((_14 = this._loginMethod) === null || _14 === void 0 ? void 0 : _14.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.loginMethod = (_15 = this._loginMethod) === null || _15 === void 0 ? void 0 : _15.internalValue;
            }
            if (((_16 = this._oidc) === null || _16 === void 0 ? void 0 : _16.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.oidc = (_17 = this._oidc) === null || _17 === void 0 ? void 0 : _17.internalValue;
            }
            if (((_18 = this._okta) === null || _18 === void 0 ? void 0 : _18.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.okta = (_19 = this._okta) === null || _19 === void 0 ? void 0 : _19.internalValue;
            }
            if (((_20 = this._saml) === null || _20 === void 0 ? void 0 : _20.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.saml = (_21 = this._saml) === null || _21 === void 0 ? void 0 : _21.internalValue;
            }
            if (((_22 = this._serviceToken) === null || _22 === void 0 ? void 0 : _22.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.serviceToken = (_23 = this._serviceToken) === null || _23 === void 0 ? void 0 : _23.internalValue;
            }
            if (((_24 = this._userRiskScore) === null || _24 === void 0 ? void 0 : _24.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.userRiskScore = (_25 = this._userRiskScore) === null || _25 === void 0 ? void 0 : _25.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._anyValidServiceToken.internalValue = undefined;
                this._authContext.internalValue = undefined;
                this._authMethod.internalValue = undefined;
                this._azureAd.internalValue = undefined;
                this._certificate.internalValue = undefined;
                this._commonName.internalValue = undefined;
                this._devicePosture.internalValue = undefined;
                this._email.internalValue = undefined;
                this._emailDomain.internalValue = undefined;
                this._emailList.internalValue = undefined;
                this._everyone.internalValue = undefined;
                this._externalEvaluation.internalValue = undefined;
                this._geo.internalValue = undefined;
                this._githubOrganization.internalValue = undefined;
                this._group.internalValue = undefined;
                this._gsuite.internalValue = undefined;
                this._ip.internalValue = undefined;
                this._ipList.internalValue = undefined;
                this._linkedAppToken.internalValue = undefined;
                this._loginMethod.internalValue = undefined;
                this._oidc.internalValue = undefined;
                this._okta.internalValue = undefined;
                this._saml.internalValue = undefined;
                this._serviceToken.internalValue = undefined;
                this._userRiskScore.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
                this._authContext.internalValue = value.authContext;
                this._authMethod.internalValue = value.authMethod;
                this._azureAd.internalValue = value.azureAd;
                this._certificate.internalValue = value.certificate;
                this._commonName.internalValue = value.commonName;
                this._devicePosture.internalValue = value.devicePosture;
                this._email.internalValue = value.email;
                this._emailDomain.internalValue = value.emailDomain;
                this._emailList.internalValue = value.emailList;
                this._everyone.internalValue = value.everyone;
                this._externalEvaluation.internalValue = value.externalEvaluation;
                this._geo.internalValue = value.geo;
                this._githubOrganization.internalValue = value.githubOrganization;
                this._group.internalValue = value.group;
                this._gsuite.internalValue = value.gsuite;
                this._ip.internalValue = value.ip;
                this._ipList.internalValue = value.ipList;
                this._linkedAppToken.internalValue = value.linkedAppToken;
                this._loginMethod.internalValue = value.loginMethod;
                this._oidc.internalValue = value.oidc;
                this._okta.internalValue = value.okta;
                this._saml.internalValue = value.saml;
                this._serviceToken.internalValue = value.serviceToken;
                this._userRiskScore.internalValue = value.userRiskScore;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putAnyValidServiceToken = function (value) {
        this._anyValidServiceToken.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetAnyValidServiceToken = function () {
        this._anyValidServiceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "anyValidServiceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._anyValidServiceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putAuthContext = function (value) {
        this._authContext.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetAuthContext = function () {
        this._authContext.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "authContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authContext.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putAuthMethod = function (value) {
        this._authMethod.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetAuthMethod = function () {
        this._authMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putAzureAd = function (value) {
        this._azureAd.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetAzureAd = function () {
        this._azureAd.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "azureAdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azureAd.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putCertificate = function (value) {
        this._certificate.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetCertificate = function () {
        this._certificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putCommonName = function (value) {
        this._commonName.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetCommonName = function () {
        this._commonName.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putDevicePosture = function (value) {
        this._devicePosture.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetDevicePosture = function () {
        this._devicePosture.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "devicePostureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devicePosture.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putEmail = function (value) {
        this._email.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetEmail = function () {
        this._email.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putEmailDomain = function (value) {
        this._emailDomain.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetEmailDomain = function () {
        this._emailDomain.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "emailDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailDomain.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putEmailList = function (value) {
        this._emailList.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetEmailList = function () {
        this._emailList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "emailListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putEveryone = function (value) {
        this._everyone.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetEveryone = function () {
        this._everyone.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "everyoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._everyone.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putExternalEvaluation = function (value) {
        this._externalEvaluation.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetExternalEvaluation = function () {
        this._externalEvaluation.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "externalEvaluationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEvaluation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putGeo = function (value) {
        this._geo.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetGeo = function () {
        this._geo.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putGithubOrganization = function (value) {
        this._githubOrganization.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetGithubOrganization = function () {
        this._githubOrganization.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "githubOrganizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOrganization.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putGroup = function (value) {
        this._group.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetGroup = function () {
        this._group.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putGsuite = function (value) {
        this._gsuite.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetGsuite = function () {
        this._gsuite.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "gsuiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gsuite.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putIp = function (value) {
        this._ip.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetIp = function () {
        this._ip.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putIpList = function (value) {
        this._ipList.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetIpList = function () {
        this._ipList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "ipListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putLinkedAppToken = function (value) {
        this._linkedAppToken.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetLinkedAppToken = function () {
        this._linkedAppToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "linkedAppTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._linkedAppToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putLoginMethod = function (value) {
        this._loginMethod.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetLoginMethod = function () {
        this._loginMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "loginMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loginMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putOidc = function (value) {
        this._oidc.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetOidc = function () {
        this._oidc.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "oidcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putOkta = function (value) {
        this._okta.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetOkta = function () {
        this._okta.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "oktaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okta.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putSaml = function (value) {
        this._saml.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetSaml = function () {
        this._saml.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "samlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saml.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putServiceToken = function (value) {
        this._serviceToken.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetServiceToken = function () {
        this._serviceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "serviceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicyRequireOutputReference.prototype.putUserRiskScore = function (value) {
        this._userRiskScore.internalValue = value;
    };
    ZeroTrustAccessPolicyRequireOutputReference.prototype.resetUserRiskScore = function () {
        this._userRiskScore.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicyRequireOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessPolicyRequireOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessPolicyRequireOutputReference = ZeroTrustAccessPolicyRequireOutputReference;
var ZeroTrustAccessPolicyRequireList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicyRequireList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessPolicyRequireList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessPolicyRequireList.prototype.get = function (index) {
        return new ZeroTrustAccessPolicyRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessPolicyRequireList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessPolicyRequireList = ZeroTrustAccessPolicyRequireList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy}
*/
var ZeroTrustAccessPolicy = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessPolicyConfig
    */
    function ZeroTrustAccessPolicy(scope, id, config) {
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
        // approval_groups - computed: false, optional: true, required: false
        _this._approvalGroups = new ZeroTrustAccessPolicyApprovalGroupsList(_this, "approval_groups", true);
        // connection_rules - computed: false, optional: true, required: false
        _this._connectionRules = new ZeroTrustAccessPolicyConnectionRulesOutputReference(_this, "connection_rules");
        // exclude - computed: false, optional: true, required: false
        _this._exclude = new ZeroTrustAccessPolicyExcludeList(_this, "exclude", true);
        // include - computed: true, optional: true, required: false
        _this._include = new ZeroTrustAccessPolicyIncludeList(_this, "include", true);
        // mfa_config - computed: false, optional: true, required: false
        _this._mfaConfig = new ZeroTrustAccessPolicyMfaConfigOutputReference(_this, "mfa_config");
        // require - computed: false, optional: true, required: false
        _this._require = new ZeroTrustAccessPolicyRequireList(_this, "require", true);
        _this._accountId = config.accountId;
        _this._approvalGroups.internalValue = config.approvalGroups;
        _this._approvalRequired = config.approvalRequired;
        _this._connectionRules.internalValue = config.connectionRules;
        _this._decision = config.decision;
        _this._exclude.internalValue = config.exclude;
        _this._include.internalValue = config.include;
        _this._isolationRequired = config.isolationRequired;
        _this._mfaConfig.internalValue = config.mfaConfig;
        _this._name = config.name;
        _this._purposeJustificationPrompt = config.purposeJustificationPrompt;
        _this._purposeJustificationRequired = config.purposeJustificationRequired;
        _this._require.internalValue = config.require;
        _this._sessionDuration = config.sessionDuration;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessPolicy to import
    * @param importFromId The id of the existing ZeroTrustAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessPolicy to import is found
    */
    ZeroTrustAccessPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "approvalGroups", {
        get: function () {
            return this._approvalGroups;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.putApprovalGroups = function (value) {
        this._approvalGroups.internalValue = value;
    };
    ZeroTrustAccessPolicy.prototype.resetApprovalGroups = function () {
        this._approvalGroups.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "approvalGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvalGroups.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "approvalRequired", {
        get: function () {
            return this.getBooleanAttribute('approval_required');
        },
        set: function (value) {
            this._approvalRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.resetApprovalRequired = function () {
        this._approvalRequired = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "approvalRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvalRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "connectionRules", {
        get: function () {
            return this._connectionRules;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.putConnectionRules = function (value) {
        this._connectionRules.internalValue = value;
    };
    ZeroTrustAccessPolicy.prototype.resetConnectionRules = function () {
        this._connectionRules.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "connectionRulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionRules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "decision", {
        get: function () {
            return this.getStringAttribute('decision');
        },
        set: function (value) {
            this._decision = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "decisionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._decision;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.putExclude = function (value) {
        this._exclude.internalValue = value;
    };
    ZeroTrustAccessPolicy.prototype.resetExclude = function () {
        this._exclude.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.putInclude = function (value) {
        this._include.internalValue = value;
    };
    ZeroTrustAccessPolicy.prototype.resetInclude = function () {
        this._include.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "isolationRequired", {
        get: function () {
            return this.getBooleanAttribute('isolation_required');
        },
        set: function (value) {
            this._isolationRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.resetIsolationRequired = function () {
        this._isolationRequired = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "isolationRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isolationRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "mfaConfig", {
        get: function () {
            return this._mfaConfig;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.putMfaConfig = function (value) {
        this._mfaConfig.internalValue = value;
    };
    ZeroTrustAccessPolicy.prototype.resetMfaConfig = function () {
        this._mfaConfig.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "mfaConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mfaConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "purposeJustificationPrompt", {
        get: function () {
            return this.getStringAttribute('purpose_justification_prompt');
        },
        set: function (value) {
            this._purposeJustificationPrompt = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.resetPurposeJustificationPrompt = function () {
        this._purposeJustificationPrompt = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "purposeJustificationPromptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._purposeJustificationPrompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "purposeJustificationRequired", {
        get: function () {
            return this.getBooleanAttribute('purpose_justification_required');
        },
        set: function (value) {
            this._purposeJustificationRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.resetPurposeJustificationRequired = function () {
        this._purposeJustificationRequired = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "purposeJustificationRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._purposeJustificationRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "require", {
        get: function () {
            return this._require;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.putRequire = function (value) {
        this._require.internalValue = value;
    };
    ZeroTrustAccessPolicy.prototype.resetRequire = function () {
        this._require.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "requireInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._require.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "sessionDuration", {
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        set: function (value) {
            this._sessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessPolicy.prototype.resetSessionDuration = function () {
        this._sessionDuration = undefined;
    };
    Object.defineProperty(ZeroTrustAccessPolicy.prototype, "sessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessPolicy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            approval_groups: cdktf.listMapper(zeroTrustAccessPolicyApprovalGroupsToTerraform, false)(this._approvalGroups.internalValue),
            approval_required: cdktf.booleanToTerraform(this._approvalRequired),
            connection_rules: zeroTrustAccessPolicyConnectionRulesToTerraform(this._connectionRules.internalValue),
            decision: cdktf.stringToTerraform(this._decision),
            exclude: cdktf.listMapper(zeroTrustAccessPolicyExcludeToTerraform, false)(this._exclude.internalValue),
            include: cdktf.listMapper(zeroTrustAccessPolicyIncludeToTerraform, false)(this._include.internalValue),
            isolation_required: cdktf.booleanToTerraform(this._isolationRequired),
            mfa_config: zeroTrustAccessPolicyMfaConfigToTerraform(this._mfaConfig.internalValue),
            name: cdktf.stringToTerraform(this._name),
            purpose_justification_prompt: cdktf.stringToTerraform(this._purposeJustificationPrompt),
            purpose_justification_required: cdktf.booleanToTerraform(this._purposeJustificationRequired),
            require: cdktf.listMapper(zeroTrustAccessPolicyRequireToTerraform, false)(this._require.internalValue),
            session_duration: cdktf.stringToTerraform(this._sessionDuration),
        };
    };
    ZeroTrustAccessPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            approval_groups: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyApprovalGroupsToHclTerraform, false)(this._approvalGroups.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyApprovalGroupsList",
            },
            approval_required: {
                value: cdktf.booleanToHclTerraform(this._approvalRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            connection_rules: {
                value: zeroTrustAccessPolicyConnectionRulesToHclTerraform(this._connectionRules.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessPolicyConnectionRules",
            },
            decision: {
                value: cdktf.stringToHclTerraform(this._decision),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeToHclTerraform, false)(this._exclude.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyExcludeList",
            },
            include: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeToHclTerraform, false)(this._include.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyIncludeList",
            },
            isolation_required: {
                value: cdktf.booleanToHclTerraform(this._isolationRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mfa_config: {
                value: zeroTrustAccessPolicyMfaConfigToHclTerraform(this._mfaConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessPolicyMfaConfig",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            purpose_justification_prompt: {
                value: cdktf.stringToHclTerraform(this._purposeJustificationPrompt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            purpose_justification_required: {
                value: cdktf.booleanToHclTerraform(this._purposeJustificationRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            require: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireToHclTerraform, false)(this._require.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyRequireList",
            },
            session_duration: {
                value: cdktf.stringToHclTerraform(this._sessionDuration),
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
    ZeroTrustAccessPolicy.tfResourceType = "cloudflare_zero_trust_access_policy";
    return ZeroTrustAccessPolicy;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessPolicy = ZeroTrustAccessPolicy;
