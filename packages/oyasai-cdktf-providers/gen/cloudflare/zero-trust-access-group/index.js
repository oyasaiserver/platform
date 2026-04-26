"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group
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
exports.ZeroTrustAccessGroupIncludeSamlOutputReference = exports.ZeroTrustAccessGroupIncludeOktaOutputReference = exports.ZeroTrustAccessGroupIncludeOidcOutputReference = exports.ZeroTrustAccessGroupIncludeLoginMethodOutputReference = exports.ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference = exports.ZeroTrustAccessGroupIncludeIpListStructOutputReference = exports.ZeroTrustAccessGroupIncludeIpOutputReference = exports.ZeroTrustAccessGroupIncludeGsuiteOutputReference = exports.ZeroTrustAccessGroupIncludeGroupOutputReference = exports.ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference = exports.ZeroTrustAccessGroupIncludeGeoOutputReference = exports.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference = exports.ZeroTrustAccessGroupIncludeEveryoneOutputReference = exports.ZeroTrustAccessGroupIncludeEmailListStructOutputReference = exports.ZeroTrustAccessGroupIncludeEmailDomainOutputReference = exports.ZeroTrustAccessGroupIncludeEmailOutputReference = exports.ZeroTrustAccessGroupIncludeDevicePostureOutputReference = exports.ZeroTrustAccessGroupIncludeCommonNameOutputReference = exports.ZeroTrustAccessGroupIncludeCertificateOutputReference = exports.ZeroTrustAccessGroupIncludeAzureAdOutputReference = exports.ZeroTrustAccessGroupIncludeAuthMethodOutputReference = exports.ZeroTrustAccessGroupIncludeAuthContextOutputReference = exports.ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference = exports.ZeroTrustAccessGroupExcludeList = exports.ZeroTrustAccessGroupExcludeOutputReference = exports.ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference = exports.ZeroTrustAccessGroupExcludeServiceTokenOutputReference = exports.ZeroTrustAccessGroupExcludeSamlOutputReference = exports.ZeroTrustAccessGroupExcludeOktaOutputReference = exports.ZeroTrustAccessGroupExcludeOidcOutputReference = exports.ZeroTrustAccessGroupExcludeLoginMethodOutputReference = exports.ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference = exports.ZeroTrustAccessGroupExcludeIpListStructOutputReference = exports.ZeroTrustAccessGroupExcludeIpOutputReference = exports.ZeroTrustAccessGroupExcludeGsuiteOutputReference = exports.ZeroTrustAccessGroupExcludeGroupOutputReference = exports.ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference = exports.ZeroTrustAccessGroupExcludeGeoOutputReference = exports.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference = exports.ZeroTrustAccessGroupExcludeEveryoneOutputReference = exports.ZeroTrustAccessGroupExcludeEmailListStructOutputReference = exports.ZeroTrustAccessGroupExcludeEmailDomainOutputReference = exports.ZeroTrustAccessGroupExcludeEmailOutputReference = exports.ZeroTrustAccessGroupExcludeDevicePostureOutputReference = exports.ZeroTrustAccessGroupExcludeCommonNameOutputReference = exports.ZeroTrustAccessGroupExcludeCertificateOutputReference = exports.ZeroTrustAccessGroupExcludeAzureAdOutputReference = exports.ZeroTrustAccessGroupExcludeAuthMethodOutputReference = exports.ZeroTrustAccessGroupExcludeAuthContextOutputReference = exports.ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference = void 0;
exports.ZeroTrustAccessGroup = exports.ZeroTrustAccessGroupRequireList = exports.ZeroTrustAccessGroupRequireOutputReference = exports.ZeroTrustAccessGroupRequireUserRiskScoreOutputReference = exports.ZeroTrustAccessGroupRequireServiceTokenOutputReference = exports.ZeroTrustAccessGroupRequireSamlOutputReference = exports.ZeroTrustAccessGroupRequireOktaOutputReference = exports.ZeroTrustAccessGroupRequireOidcOutputReference = exports.ZeroTrustAccessGroupRequireLoginMethodOutputReference = exports.ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference = exports.ZeroTrustAccessGroupRequireIpListStructOutputReference = exports.ZeroTrustAccessGroupRequireIpOutputReference = exports.ZeroTrustAccessGroupRequireGsuiteOutputReference = exports.ZeroTrustAccessGroupRequireGroupOutputReference = exports.ZeroTrustAccessGroupRequireGithubOrganizationOutputReference = exports.ZeroTrustAccessGroupRequireGeoOutputReference = exports.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference = exports.ZeroTrustAccessGroupRequireEveryoneOutputReference = exports.ZeroTrustAccessGroupRequireEmailListStructOutputReference = exports.ZeroTrustAccessGroupRequireEmailDomainOutputReference = exports.ZeroTrustAccessGroupRequireEmailOutputReference = exports.ZeroTrustAccessGroupRequireDevicePostureOutputReference = exports.ZeroTrustAccessGroupRequireCommonNameOutputReference = exports.ZeroTrustAccessGroupRequireCertificateOutputReference = exports.ZeroTrustAccessGroupRequireAzureAdOutputReference = exports.ZeroTrustAccessGroupRequireAuthMethodOutputReference = exports.ZeroTrustAccessGroupRequireAuthContextOutputReference = exports.ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference = exports.ZeroTrustAccessGroupIncludeList = exports.ZeroTrustAccessGroupIncludeOutputReference = exports.ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference = exports.ZeroTrustAccessGroupIncludeServiceTokenOutputReference = void 0;
exports.zeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform = zeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform;
exports.zeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform = zeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform;
exports.zeroTrustAccessGroupExcludeAuthContextToTerraform = zeroTrustAccessGroupExcludeAuthContextToTerraform;
exports.zeroTrustAccessGroupExcludeAuthContextToHclTerraform = zeroTrustAccessGroupExcludeAuthContextToHclTerraform;
exports.zeroTrustAccessGroupExcludeAuthMethodToTerraform = zeroTrustAccessGroupExcludeAuthMethodToTerraform;
exports.zeroTrustAccessGroupExcludeAuthMethodToHclTerraform = zeroTrustAccessGroupExcludeAuthMethodToHclTerraform;
exports.zeroTrustAccessGroupExcludeAzureAdToTerraform = zeroTrustAccessGroupExcludeAzureAdToTerraform;
exports.zeroTrustAccessGroupExcludeAzureAdToHclTerraform = zeroTrustAccessGroupExcludeAzureAdToHclTerraform;
exports.zeroTrustAccessGroupExcludeCertificateToTerraform = zeroTrustAccessGroupExcludeCertificateToTerraform;
exports.zeroTrustAccessGroupExcludeCertificateToHclTerraform = zeroTrustAccessGroupExcludeCertificateToHclTerraform;
exports.zeroTrustAccessGroupExcludeCommonNameToTerraform = zeroTrustAccessGroupExcludeCommonNameToTerraform;
exports.zeroTrustAccessGroupExcludeCommonNameToHclTerraform = zeroTrustAccessGroupExcludeCommonNameToHclTerraform;
exports.zeroTrustAccessGroupExcludeDevicePostureToTerraform = zeroTrustAccessGroupExcludeDevicePostureToTerraform;
exports.zeroTrustAccessGroupExcludeDevicePostureToHclTerraform = zeroTrustAccessGroupExcludeDevicePostureToHclTerraform;
exports.zeroTrustAccessGroupExcludeEmailToTerraform = zeroTrustAccessGroupExcludeEmailToTerraform;
exports.zeroTrustAccessGroupExcludeEmailToHclTerraform = zeroTrustAccessGroupExcludeEmailToHclTerraform;
exports.zeroTrustAccessGroupExcludeEmailDomainToTerraform = zeroTrustAccessGroupExcludeEmailDomainToTerraform;
exports.zeroTrustAccessGroupExcludeEmailDomainToHclTerraform = zeroTrustAccessGroupExcludeEmailDomainToHclTerraform;
exports.zeroTrustAccessGroupExcludeEmailListStructToTerraform = zeroTrustAccessGroupExcludeEmailListStructToTerraform;
exports.zeroTrustAccessGroupExcludeEmailListStructToHclTerraform = zeroTrustAccessGroupExcludeEmailListStructToHclTerraform;
exports.zeroTrustAccessGroupExcludeEveryoneToTerraform = zeroTrustAccessGroupExcludeEveryoneToTerraform;
exports.zeroTrustAccessGroupExcludeEveryoneToHclTerraform = zeroTrustAccessGroupExcludeEveryoneToHclTerraform;
exports.zeroTrustAccessGroupExcludeExternalEvaluationToTerraform = zeroTrustAccessGroupExcludeExternalEvaluationToTerraform;
exports.zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform = zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform;
exports.zeroTrustAccessGroupExcludeGeoToTerraform = zeroTrustAccessGroupExcludeGeoToTerraform;
exports.zeroTrustAccessGroupExcludeGeoToHclTerraform = zeroTrustAccessGroupExcludeGeoToHclTerraform;
exports.zeroTrustAccessGroupExcludeGithubOrganizationToTerraform = zeroTrustAccessGroupExcludeGithubOrganizationToTerraform;
exports.zeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform = zeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform;
exports.zeroTrustAccessGroupExcludeGroupToTerraform = zeroTrustAccessGroupExcludeGroupToTerraform;
exports.zeroTrustAccessGroupExcludeGroupToHclTerraform = zeroTrustAccessGroupExcludeGroupToHclTerraform;
exports.zeroTrustAccessGroupExcludeGsuiteToTerraform = zeroTrustAccessGroupExcludeGsuiteToTerraform;
exports.zeroTrustAccessGroupExcludeGsuiteToHclTerraform = zeroTrustAccessGroupExcludeGsuiteToHclTerraform;
exports.zeroTrustAccessGroupExcludeIpToTerraform = zeroTrustAccessGroupExcludeIpToTerraform;
exports.zeroTrustAccessGroupExcludeIpToHclTerraform = zeroTrustAccessGroupExcludeIpToHclTerraform;
exports.zeroTrustAccessGroupExcludeIpListStructToTerraform = zeroTrustAccessGroupExcludeIpListStructToTerraform;
exports.zeroTrustAccessGroupExcludeIpListStructToHclTerraform = zeroTrustAccessGroupExcludeIpListStructToHclTerraform;
exports.zeroTrustAccessGroupExcludeLinkedAppTokenToTerraform = zeroTrustAccessGroupExcludeLinkedAppTokenToTerraform;
exports.zeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform = zeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform;
exports.zeroTrustAccessGroupExcludeLoginMethodToTerraform = zeroTrustAccessGroupExcludeLoginMethodToTerraform;
exports.zeroTrustAccessGroupExcludeLoginMethodToHclTerraform = zeroTrustAccessGroupExcludeLoginMethodToHclTerraform;
exports.zeroTrustAccessGroupExcludeOidcToTerraform = zeroTrustAccessGroupExcludeOidcToTerraform;
exports.zeroTrustAccessGroupExcludeOidcToHclTerraform = zeroTrustAccessGroupExcludeOidcToHclTerraform;
exports.zeroTrustAccessGroupExcludeOktaToTerraform = zeroTrustAccessGroupExcludeOktaToTerraform;
exports.zeroTrustAccessGroupExcludeOktaToHclTerraform = zeroTrustAccessGroupExcludeOktaToHclTerraform;
exports.zeroTrustAccessGroupExcludeSamlToTerraform = zeroTrustAccessGroupExcludeSamlToTerraform;
exports.zeroTrustAccessGroupExcludeSamlToHclTerraform = zeroTrustAccessGroupExcludeSamlToHclTerraform;
exports.zeroTrustAccessGroupExcludeServiceTokenToTerraform = zeroTrustAccessGroupExcludeServiceTokenToTerraform;
exports.zeroTrustAccessGroupExcludeServiceTokenToHclTerraform = zeroTrustAccessGroupExcludeServiceTokenToHclTerraform;
exports.zeroTrustAccessGroupExcludeUserRiskScoreToTerraform = zeroTrustAccessGroupExcludeUserRiskScoreToTerraform;
exports.zeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform = zeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform;
exports.zeroTrustAccessGroupExcludeToTerraform = zeroTrustAccessGroupExcludeToTerraform;
exports.zeroTrustAccessGroupExcludeToHclTerraform = zeroTrustAccessGroupExcludeToHclTerraform;
exports.zeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform = zeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform;
exports.zeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform = zeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform;
exports.zeroTrustAccessGroupIncludeAuthContextToTerraform = zeroTrustAccessGroupIncludeAuthContextToTerraform;
exports.zeroTrustAccessGroupIncludeAuthContextToHclTerraform = zeroTrustAccessGroupIncludeAuthContextToHclTerraform;
exports.zeroTrustAccessGroupIncludeAuthMethodToTerraform = zeroTrustAccessGroupIncludeAuthMethodToTerraform;
exports.zeroTrustAccessGroupIncludeAuthMethodToHclTerraform = zeroTrustAccessGroupIncludeAuthMethodToHclTerraform;
exports.zeroTrustAccessGroupIncludeAzureAdToTerraform = zeroTrustAccessGroupIncludeAzureAdToTerraform;
exports.zeroTrustAccessGroupIncludeAzureAdToHclTerraform = zeroTrustAccessGroupIncludeAzureAdToHclTerraform;
exports.zeroTrustAccessGroupIncludeCertificateToTerraform = zeroTrustAccessGroupIncludeCertificateToTerraform;
exports.zeroTrustAccessGroupIncludeCertificateToHclTerraform = zeroTrustAccessGroupIncludeCertificateToHclTerraform;
exports.zeroTrustAccessGroupIncludeCommonNameToTerraform = zeroTrustAccessGroupIncludeCommonNameToTerraform;
exports.zeroTrustAccessGroupIncludeCommonNameToHclTerraform = zeroTrustAccessGroupIncludeCommonNameToHclTerraform;
exports.zeroTrustAccessGroupIncludeDevicePostureToTerraform = zeroTrustAccessGroupIncludeDevicePostureToTerraform;
exports.zeroTrustAccessGroupIncludeDevicePostureToHclTerraform = zeroTrustAccessGroupIncludeDevicePostureToHclTerraform;
exports.zeroTrustAccessGroupIncludeEmailToTerraform = zeroTrustAccessGroupIncludeEmailToTerraform;
exports.zeroTrustAccessGroupIncludeEmailToHclTerraform = zeroTrustAccessGroupIncludeEmailToHclTerraform;
exports.zeroTrustAccessGroupIncludeEmailDomainToTerraform = zeroTrustAccessGroupIncludeEmailDomainToTerraform;
exports.zeroTrustAccessGroupIncludeEmailDomainToHclTerraform = zeroTrustAccessGroupIncludeEmailDomainToHclTerraform;
exports.zeroTrustAccessGroupIncludeEmailListStructToTerraform = zeroTrustAccessGroupIncludeEmailListStructToTerraform;
exports.zeroTrustAccessGroupIncludeEmailListStructToHclTerraform = zeroTrustAccessGroupIncludeEmailListStructToHclTerraform;
exports.zeroTrustAccessGroupIncludeEveryoneToTerraform = zeroTrustAccessGroupIncludeEveryoneToTerraform;
exports.zeroTrustAccessGroupIncludeEveryoneToHclTerraform = zeroTrustAccessGroupIncludeEveryoneToHclTerraform;
exports.zeroTrustAccessGroupIncludeExternalEvaluationToTerraform = zeroTrustAccessGroupIncludeExternalEvaluationToTerraform;
exports.zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform = zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform;
exports.zeroTrustAccessGroupIncludeGeoToTerraform = zeroTrustAccessGroupIncludeGeoToTerraform;
exports.zeroTrustAccessGroupIncludeGeoToHclTerraform = zeroTrustAccessGroupIncludeGeoToHclTerraform;
exports.zeroTrustAccessGroupIncludeGithubOrganizationToTerraform = zeroTrustAccessGroupIncludeGithubOrganizationToTerraform;
exports.zeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform = zeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform;
exports.zeroTrustAccessGroupIncludeGroupToTerraform = zeroTrustAccessGroupIncludeGroupToTerraform;
exports.zeroTrustAccessGroupIncludeGroupToHclTerraform = zeroTrustAccessGroupIncludeGroupToHclTerraform;
exports.zeroTrustAccessGroupIncludeGsuiteToTerraform = zeroTrustAccessGroupIncludeGsuiteToTerraform;
exports.zeroTrustAccessGroupIncludeGsuiteToHclTerraform = zeroTrustAccessGroupIncludeGsuiteToHclTerraform;
exports.zeroTrustAccessGroupIncludeIpToTerraform = zeroTrustAccessGroupIncludeIpToTerraform;
exports.zeroTrustAccessGroupIncludeIpToHclTerraform = zeroTrustAccessGroupIncludeIpToHclTerraform;
exports.zeroTrustAccessGroupIncludeIpListStructToTerraform = zeroTrustAccessGroupIncludeIpListStructToTerraform;
exports.zeroTrustAccessGroupIncludeIpListStructToHclTerraform = zeroTrustAccessGroupIncludeIpListStructToHclTerraform;
exports.zeroTrustAccessGroupIncludeLinkedAppTokenToTerraform = zeroTrustAccessGroupIncludeLinkedAppTokenToTerraform;
exports.zeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform = zeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform;
exports.zeroTrustAccessGroupIncludeLoginMethodToTerraform = zeroTrustAccessGroupIncludeLoginMethodToTerraform;
exports.zeroTrustAccessGroupIncludeLoginMethodToHclTerraform = zeroTrustAccessGroupIncludeLoginMethodToHclTerraform;
exports.zeroTrustAccessGroupIncludeOidcToTerraform = zeroTrustAccessGroupIncludeOidcToTerraform;
exports.zeroTrustAccessGroupIncludeOidcToHclTerraform = zeroTrustAccessGroupIncludeOidcToHclTerraform;
exports.zeroTrustAccessGroupIncludeOktaToTerraform = zeroTrustAccessGroupIncludeOktaToTerraform;
exports.zeroTrustAccessGroupIncludeOktaToHclTerraform = zeroTrustAccessGroupIncludeOktaToHclTerraform;
exports.zeroTrustAccessGroupIncludeSamlToTerraform = zeroTrustAccessGroupIncludeSamlToTerraform;
exports.zeroTrustAccessGroupIncludeSamlToHclTerraform = zeroTrustAccessGroupIncludeSamlToHclTerraform;
exports.zeroTrustAccessGroupIncludeServiceTokenToTerraform = zeroTrustAccessGroupIncludeServiceTokenToTerraform;
exports.zeroTrustAccessGroupIncludeServiceTokenToHclTerraform = zeroTrustAccessGroupIncludeServiceTokenToHclTerraform;
exports.zeroTrustAccessGroupIncludeUserRiskScoreToTerraform = zeroTrustAccessGroupIncludeUserRiskScoreToTerraform;
exports.zeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform = zeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform;
exports.zeroTrustAccessGroupIncludeToTerraform = zeroTrustAccessGroupIncludeToTerraform;
exports.zeroTrustAccessGroupIncludeToHclTerraform = zeroTrustAccessGroupIncludeToHclTerraform;
exports.zeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform = zeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform;
exports.zeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform = zeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform;
exports.zeroTrustAccessGroupRequireAuthContextToTerraform = zeroTrustAccessGroupRequireAuthContextToTerraform;
exports.zeroTrustAccessGroupRequireAuthContextToHclTerraform = zeroTrustAccessGroupRequireAuthContextToHclTerraform;
exports.zeroTrustAccessGroupRequireAuthMethodToTerraform = zeroTrustAccessGroupRequireAuthMethodToTerraform;
exports.zeroTrustAccessGroupRequireAuthMethodToHclTerraform = zeroTrustAccessGroupRequireAuthMethodToHclTerraform;
exports.zeroTrustAccessGroupRequireAzureAdToTerraform = zeroTrustAccessGroupRequireAzureAdToTerraform;
exports.zeroTrustAccessGroupRequireAzureAdToHclTerraform = zeroTrustAccessGroupRequireAzureAdToHclTerraform;
exports.zeroTrustAccessGroupRequireCertificateToTerraform = zeroTrustAccessGroupRequireCertificateToTerraform;
exports.zeroTrustAccessGroupRequireCertificateToHclTerraform = zeroTrustAccessGroupRequireCertificateToHclTerraform;
exports.zeroTrustAccessGroupRequireCommonNameToTerraform = zeroTrustAccessGroupRequireCommonNameToTerraform;
exports.zeroTrustAccessGroupRequireCommonNameToHclTerraform = zeroTrustAccessGroupRequireCommonNameToHclTerraform;
exports.zeroTrustAccessGroupRequireDevicePostureToTerraform = zeroTrustAccessGroupRequireDevicePostureToTerraform;
exports.zeroTrustAccessGroupRequireDevicePostureToHclTerraform = zeroTrustAccessGroupRequireDevicePostureToHclTerraform;
exports.zeroTrustAccessGroupRequireEmailToTerraform = zeroTrustAccessGroupRequireEmailToTerraform;
exports.zeroTrustAccessGroupRequireEmailToHclTerraform = zeroTrustAccessGroupRequireEmailToHclTerraform;
exports.zeroTrustAccessGroupRequireEmailDomainToTerraform = zeroTrustAccessGroupRequireEmailDomainToTerraform;
exports.zeroTrustAccessGroupRequireEmailDomainToHclTerraform = zeroTrustAccessGroupRequireEmailDomainToHclTerraform;
exports.zeroTrustAccessGroupRequireEmailListStructToTerraform = zeroTrustAccessGroupRequireEmailListStructToTerraform;
exports.zeroTrustAccessGroupRequireEmailListStructToHclTerraform = zeroTrustAccessGroupRequireEmailListStructToHclTerraform;
exports.zeroTrustAccessGroupRequireEveryoneToTerraform = zeroTrustAccessGroupRequireEveryoneToTerraform;
exports.zeroTrustAccessGroupRequireEveryoneToHclTerraform = zeroTrustAccessGroupRequireEveryoneToHclTerraform;
exports.zeroTrustAccessGroupRequireExternalEvaluationToTerraform = zeroTrustAccessGroupRequireExternalEvaluationToTerraform;
exports.zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform = zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform;
exports.zeroTrustAccessGroupRequireGeoToTerraform = zeroTrustAccessGroupRequireGeoToTerraform;
exports.zeroTrustAccessGroupRequireGeoToHclTerraform = zeroTrustAccessGroupRequireGeoToHclTerraform;
exports.zeroTrustAccessGroupRequireGithubOrganizationToTerraform = zeroTrustAccessGroupRequireGithubOrganizationToTerraform;
exports.zeroTrustAccessGroupRequireGithubOrganizationToHclTerraform = zeroTrustAccessGroupRequireGithubOrganizationToHclTerraform;
exports.zeroTrustAccessGroupRequireGroupToTerraform = zeroTrustAccessGroupRequireGroupToTerraform;
exports.zeroTrustAccessGroupRequireGroupToHclTerraform = zeroTrustAccessGroupRequireGroupToHclTerraform;
exports.zeroTrustAccessGroupRequireGsuiteToTerraform = zeroTrustAccessGroupRequireGsuiteToTerraform;
exports.zeroTrustAccessGroupRequireGsuiteToHclTerraform = zeroTrustAccessGroupRequireGsuiteToHclTerraform;
exports.zeroTrustAccessGroupRequireIpToTerraform = zeroTrustAccessGroupRequireIpToTerraform;
exports.zeroTrustAccessGroupRequireIpToHclTerraform = zeroTrustAccessGroupRequireIpToHclTerraform;
exports.zeroTrustAccessGroupRequireIpListStructToTerraform = zeroTrustAccessGroupRequireIpListStructToTerraform;
exports.zeroTrustAccessGroupRequireIpListStructToHclTerraform = zeroTrustAccessGroupRequireIpListStructToHclTerraform;
exports.zeroTrustAccessGroupRequireLinkedAppTokenToTerraform = zeroTrustAccessGroupRequireLinkedAppTokenToTerraform;
exports.zeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform = zeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform;
exports.zeroTrustAccessGroupRequireLoginMethodToTerraform = zeroTrustAccessGroupRequireLoginMethodToTerraform;
exports.zeroTrustAccessGroupRequireLoginMethodToHclTerraform = zeroTrustAccessGroupRequireLoginMethodToHclTerraform;
exports.zeroTrustAccessGroupRequireOidcToTerraform = zeroTrustAccessGroupRequireOidcToTerraform;
exports.zeroTrustAccessGroupRequireOidcToHclTerraform = zeroTrustAccessGroupRequireOidcToHclTerraform;
exports.zeroTrustAccessGroupRequireOktaToTerraform = zeroTrustAccessGroupRequireOktaToTerraform;
exports.zeroTrustAccessGroupRequireOktaToHclTerraform = zeroTrustAccessGroupRequireOktaToHclTerraform;
exports.zeroTrustAccessGroupRequireSamlToTerraform = zeroTrustAccessGroupRequireSamlToTerraform;
exports.zeroTrustAccessGroupRequireSamlToHclTerraform = zeroTrustAccessGroupRequireSamlToHclTerraform;
exports.zeroTrustAccessGroupRequireServiceTokenToTerraform = zeroTrustAccessGroupRequireServiceTokenToTerraform;
exports.zeroTrustAccessGroupRequireServiceTokenToHclTerraform = zeroTrustAccessGroupRequireServiceTokenToHclTerraform;
exports.zeroTrustAccessGroupRequireUserRiskScoreToTerraform = zeroTrustAccessGroupRequireUserRiskScoreToTerraform;
exports.zeroTrustAccessGroupRequireUserRiskScoreToHclTerraform = zeroTrustAccessGroupRequireUserRiskScoreToHclTerraform;
exports.zeroTrustAccessGroupRequireToTerraform = zeroTrustAccessGroupRequireToTerraform;
exports.zeroTrustAccessGroupRequireToHclTerraform = zeroTrustAccessGroupRequireToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference = ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference;
function zeroTrustAccessGroupExcludeAuthContextToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeAuthContextToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthContextOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthContextOutputReference.prototype, "acId", {
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        set: function (value) {
            this._acId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthContextOutputReference.prototype, "acIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthContextOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthContextOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthContextOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthContextOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeAuthContextOutputReference = ZeroTrustAccessGroupExcludeAuthContextOutputReference;
function zeroTrustAccessGroupExcludeAuthMethodToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeAuthMethodToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthMethodOutputReference.prototype, "authMethod", {
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        set: function (value) {
            this._authMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAuthMethodOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeAuthMethodOutputReference = ZeroTrustAccessGroupExcludeAuthMethodOutputReference;
function zeroTrustAccessGroupExcludeAzureAdToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeAzureAdToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeAzureAdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeAzureAdOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAzureAdOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAzureAdOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeAzureAdOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeAzureAdOutputReference = ZeroTrustAccessGroupExcludeAzureAdOutputReference;
function zeroTrustAccessGroupExcludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupExcludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupExcludeCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeCertificateOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupExcludeCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeCertificateOutputReference = ZeroTrustAccessGroupExcludeCertificateOutputReference;
function zeroTrustAccessGroupExcludeCommonNameToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeCommonNameToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeCommonNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeCommonNameOutputReference.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeCommonNameOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeCommonNameOutputReference = ZeroTrustAccessGroupExcludeCommonNameOutputReference;
function zeroTrustAccessGroupExcludeDevicePostureToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeDevicePostureToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeDevicePostureOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeDevicePostureOutputReference.prototype, "integrationUid", {
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        set: function (value) {
            this._integrationUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeDevicePostureOutputReference.prototype, "integrationUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeDevicePostureOutputReference = ZeroTrustAccessGroupExcludeDevicePostureOutputReference;
function zeroTrustAccessGroupExcludeEmailToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeEmailToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeEmailOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeEmailOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeEmailOutputReference = ZeroTrustAccessGroupExcludeEmailOutputReference;
function zeroTrustAccessGroupExcludeEmailDomainToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeEmailDomainToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailDomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailDomainOutputReference.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailDomainOutputReference.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeEmailDomainOutputReference = ZeroTrustAccessGroupExcludeEmailDomainOutputReference;
function zeroTrustAccessGroupExcludeEmailListStructToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeEmailListStructToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeEmailListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeEmailListStructOutputReference = ZeroTrustAccessGroupExcludeEmailListStructOutputReference;
function zeroTrustAccessGroupExcludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupExcludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupExcludeEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeEveryoneOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupExcludeEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeEveryoneOutputReference = ZeroTrustAccessGroupExcludeEveryoneOutputReference;
function zeroTrustAccessGroupExcludeExternalEvaluationToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        set: function (value) {
            this._evaluateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.prototype, "evaluateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.prototype, "keysUrl", {
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        set: function (value) {
            this._keysUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.prototype, "keysUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keysUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference = ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference;
function zeroTrustAccessGroupExcludeGeoToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeGeoToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeGeoOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeGeoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeGeoOutputReference.prototype, "countryCode", {
        get: function () {
            return this.getStringAttribute('country_code');
        },
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGeoOutputReference.prototype, "countryCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryCode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeGeoOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeGeoOutputReference = ZeroTrustAccessGroupExcludeGeoOutputReference;
function zeroTrustAccessGroupExcludeGithubOrganizationToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype, "team", {
        get: function () {
            return this.getStringAttribute('team');
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype.resetTeam = function () {
        this._team = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference.prototype, "teamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._team;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference = ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference;
function zeroTrustAccessGroupExcludeGroupToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeGroupToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeGroupOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeGroupOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGroupOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeGroupOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeGroupOutputReference = ZeroTrustAccessGroupExcludeGroupOutputReference;
function zeroTrustAccessGroupExcludeGsuiteToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeGsuiteToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeGsuiteOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeGsuiteOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGsuiteOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGsuiteOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeGsuiteOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeGsuiteOutputReference = ZeroTrustAccessGroupExcludeGsuiteOutputReference;
function zeroTrustAccessGroupExcludeIpToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeIpToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeIpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeIpOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeIpOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeIpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeIpOutputReference = ZeroTrustAccessGroupExcludeIpOutputReference;
function zeroTrustAccessGroupExcludeIpListStructToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeIpListStructToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeIpListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeIpListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeIpListStructOutputReference = ZeroTrustAccessGroupExcludeIpListStructOutputReference;
function zeroTrustAccessGroupExcludeLinkedAppTokenToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference.prototype, "appUid", {
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        set: function (value) {
            this._appUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference.prototype, "appUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference = ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference;
function zeroTrustAccessGroupExcludeLoginMethodToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeLoginMethodToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeLoginMethodOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeLoginMethodOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeLoginMethodOutputReference = ZeroTrustAccessGroupExcludeLoginMethodOutputReference;
function zeroTrustAccessGroupExcludeOidcToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeOidcToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeOidcOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeOidcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeOidcOutputReference.prototype, "claimName", {
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        set: function (value) {
            this._claimName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOidcOutputReference.prototype, "claimNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOidcOutputReference.prototype, "claimValue", {
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        set: function (value) {
            this._claimValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOidcOutputReference.prototype, "claimValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOidcOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOidcOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeOidcOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeOidcOutputReference = ZeroTrustAccessGroupExcludeOidcOutputReference;
function zeroTrustAccessGroupExcludeOktaToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeOktaToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeOktaOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeOktaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeOktaOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOktaOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOktaOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOktaOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeOktaOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeOktaOutputReference = ZeroTrustAccessGroupExcludeOktaOutputReference;
function zeroTrustAccessGroupExcludeSamlToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeSamlToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeSamlOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeSamlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeSamlOutputReference.prototype, "attributeName", {
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        set: function (value) {
            this._attributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeSamlOutputReference.prototype, "attributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeSamlOutputReference.prototype, "attributeValue", {
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        set: function (value) {
            this._attributeValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeSamlOutputReference.prototype, "attributeValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeSamlOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeSamlOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeSamlOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeSamlOutputReference = ZeroTrustAccessGroupExcludeSamlOutputReference;
function zeroTrustAccessGroupExcludeServiceTokenToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeServiceTokenToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeServiceTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeServiceTokenOutputReference.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeServiceTokenOutputReference.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeServiceTokenOutputReference = ZeroTrustAccessGroupExcludeServiceTokenOutputReference;
function zeroTrustAccessGroupExcludeUserRiskScoreToTerraform(struct) {
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
function zeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform(struct) {
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
var ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        set: function (value) {
            this._userRiskScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference = ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference;
function zeroTrustAccessGroupExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessGroupExcludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessGroupExcludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessGroupExcludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessGroupExcludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessGroupExcludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessGroupExcludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessGroupExcludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessGroupExcludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessGroupExcludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessGroupExcludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessGroupExcludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessGroupExcludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessGroupExcludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessGroupExcludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessGroupExcludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessGroupExcludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessGroupExcludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessGroupExcludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessGroupExcludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessGroupExcludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessGroupExcludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessGroupExcludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessGroupExcludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessGroupExcludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
function zeroTrustAccessGroupExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessGroupExcludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessGroupExcludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessGroupExcludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessGroupExcludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessGroupExcludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessGroupExcludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessGroupExcludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessGroupExcludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessGroupExcludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessGroupExcludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessGroupExcludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessGroupExcludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessGroupExcludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGsuite",
        },
        ip: {
            value: zeroTrustAccessGroupExcludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeIp",
        },
        ip_list: {
            value: zeroTrustAccessGroupExcludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessGroupExcludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessGroupExcludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeOidc",
        },
        okta: {
            value: zeroTrustAccessGroupExcludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeOkta",
        },
        saml: {
            value: zeroTrustAccessGroupExcludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeSaml",
        },
        service_token: {
            value: zeroTrustAccessGroupExcludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessGroupExcludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessGroupExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: false, optional: true, required: false
        _this._anyValidServiceToken = new ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: false, optional: true, required: false
        _this._authContext = new ZeroTrustAccessGroupExcludeAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: false, optional: true, required: false
        _this._authMethod = new ZeroTrustAccessGroupExcludeAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: false, optional: true, required: false
        _this._azureAd = new ZeroTrustAccessGroupExcludeAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: false, optional: true, required: false
        _this._certificate = new ZeroTrustAccessGroupExcludeCertificateOutputReference(_this, "certificate");
        // common_name - computed: false, optional: true, required: false
        _this._commonName = new ZeroTrustAccessGroupExcludeCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: false, optional: true, required: false
        _this._devicePosture = new ZeroTrustAccessGroupExcludeDevicePostureOutputReference(_this, "device_posture");
        // email - computed: false, optional: true, required: false
        _this._email = new ZeroTrustAccessGroupExcludeEmailOutputReference(_this, "email");
        // email_domain - computed: false, optional: true, required: false
        _this._emailDomain = new ZeroTrustAccessGroupExcludeEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: false, optional: true, required: false
        _this._emailList = new ZeroTrustAccessGroupExcludeEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: false, optional: true, required: false
        _this._everyone = new ZeroTrustAccessGroupExcludeEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: false, optional: true, required: false
        _this._externalEvaluation = new ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: false, optional: true, required: false
        _this._geo = new ZeroTrustAccessGroupExcludeGeoOutputReference(_this, "geo");
        // github_organization - computed: false, optional: true, required: false
        _this._githubOrganization = new ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: false, optional: true, required: false
        _this._group = new ZeroTrustAccessGroupExcludeGroupOutputReference(_this, "group");
        // gsuite - computed: false, optional: true, required: false
        _this._gsuite = new ZeroTrustAccessGroupExcludeGsuiteOutputReference(_this, "gsuite");
        // ip - computed: false, optional: true, required: false
        _this._ip = new ZeroTrustAccessGroupExcludeIpOutputReference(_this, "ip");
        // ip_list - computed: false, optional: true, required: false
        _this._ipList = new ZeroTrustAccessGroupExcludeIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: false, optional: true, required: false
        _this._linkedAppToken = new ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: false, optional: true, required: false
        _this._loginMethod = new ZeroTrustAccessGroupExcludeLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: false, optional: true, required: false
        _this._oidc = new ZeroTrustAccessGroupExcludeOidcOutputReference(_this, "oidc");
        // okta - computed: false, optional: true, required: false
        _this._okta = new ZeroTrustAccessGroupExcludeOktaOutputReference(_this, "okta");
        // saml - computed: false, optional: true, required: false
        _this._saml = new ZeroTrustAccessGroupExcludeSamlOutputReference(_this, "saml");
        // service_token - computed: false, optional: true, required: false
        _this._serviceToken = new ZeroTrustAccessGroupExcludeServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: false, optional: true, required: false
        _this._userRiskScore = new ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putAnyValidServiceToken = function (value) {
        this._anyValidServiceToken.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetAnyValidServiceToken = function () {
        this._anyValidServiceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "anyValidServiceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._anyValidServiceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putAuthContext = function (value) {
        this._authContext.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetAuthContext = function () {
        this._authContext.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "authContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authContext.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putAuthMethod = function (value) {
        this._authMethod.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetAuthMethod = function () {
        this._authMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putAzureAd = function (value) {
        this._azureAd.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetAzureAd = function () {
        this._azureAd.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "azureAdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azureAd.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putCertificate = function (value) {
        this._certificate.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetCertificate = function () {
        this._certificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putCommonName = function (value) {
        this._commonName.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetCommonName = function () {
        this._commonName.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putDevicePosture = function (value) {
        this._devicePosture.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetDevicePosture = function () {
        this._devicePosture.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "devicePostureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devicePosture.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putEmail = function (value) {
        this._email.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetEmail = function () {
        this._email.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putEmailDomain = function (value) {
        this._emailDomain.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetEmailDomain = function () {
        this._emailDomain.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "emailDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailDomain.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putEmailList = function (value) {
        this._emailList.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetEmailList = function () {
        this._emailList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "emailListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putEveryone = function (value) {
        this._everyone.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetEveryone = function () {
        this._everyone.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "everyoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._everyone.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putExternalEvaluation = function (value) {
        this._externalEvaluation.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetExternalEvaluation = function () {
        this._externalEvaluation.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "externalEvaluationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEvaluation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putGeo = function (value) {
        this._geo.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetGeo = function () {
        this._geo.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putGithubOrganization = function (value) {
        this._githubOrganization.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetGithubOrganization = function () {
        this._githubOrganization.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "githubOrganizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOrganization.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putGroup = function (value) {
        this._group.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetGroup = function () {
        this._group.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putGsuite = function (value) {
        this._gsuite.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetGsuite = function () {
        this._gsuite.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "gsuiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gsuite.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putIp = function (value) {
        this._ip.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetIp = function () {
        this._ip.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putIpList = function (value) {
        this._ipList.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetIpList = function () {
        this._ipList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "ipListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putLinkedAppToken = function (value) {
        this._linkedAppToken.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetLinkedAppToken = function () {
        this._linkedAppToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "linkedAppTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._linkedAppToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putLoginMethod = function (value) {
        this._loginMethod.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetLoginMethod = function () {
        this._loginMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "loginMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loginMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putOidc = function (value) {
        this._oidc.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetOidc = function () {
        this._oidc.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "oidcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putOkta = function (value) {
        this._okta.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetOkta = function () {
        this._okta.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "oktaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okta.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putSaml = function (value) {
        this._saml.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetSaml = function () {
        this._saml.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "samlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saml.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putServiceToken = function (value) {
        this._serviceToken.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetServiceToken = function () {
        this._serviceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "serviceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupExcludeOutputReference.prototype.putUserRiskScore = function (value) {
        this._userRiskScore.internalValue = value;
    };
    ZeroTrustAccessGroupExcludeOutputReference.prototype.resetUserRiskScore = function () {
        this._userRiskScore.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupExcludeOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupExcludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupExcludeOutputReference = ZeroTrustAccessGroupExcludeOutputReference;
var ZeroTrustAccessGroupExcludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessGroupExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessGroupExcludeList.prototype.get = function (index) {
        return new ZeroTrustAccessGroupExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessGroupExcludeList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessGroupExcludeList = ZeroTrustAccessGroupExcludeList;
function zeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference = ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference;
function zeroTrustAccessGroupIncludeAuthContextToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeAuthContextToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthContextOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthContextOutputReference.prototype, "acId", {
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        set: function (value) {
            this._acId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthContextOutputReference.prototype, "acIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthContextOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthContextOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthContextOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthContextOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeAuthContextOutputReference = ZeroTrustAccessGroupIncludeAuthContextOutputReference;
function zeroTrustAccessGroupIncludeAuthMethodToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeAuthMethodToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthMethodOutputReference.prototype, "authMethod", {
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        set: function (value) {
            this._authMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAuthMethodOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeAuthMethodOutputReference = ZeroTrustAccessGroupIncludeAuthMethodOutputReference;
function zeroTrustAccessGroupIncludeAzureAdToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeAzureAdToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeAzureAdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeAzureAdOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAzureAdOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAzureAdOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeAzureAdOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeAzureAdOutputReference = ZeroTrustAccessGroupIncludeAzureAdOutputReference;
function zeroTrustAccessGroupIncludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupIncludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupIncludeCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeCertificateOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupIncludeCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeCertificateOutputReference = ZeroTrustAccessGroupIncludeCertificateOutputReference;
function zeroTrustAccessGroupIncludeCommonNameToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeCommonNameToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeCommonNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeCommonNameOutputReference.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeCommonNameOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeCommonNameOutputReference = ZeroTrustAccessGroupIncludeCommonNameOutputReference;
function zeroTrustAccessGroupIncludeDevicePostureToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeDevicePostureToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeDevicePostureOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeDevicePostureOutputReference.prototype, "integrationUid", {
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        set: function (value) {
            this._integrationUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeDevicePostureOutputReference.prototype, "integrationUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeDevicePostureOutputReference = ZeroTrustAccessGroupIncludeDevicePostureOutputReference;
function zeroTrustAccessGroupIncludeEmailToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeEmailToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeEmailOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeEmailOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeEmailOutputReference = ZeroTrustAccessGroupIncludeEmailOutputReference;
function zeroTrustAccessGroupIncludeEmailDomainToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeEmailDomainToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailDomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailDomainOutputReference.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailDomainOutputReference.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeEmailDomainOutputReference = ZeroTrustAccessGroupIncludeEmailDomainOutputReference;
function zeroTrustAccessGroupIncludeEmailListStructToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeEmailListStructToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeEmailListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeEmailListStructOutputReference = ZeroTrustAccessGroupIncludeEmailListStructOutputReference;
function zeroTrustAccessGroupIncludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupIncludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupIncludeEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeEveryoneOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupIncludeEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeEveryoneOutputReference = ZeroTrustAccessGroupIncludeEveryoneOutputReference;
function zeroTrustAccessGroupIncludeExternalEvaluationToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        set: function (value) {
            this._evaluateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.prototype, "evaluateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.prototype, "keysUrl", {
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        set: function (value) {
            this._keysUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.prototype, "keysUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keysUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference = ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference;
function zeroTrustAccessGroupIncludeGeoToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeGeoToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeGeoOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeGeoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeGeoOutputReference.prototype, "countryCode", {
        get: function () {
            return this.getStringAttribute('country_code');
        },
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGeoOutputReference.prototype, "countryCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryCode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeGeoOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeGeoOutputReference = ZeroTrustAccessGroupIncludeGeoOutputReference;
function zeroTrustAccessGroupIncludeGithubOrganizationToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype, "team", {
        get: function () {
            return this.getStringAttribute('team');
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype.resetTeam = function () {
        this._team = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference.prototype, "teamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._team;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference = ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference;
function zeroTrustAccessGroupIncludeGroupToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeGroupToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeGroupOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeGroupOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGroupOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeGroupOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeGroupOutputReference = ZeroTrustAccessGroupIncludeGroupOutputReference;
function zeroTrustAccessGroupIncludeGsuiteToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeGsuiteToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeGsuiteOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeGsuiteOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGsuiteOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGsuiteOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeGsuiteOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeGsuiteOutputReference = ZeroTrustAccessGroupIncludeGsuiteOutputReference;
function zeroTrustAccessGroupIncludeIpToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeIpToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeIpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeIpOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeIpOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeIpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeIpOutputReference = ZeroTrustAccessGroupIncludeIpOutputReference;
function zeroTrustAccessGroupIncludeIpListStructToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeIpListStructToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeIpListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeIpListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeIpListStructOutputReference = ZeroTrustAccessGroupIncludeIpListStructOutputReference;
function zeroTrustAccessGroupIncludeLinkedAppTokenToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference.prototype, "appUid", {
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        set: function (value) {
            this._appUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference.prototype, "appUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference = ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference;
function zeroTrustAccessGroupIncludeLoginMethodToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeLoginMethodToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeLoginMethodOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeLoginMethodOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeLoginMethodOutputReference = ZeroTrustAccessGroupIncludeLoginMethodOutputReference;
function zeroTrustAccessGroupIncludeOidcToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeOidcToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeOidcOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeOidcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeOidcOutputReference.prototype, "claimName", {
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        set: function (value) {
            this._claimName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOidcOutputReference.prototype, "claimNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOidcOutputReference.prototype, "claimValue", {
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        set: function (value) {
            this._claimValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOidcOutputReference.prototype, "claimValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOidcOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOidcOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeOidcOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeOidcOutputReference = ZeroTrustAccessGroupIncludeOidcOutputReference;
function zeroTrustAccessGroupIncludeOktaToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeOktaToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeOktaOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeOktaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeOktaOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOktaOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOktaOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOktaOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeOktaOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeOktaOutputReference = ZeroTrustAccessGroupIncludeOktaOutputReference;
function zeroTrustAccessGroupIncludeSamlToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeSamlToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeSamlOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeSamlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeSamlOutputReference.prototype, "attributeName", {
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        set: function (value) {
            this._attributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeSamlOutputReference.prototype, "attributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeSamlOutputReference.prototype, "attributeValue", {
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        set: function (value) {
            this._attributeValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeSamlOutputReference.prototype, "attributeValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeSamlOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeSamlOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeSamlOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeSamlOutputReference = ZeroTrustAccessGroupIncludeSamlOutputReference;
function zeroTrustAccessGroupIncludeServiceTokenToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeServiceTokenToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeServiceTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeServiceTokenOutputReference.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeServiceTokenOutputReference.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeServiceTokenOutputReference = ZeroTrustAccessGroupIncludeServiceTokenOutputReference;
function zeroTrustAccessGroupIncludeUserRiskScoreToTerraform(struct) {
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
function zeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform(struct) {
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
var ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        set: function (value) {
            this._userRiskScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference = ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference;
function zeroTrustAccessGroupIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessGroupIncludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessGroupIncludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessGroupIncludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessGroupIncludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessGroupIncludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessGroupIncludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessGroupIncludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessGroupIncludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessGroupIncludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessGroupIncludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessGroupIncludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessGroupIncludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessGroupIncludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessGroupIncludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessGroupIncludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessGroupIncludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessGroupIncludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessGroupIncludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessGroupIncludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessGroupIncludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessGroupIncludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessGroupIncludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessGroupIncludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessGroupIncludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
function zeroTrustAccessGroupIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessGroupIncludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessGroupIncludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessGroupIncludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessGroupIncludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessGroupIncludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessGroupIncludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessGroupIncludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessGroupIncludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessGroupIncludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessGroupIncludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessGroupIncludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessGroupIncludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessGroupIncludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGsuite",
        },
        ip: {
            value: zeroTrustAccessGroupIncludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeIp",
        },
        ip_list: {
            value: zeroTrustAccessGroupIncludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessGroupIncludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessGroupIncludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeOidc",
        },
        okta: {
            value: zeroTrustAccessGroupIncludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeOkta",
        },
        saml: {
            value: zeroTrustAccessGroupIncludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeSaml",
        },
        service_token: {
            value: zeroTrustAccessGroupIncludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessGroupIncludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessGroupIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: false, optional: true, required: false
        _this._anyValidServiceToken = new ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: false, optional: true, required: false
        _this._authContext = new ZeroTrustAccessGroupIncludeAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: false, optional: true, required: false
        _this._authMethod = new ZeroTrustAccessGroupIncludeAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: false, optional: true, required: false
        _this._azureAd = new ZeroTrustAccessGroupIncludeAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: false, optional: true, required: false
        _this._certificate = new ZeroTrustAccessGroupIncludeCertificateOutputReference(_this, "certificate");
        // common_name - computed: false, optional: true, required: false
        _this._commonName = new ZeroTrustAccessGroupIncludeCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: false, optional: true, required: false
        _this._devicePosture = new ZeroTrustAccessGroupIncludeDevicePostureOutputReference(_this, "device_posture");
        // email - computed: false, optional: true, required: false
        _this._email = new ZeroTrustAccessGroupIncludeEmailOutputReference(_this, "email");
        // email_domain - computed: false, optional: true, required: false
        _this._emailDomain = new ZeroTrustAccessGroupIncludeEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: false, optional: true, required: false
        _this._emailList = new ZeroTrustAccessGroupIncludeEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: false, optional: true, required: false
        _this._everyone = new ZeroTrustAccessGroupIncludeEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: false, optional: true, required: false
        _this._externalEvaluation = new ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: false, optional: true, required: false
        _this._geo = new ZeroTrustAccessGroupIncludeGeoOutputReference(_this, "geo");
        // github_organization - computed: false, optional: true, required: false
        _this._githubOrganization = new ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: false, optional: true, required: false
        _this._group = new ZeroTrustAccessGroupIncludeGroupOutputReference(_this, "group");
        // gsuite - computed: false, optional: true, required: false
        _this._gsuite = new ZeroTrustAccessGroupIncludeGsuiteOutputReference(_this, "gsuite");
        // ip - computed: false, optional: true, required: false
        _this._ip = new ZeroTrustAccessGroupIncludeIpOutputReference(_this, "ip");
        // ip_list - computed: false, optional: true, required: false
        _this._ipList = new ZeroTrustAccessGroupIncludeIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: false, optional: true, required: false
        _this._linkedAppToken = new ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: false, optional: true, required: false
        _this._loginMethod = new ZeroTrustAccessGroupIncludeLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: false, optional: true, required: false
        _this._oidc = new ZeroTrustAccessGroupIncludeOidcOutputReference(_this, "oidc");
        // okta - computed: false, optional: true, required: false
        _this._okta = new ZeroTrustAccessGroupIncludeOktaOutputReference(_this, "okta");
        // saml - computed: false, optional: true, required: false
        _this._saml = new ZeroTrustAccessGroupIncludeSamlOutputReference(_this, "saml");
        // service_token - computed: false, optional: true, required: false
        _this._serviceToken = new ZeroTrustAccessGroupIncludeServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: false, optional: true, required: false
        _this._userRiskScore = new ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putAnyValidServiceToken = function (value) {
        this._anyValidServiceToken.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetAnyValidServiceToken = function () {
        this._anyValidServiceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "anyValidServiceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._anyValidServiceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putAuthContext = function (value) {
        this._authContext.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetAuthContext = function () {
        this._authContext.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "authContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authContext.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putAuthMethod = function (value) {
        this._authMethod.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetAuthMethod = function () {
        this._authMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putAzureAd = function (value) {
        this._azureAd.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetAzureAd = function () {
        this._azureAd.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "azureAdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azureAd.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putCertificate = function (value) {
        this._certificate.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetCertificate = function () {
        this._certificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putCommonName = function (value) {
        this._commonName.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetCommonName = function () {
        this._commonName.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putDevicePosture = function (value) {
        this._devicePosture.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetDevicePosture = function () {
        this._devicePosture.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "devicePostureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devicePosture.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putEmail = function (value) {
        this._email.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetEmail = function () {
        this._email.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putEmailDomain = function (value) {
        this._emailDomain.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetEmailDomain = function () {
        this._emailDomain.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "emailDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailDomain.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putEmailList = function (value) {
        this._emailList.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetEmailList = function () {
        this._emailList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "emailListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putEveryone = function (value) {
        this._everyone.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetEveryone = function () {
        this._everyone.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "everyoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._everyone.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putExternalEvaluation = function (value) {
        this._externalEvaluation.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetExternalEvaluation = function () {
        this._externalEvaluation.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "externalEvaluationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEvaluation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putGeo = function (value) {
        this._geo.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetGeo = function () {
        this._geo.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putGithubOrganization = function (value) {
        this._githubOrganization.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetGithubOrganization = function () {
        this._githubOrganization.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "githubOrganizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOrganization.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putGroup = function (value) {
        this._group.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetGroup = function () {
        this._group.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putGsuite = function (value) {
        this._gsuite.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetGsuite = function () {
        this._gsuite.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "gsuiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gsuite.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putIp = function (value) {
        this._ip.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetIp = function () {
        this._ip.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putIpList = function (value) {
        this._ipList.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetIpList = function () {
        this._ipList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "ipListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putLinkedAppToken = function (value) {
        this._linkedAppToken.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetLinkedAppToken = function () {
        this._linkedAppToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "linkedAppTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._linkedAppToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putLoginMethod = function (value) {
        this._loginMethod.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetLoginMethod = function () {
        this._loginMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "loginMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loginMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putOidc = function (value) {
        this._oidc.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetOidc = function () {
        this._oidc.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "oidcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putOkta = function (value) {
        this._okta.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetOkta = function () {
        this._okta.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "oktaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okta.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putSaml = function (value) {
        this._saml.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetSaml = function () {
        this._saml.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "samlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saml.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putServiceToken = function (value) {
        this._serviceToken.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetServiceToken = function () {
        this._serviceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "serviceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupIncludeOutputReference.prototype.putUserRiskScore = function (value) {
        this._userRiskScore.internalValue = value;
    };
    ZeroTrustAccessGroupIncludeOutputReference.prototype.resetUserRiskScore = function () {
        this._userRiskScore.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupIncludeOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupIncludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupIncludeOutputReference = ZeroTrustAccessGroupIncludeOutputReference;
var ZeroTrustAccessGroupIncludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessGroupIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessGroupIncludeList.prototype.get = function (index) {
        return new ZeroTrustAccessGroupIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessGroupIncludeList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessGroupIncludeList = ZeroTrustAccessGroupIncludeList;
function zeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference = ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference;
function zeroTrustAccessGroupRequireAuthContextToTerraform(struct) {
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
function zeroTrustAccessGroupRequireAuthContextToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireAuthContextOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireAuthContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireAuthContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthContextOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthContextOutputReference.prototype, "acId", {
        get: function () {
            return this.getStringAttribute('ac_id');
        },
        set: function (value) {
            this._acId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthContextOutputReference.prototype, "acIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthContextOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthContextOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthContextOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthContextOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireAuthContextOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireAuthContextOutputReference = ZeroTrustAccessGroupRequireAuthContextOutputReference;
function zeroTrustAccessGroupRequireAuthMethodToTerraform(struct) {
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
function zeroTrustAccessGroupRequireAuthMethodToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireAuthMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireAuthMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireAuthMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthMethodOutputReference.prototype, "authMethod", {
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        set: function (value) {
            this._authMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAuthMethodOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireAuthMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireAuthMethodOutputReference = ZeroTrustAccessGroupRequireAuthMethodOutputReference;
function zeroTrustAccessGroupRequireAzureAdToTerraform(struct) {
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
function zeroTrustAccessGroupRequireAzureAdToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireAzureAdOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireAzureAdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireAzureAdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireAzureAdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireAzureAdOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAzureAdOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAzureAdOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireAzureAdOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireAzureAdOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireAzureAdOutputReference = ZeroTrustAccessGroupRequireAzureAdOutputReference;
function zeroTrustAccessGroupRequireCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupRequireCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupRequireCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireCertificateOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupRequireCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireCertificateOutputReference = ZeroTrustAccessGroupRequireCertificateOutputReference;
function zeroTrustAccessGroupRequireCommonNameToTerraform(struct) {
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
function zeroTrustAccessGroupRequireCommonNameToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireCommonNameOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireCommonNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireCommonNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireCommonNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireCommonNameOutputReference.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireCommonNameOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireCommonNameOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireCommonNameOutputReference = ZeroTrustAccessGroupRequireCommonNameOutputReference;
function zeroTrustAccessGroupRequireDevicePostureToTerraform(struct) {
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
function zeroTrustAccessGroupRequireDevicePostureToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireDevicePostureOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireDevicePostureOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireDevicePostureOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireDevicePostureOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireDevicePostureOutputReference.prototype, "integrationUid", {
        get: function () {
            return this.getStringAttribute('integration_uid');
        },
        set: function (value) {
            this._integrationUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireDevicePostureOutputReference.prototype, "integrationUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireDevicePostureOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireDevicePostureOutputReference = ZeroTrustAccessGroupRequireDevicePostureOutputReference;
function zeroTrustAccessGroupRequireEmailToTerraform(struct) {
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
function zeroTrustAccessGroupRequireEmailToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireEmailOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireEmailOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireEmailOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireEmailOutputReference = ZeroTrustAccessGroupRequireEmailOutputReference;
function zeroTrustAccessGroupRequireEmailDomainToTerraform(struct) {
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
function zeroTrustAccessGroupRequireEmailDomainToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireEmailDomainOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireEmailDomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireEmailDomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailDomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailDomainOutputReference.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailDomainOutputReference.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireEmailDomainOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireEmailDomainOutputReference = ZeroTrustAccessGroupRequireEmailDomainOutputReference;
function zeroTrustAccessGroupRequireEmailListStructToTerraform(struct) {
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
function zeroTrustAccessGroupRequireEmailListStructToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireEmailListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireEmailListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireEmailListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireEmailListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireEmailListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireEmailListStructOutputReference = ZeroTrustAccessGroupRequireEmailListStructOutputReference;
function zeroTrustAccessGroupRequireEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustAccessGroupRequireEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustAccessGroupRequireEveryoneOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireEveryoneOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireEveryoneOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireEveryoneOutputReference.prototype, "internalValue", {
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
    return ZeroTrustAccessGroupRequireEveryoneOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireEveryoneOutputReference = ZeroTrustAccessGroupRequireEveryoneOutputReference;
function zeroTrustAccessGroupRequireExternalEvaluationToTerraform(struct) {
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
function zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireExternalEvaluationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireExternalEvaluationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireExternalEvaluationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.prototype, "evaluateUrl", {
        get: function () {
            return this.getStringAttribute('evaluate_url');
        },
        set: function (value) {
            this._evaluateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.prototype, "evaluateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._evaluateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.prototype, "keysUrl", {
        get: function () {
            return this.getStringAttribute('keys_url');
        },
        set: function (value) {
            this._keysUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.prototype, "keysUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keysUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireExternalEvaluationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference = ZeroTrustAccessGroupRequireExternalEvaluationOutputReference;
function zeroTrustAccessGroupRequireGeoToTerraform(struct) {
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
function zeroTrustAccessGroupRequireGeoToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireGeoOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireGeoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireGeoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireGeoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireGeoOutputReference.prototype, "countryCode", {
        get: function () {
            return this.getStringAttribute('country_code');
        },
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGeoOutputReference.prototype, "countryCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryCode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireGeoOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireGeoOutputReference = ZeroTrustAccessGroupRequireGeoOutputReference;
function zeroTrustAccessGroupRequireGithubOrganizationToTerraform(struct) {
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
function zeroTrustAccessGroupRequireGithubOrganizationToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireGithubOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireGithubOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype, "team", {
        get: function () {
            return this.getStringAttribute('team');
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype.resetTeam = function () {
        this._team = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireGithubOrganizationOutputReference.prototype, "teamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._team;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireGithubOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireGithubOrganizationOutputReference = ZeroTrustAccessGroupRequireGithubOrganizationOutputReference;
function zeroTrustAccessGroupRequireGroupToTerraform(struct) {
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
function zeroTrustAccessGroupRequireGroupToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireGroupOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireGroupOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireGroupOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireGroupOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGroupOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireGroupOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireGroupOutputReference = ZeroTrustAccessGroupRequireGroupOutputReference;
function zeroTrustAccessGroupRequireGsuiteToTerraform(struct) {
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
function zeroTrustAccessGroupRequireGsuiteToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireGsuiteOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireGsuiteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireGsuiteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireGsuiteOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireGsuiteOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGsuiteOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGsuiteOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireGsuiteOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireGsuiteOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireGsuiteOutputReference = ZeroTrustAccessGroupRequireGsuiteOutputReference;
function zeroTrustAccessGroupRequireIpToTerraform(struct) {
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
function zeroTrustAccessGroupRequireIpToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireIpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireIpOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireIpOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireIpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireIpOutputReference = ZeroTrustAccessGroupRequireIpOutputReference;
function zeroTrustAccessGroupRequireIpListStructToTerraform(struct) {
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
function zeroTrustAccessGroupRequireIpListStructToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireIpListStructOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireIpListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireIpListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireIpListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireIpListStructOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireIpListStructOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireIpListStructOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireIpListStructOutputReference = ZeroTrustAccessGroupRequireIpListStructOutputReference;
function zeroTrustAccessGroupRequireLinkedAppTokenToTerraform(struct) {
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
function zeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference.prototype, "appUid", {
        get: function () {
            return this.getStringAttribute('app_uid');
        },
        set: function (value) {
            this._appUid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference.prototype, "appUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appUid;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference = ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference;
function zeroTrustAccessGroupRequireLoginMethodToTerraform(struct) {
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
function zeroTrustAccessGroupRequireLoginMethodToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireLoginMethodOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireLoginMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireLoginMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireLoginMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireLoginMethodOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireLoginMethodOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireLoginMethodOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireLoginMethodOutputReference = ZeroTrustAccessGroupRequireLoginMethodOutputReference;
function zeroTrustAccessGroupRequireOidcToTerraform(struct) {
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
function zeroTrustAccessGroupRequireOidcToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireOidcOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireOidcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireOidcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireOidcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireOidcOutputReference.prototype, "claimName", {
        get: function () {
            return this.getStringAttribute('claim_name');
        },
        set: function (value) {
            this._claimName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOidcOutputReference.prototype, "claimNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOidcOutputReference.prototype, "claimValue", {
        get: function () {
            return this.getStringAttribute('claim_value');
        },
        set: function (value) {
            this._claimValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOidcOutputReference.prototype, "claimValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOidcOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOidcOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireOidcOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireOidcOutputReference = ZeroTrustAccessGroupRequireOidcOutputReference;
function zeroTrustAccessGroupRequireOktaToTerraform(struct) {
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
function zeroTrustAccessGroupRequireOktaToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireOktaOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireOktaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireOktaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireOktaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireOktaOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOktaOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOktaOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOktaOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireOktaOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireOktaOutputReference = ZeroTrustAccessGroupRequireOktaOutputReference;
function zeroTrustAccessGroupRequireSamlToTerraform(struct) {
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
function zeroTrustAccessGroupRequireSamlToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireSamlOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireSamlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireSamlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireSamlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireSamlOutputReference.prototype, "attributeName", {
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        set: function (value) {
            this._attributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireSamlOutputReference.prototype, "attributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireSamlOutputReference.prototype, "attributeValue", {
        get: function () {
            return this.getStringAttribute('attribute_value');
        },
        set: function (value) {
            this._attributeValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireSamlOutputReference.prototype, "attributeValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireSamlOutputReference.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireSamlOutputReference.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireSamlOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireSamlOutputReference = ZeroTrustAccessGroupRequireSamlOutputReference;
function zeroTrustAccessGroupRequireServiceTokenToTerraform(struct) {
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
function zeroTrustAccessGroupRequireServiceTokenToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireServiceTokenOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireServiceTokenOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireServiceTokenOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireServiceTokenOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireServiceTokenOutputReference.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireServiceTokenOutputReference.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireServiceTokenOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireServiceTokenOutputReference = ZeroTrustAccessGroupRequireServiceTokenOutputReference;
function zeroTrustAccessGroupRequireUserRiskScoreToTerraform(struct) {
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
function zeroTrustAccessGroupRequireUserRiskScoreToHclTerraform(struct) {
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
var ZeroTrustAccessGroupRequireUserRiskScoreOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireUserRiskScoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessGroupRequireUserRiskScoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireUserRiskScoreOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireUserRiskScoreOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this.getListAttribute('user_risk_score');
        },
        set: function (value) {
            this._userRiskScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireUserRiskScoreOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireUserRiskScoreOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireUserRiskScoreOutputReference = ZeroTrustAccessGroupRequireUserRiskScoreOutputReference;
function zeroTrustAccessGroupRequireToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessGroupRequireAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessGroupRequireAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessGroupRequireAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessGroupRequireCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessGroupRequireCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessGroupRequireDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessGroupRequireEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessGroupRequireEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessGroupRequireEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessGroupRequireEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessGroupRequireExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessGroupRequireGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessGroupRequireGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessGroupRequireGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessGroupRequireGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessGroupRequireIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessGroupRequireIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessGroupRequireLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessGroupRequireLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessGroupRequireOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessGroupRequireOktaToTerraform(struct.okta),
        saml: zeroTrustAccessGroupRequireSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessGroupRequireServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessGroupRequireUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
function zeroTrustAccessGroupRequireToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessGroupRequireAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessGroupRequireAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessGroupRequireAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAzureAd",
        },
        certificate: {
            value: zeroTrustAccessGroupRequireCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireCertificate",
        },
        common_name: {
            value: zeroTrustAccessGroupRequireCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireCommonName",
        },
        device_posture: {
            value: zeroTrustAccessGroupRequireDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireDevicePosture",
        },
        email: {
            value: zeroTrustAccessGroupRequireEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEmail",
        },
        email_domain: {
            value: zeroTrustAccessGroupRequireEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessGroupRequireEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessGroupRequireEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessGroupRequireGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGeo",
        },
        github_organization: {
            value: zeroTrustAccessGroupRequireGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGithubOrganization",
        },
        group: {
            value: zeroTrustAccessGroupRequireGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGroup",
        },
        gsuite: {
            value: zeroTrustAccessGroupRequireGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGsuite",
        },
        ip: {
            value: zeroTrustAccessGroupRequireIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireIp",
        },
        ip_list: {
            value: zeroTrustAccessGroupRequireIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessGroupRequireLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessGroupRequireOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireOidc",
        },
        okta: {
            value: zeroTrustAccessGroupRequireOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireOkta",
        },
        saml: {
            value: zeroTrustAccessGroupRequireSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireSaml",
        },
        service_token: {
            value: zeroTrustAccessGroupRequireServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessGroupRequireUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessGroupRequireOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessGroupRequireOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // any_valid_service_token - computed: false, optional: true, required: false
        _this._anyValidServiceToken = new ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference(_this, "any_valid_service_token");
        // auth_context - computed: false, optional: true, required: false
        _this._authContext = new ZeroTrustAccessGroupRequireAuthContextOutputReference(_this, "auth_context");
        // auth_method - computed: false, optional: true, required: false
        _this._authMethod = new ZeroTrustAccessGroupRequireAuthMethodOutputReference(_this, "auth_method");
        // azure_ad - computed: false, optional: true, required: false
        _this._azureAd = new ZeroTrustAccessGroupRequireAzureAdOutputReference(_this, "azure_ad");
        // certificate - computed: false, optional: true, required: false
        _this._certificate = new ZeroTrustAccessGroupRequireCertificateOutputReference(_this, "certificate");
        // common_name - computed: false, optional: true, required: false
        _this._commonName = new ZeroTrustAccessGroupRequireCommonNameOutputReference(_this, "common_name");
        // device_posture - computed: false, optional: true, required: false
        _this._devicePosture = new ZeroTrustAccessGroupRequireDevicePostureOutputReference(_this, "device_posture");
        // email - computed: false, optional: true, required: false
        _this._email = new ZeroTrustAccessGroupRequireEmailOutputReference(_this, "email");
        // email_domain - computed: false, optional: true, required: false
        _this._emailDomain = new ZeroTrustAccessGroupRequireEmailDomainOutputReference(_this, "email_domain");
        // email_list - computed: false, optional: true, required: false
        _this._emailList = new ZeroTrustAccessGroupRequireEmailListStructOutputReference(_this, "email_list");
        // everyone - computed: false, optional: true, required: false
        _this._everyone = new ZeroTrustAccessGroupRequireEveryoneOutputReference(_this, "everyone");
        // external_evaluation - computed: false, optional: true, required: false
        _this._externalEvaluation = new ZeroTrustAccessGroupRequireExternalEvaluationOutputReference(_this, "external_evaluation");
        // geo - computed: false, optional: true, required: false
        _this._geo = new ZeroTrustAccessGroupRequireGeoOutputReference(_this, "geo");
        // github_organization - computed: false, optional: true, required: false
        _this._githubOrganization = new ZeroTrustAccessGroupRequireGithubOrganizationOutputReference(_this, "github_organization");
        // group - computed: false, optional: true, required: false
        _this._group = new ZeroTrustAccessGroupRequireGroupOutputReference(_this, "group");
        // gsuite - computed: false, optional: true, required: false
        _this._gsuite = new ZeroTrustAccessGroupRequireGsuiteOutputReference(_this, "gsuite");
        // ip - computed: false, optional: true, required: false
        _this._ip = new ZeroTrustAccessGroupRequireIpOutputReference(_this, "ip");
        // ip_list - computed: false, optional: true, required: false
        _this._ipList = new ZeroTrustAccessGroupRequireIpListStructOutputReference(_this, "ip_list");
        // linked_app_token - computed: false, optional: true, required: false
        _this._linkedAppToken = new ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference(_this, "linked_app_token");
        // login_method - computed: false, optional: true, required: false
        _this._loginMethod = new ZeroTrustAccessGroupRequireLoginMethodOutputReference(_this, "login_method");
        // oidc - computed: false, optional: true, required: false
        _this._oidc = new ZeroTrustAccessGroupRequireOidcOutputReference(_this, "oidc");
        // okta - computed: false, optional: true, required: false
        _this._okta = new ZeroTrustAccessGroupRequireOktaOutputReference(_this, "okta");
        // saml - computed: false, optional: true, required: false
        _this._saml = new ZeroTrustAccessGroupRequireSamlOutputReference(_this, "saml");
        // service_token - computed: false, optional: true, required: false
        _this._serviceToken = new ZeroTrustAccessGroupRequireServiceTokenOutputReference(_this, "service_token");
        // user_risk_score - computed: false, optional: true, required: false
        _this._userRiskScore = new ZeroTrustAccessGroupRequireUserRiskScoreOutputReference(_this, "user_risk_score");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "anyValidServiceToken", {
        get: function () {
            return this._anyValidServiceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putAnyValidServiceToken = function (value) {
        this._anyValidServiceToken.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetAnyValidServiceToken = function () {
        this._anyValidServiceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "anyValidServiceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._anyValidServiceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "authContext", {
        get: function () {
            return this._authContext;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putAuthContext = function (value) {
        this._authContext.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetAuthContext = function () {
        this._authContext.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "authContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authContext.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putAuthMethod = function (value) {
        this._authMethod.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetAuthMethod = function () {
        this._authMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "azureAd", {
        get: function () {
            return this._azureAd;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putAzureAd = function (value) {
        this._azureAd.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetAzureAd = function () {
        this._azureAd.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "azureAdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azureAd.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putCertificate = function (value) {
        this._certificate.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetCertificate = function () {
        this._certificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "commonName", {
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putCommonName = function (value) {
        this._commonName.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetCommonName = function () {
        this._commonName.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "devicePosture", {
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putDevicePosture = function (value) {
        this._devicePosture.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetDevicePosture = function () {
        this._devicePosture.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "devicePostureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devicePosture.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putEmail = function (value) {
        this._email.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetEmail = function () {
        this._email.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "emailDomain", {
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putEmailDomain = function (value) {
        this._emailDomain.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetEmailDomain = function () {
        this._emailDomain.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "emailDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailDomain.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putEmailList = function (value) {
        this._emailList.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetEmailList = function () {
        this._emailList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "emailListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "everyone", {
        get: function () {
            return this._everyone;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putEveryone = function (value) {
        this._everyone.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetEveryone = function () {
        this._everyone.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "everyoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._everyone.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "externalEvaluation", {
        get: function () {
            return this._externalEvaluation;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putExternalEvaluation = function (value) {
        this._externalEvaluation.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetExternalEvaluation = function () {
        this._externalEvaluation.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "externalEvaluationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEvaluation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "geo", {
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putGeo = function (value) {
        this._geo.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetGeo = function () {
        this._geo.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "githubOrganization", {
        get: function () {
            return this._githubOrganization;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putGithubOrganization = function (value) {
        this._githubOrganization.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetGithubOrganization = function () {
        this._githubOrganization.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "githubOrganizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOrganization.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putGroup = function (value) {
        this._group.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetGroup = function () {
        this._group.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "gsuite", {
        get: function () {
            return this._gsuite;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putGsuite = function (value) {
        this._gsuite.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetGsuite = function () {
        this._gsuite.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "gsuiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gsuite.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putIp = function (value) {
        this._ip.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetIp = function () {
        this._ip.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "ipList", {
        get: function () {
            return this._ipList;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putIpList = function (value) {
        this._ipList.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetIpList = function () {
        this._ipList.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "ipListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "linkedAppToken", {
        get: function () {
            return this._linkedAppToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putLinkedAppToken = function (value) {
        this._linkedAppToken.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetLinkedAppToken = function () {
        this._linkedAppToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "linkedAppTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._linkedAppToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "loginMethod", {
        get: function () {
            return this._loginMethod;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putLoginMethod = function (value) {
        this._loginMethod.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetLoginMethod = function () {
        this._loginMethod.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "loginMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loginMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "oidc", {
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putOidc = function (value) {
        this._oidc.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetOidc = function () {
        this._oidc.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "oidcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "okta", {
        get: function () {
            return this._okta;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putOkta = function (value) {
        this._okta.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetOkta = function () {
        this._okta.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "oktaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okta.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "saml", {
        get: function () {
            return this._saml;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putSaml = function (value) {
        this._saml.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetSaml = function () {
        this._saml.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "samlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saml.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putServiceToken = function (value) {
        this._serviceToken.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetServiceToken = function () {
        this._serviceToken.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "serviceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceToken.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "userRiskScore", {
        get: function () {
            return this._userRiskScore;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroupRequireOutputReference.prototype.putUserRiskScore = function (value) {
        this._userRiskScore.internalValue = value;
    };
    ZeroTrustAccessGroupRequireOutputReference.prototype.resetUserRiskScore = function () {
        this._userRiskScore.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroupRequireOutputReference.prototype, "userRiskScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRiskScore.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessGroupRequireOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessGroupRequireOutputReference = ZeroTrustAccessGroupRequireOutputReference;
var ZeroTrustAccessGroupRequireList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroupRequireList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessGroupRequireList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessGroupRequireList.prototype.get = function (index) {
        return new ZeroTrustAccessGroupRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessGroupRequireList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessGroupRequireList = ZeroTrustAccessGroupRequireList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}
*/
var ZeroTrustAccessGroup = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessGroupConfig
    */
    function ZeroTrustAccessGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_group',
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
        // exclude - computed: false, optional: true, required: false
        _this._exclude = new ZeroTrustAccessGroupExcludeList(_this, "exclude", false);
        // include - computed: false, optional: false, required: true
        _this._include = new ZeroTrustAccessGroupIncludeList(_this, "include", false);
        // require - computed: false, optional: true, required: false
        _this._require = new ZeroTrustAccessGroupRequireList(_this, "require", false);
        _this._accountId = config.accountId;
        _this._exclude.internalValue = config.exclude;
        _this._include.internalValue = config.include;
        _this._isDefault = config.isDefault;
        _this._name = config.name;
        _this._require.internalValue = config.require;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessGroup to import
    * @param importFromId The id of the existing ZeroTrustAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessGroup to import is found
    */
    ZeroTrustAccessGroup.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_group", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroup.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroup.prototype.putExclude = function (value) {
        this._exclude.internalValue = value;
    };
    ZeroTrustAccessGroup.prototype.resetExclude = function () {
        this._exclude.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroup.prototype.putInclude = function (value) {
        this._include.internalValue = value;
    };
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "isDefault", {
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroup.prototype.resetIsDefault = function () {
        this._isDefault = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "isDefaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "require", {
        get: function () {
            return this._require;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroup.prototype.putRequire = function (value) {
        this._require.internalValue = value;
    };
    ZeroTrustAccessGroup.prototype.resetRequire = function () {
        this._require.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "requireInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._require.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessGroup.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessGroup.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessGroup.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            exclude: cdktf.listMapper(zeroTrustAccessGroupExcludeToTerraform, false)(this._exclude.internalValue),
            include: cdktf.listMapper(zeroTrustAccessGroupIncludeToTerraform, false)(this._include.internalValue),
            is_default: cdktf.booleanToTerraform(this._isDefault),
            name: cdktf.stringToTerraform(this._name),
            require: cdktf.listMapper(zeroTrustAccessGroupRequireToTerraform, false)(this._require.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZeroTrustAccessGroup.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude: {
                value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeToHclTerraform, false)(this._exclude.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessGroupExcludeList",
            },
            include: {
                value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeToHclTerraform, false)(this._include.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessGroupIncludeList",
            },
            is_default: {
                value: cdktf.booleanToHclTerraform(this._isDefault),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            require: {
                value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireToHclTerraform, false)(this._require.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessGroupRequireList",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    ZeroTrustAccessGroup.tfResourceType = "cloudflare_zero_trust_access_group";
    return ZeroTrustAccessGroup;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessGroup = ZeroTrustAccessGroup;
