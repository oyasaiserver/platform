import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertManagerExternalCaAcmeConfig extends cdktf.TerraformMetaArguments {
    /**
    * The email address for ACME account registration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#account_email CertManagerExternalCaAcme#account_email}
    */
    readonly accountEmail: string;
    /**
    * The ACME directory URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#directory_url CertManagerExternalCaAcme#directory_url}
    */
    readonly directoryUrl: string;
    /**
    * The ID of the DNS app connection for ACME challenge validation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#dns_app_connection_id CertManagerExternalCaAcme#dns_app_connection_id}
    */
    readonly dnsAppConnectionId: string;
    /**
    * The hosted zone ID for DNS-01 challenge validation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#dns_hosted_zone_id CertManagerExternalCaAcme#dns_hosted_zone_id}
    */
    readonly dnsHostedZoneId?: string;
    /**
    * The DNS provider for ACME challenge validation. Supported values: route53, cloudflare, dns-made-easy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#dns_provider CertManagerExternalCaAcme#dns_provider}
    */
    readonly dnsProvider: string;
    /**
    * External Account Binding (EAB) HMAC key (optional)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#eab_hmac_key CertManagerExternalCaAcme#eab_hmac_key}
    */
    readonly eabHmacKey?: string;
    /**
    * External Account Binding (EAB) Key ID (optional)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#eab_kid CertManagerExternalCaAcme#eab_kid}
    */
    readonly eabKid?: string;
    /**
    * The name of the ACME CA
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#name CertManagerExternalCaAcme#name}
    */
    readonly name: string;
    /**
    * The slug of the cert-manager project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#project_slug CertManagerExternalCaAcme#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The status of the CA. Supported values: active, disabled. Defaults to 'active'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#status CertManagerExternalCaAcme#status}
    */
    readonly status?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme}
*/
export declare class CertManagerExternalCaAcme extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_cert_manager_external_ca_acme";
    /**
    * Generates CDKTF code for importing a CertManagerExternalCaAcme resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerExternalCaAcme to import
    * @param importFromId The id of the existing CertManagerExternalCaAcme that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerExternalCaAcme to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerExternalCaAcmeConfig
    */
    constructor(scope: Construct, id: string, config: CertManagerExternalCaAcmeConfig);
    private _accountEmail?;
    get accountEmail(): string;
    set accountEmail(value: string);
    get accountEmailInput(): string;
    private _directoryUrl?;
    get directoryUrl(): string;
    set directoryUrl(value: string);
    get directoryUrlInput(): string;
    private _dnsAppConnectionId?;
    get dnsAppConnectionId(): string;
    set dnsAppConnectionId(value: string);
    get dnsAppConnectionIdInput(): string;
    private _dnsHostedZoneId?;
    get dnsHostedZoneId(): string;
    set dnsHostedZoneId(value: string);
    resetDnsHostedZoneId(): void;
    get dnsHostedZoneIdInput(): string;
    private _dnsProvider?;
    get dnsProvider(): string;
    set dnsProvider(value: string);
    get dnsProviderInput(): string;
    private _eabHmacKey?;
    get eabHmacKey(): string;
    set eabHmacKey(value: string);
    resetEabHmacKey(): void;
    get eabHmacKeyInput(): string;
    private _eabKid?;
    get eabKid(): string;
    set eabKid(value: string);
    resetEabKid(): void;
    get eabKidInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
