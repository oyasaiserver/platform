import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertManagerExternalCaAdcsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the Azure ADCS app connection for certificate issuance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs#azure_adcs_connection_id CertManagerExternalCaAdcs#azure_adcs_connection_id}
    */
    readonly azureAdcsConnectionId: string;
    /**
    * The name of the ADCS CA
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs#name CertManagerExternalCaAdcs#name}
    */
    readonly name: string;
    /**
    * The slug of the cert-manager project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs#project_slug CertManagerExternalCaAdcs#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The status of the CA. Supported values: active, disabled. Defaults to 'active'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs#status CertManagerExternalCaAdcs#status}
    */
    readonly status?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs infisical_cert_manager_external_ca_adcs}
*/
export declare class CertManagerExternalCaAdcs extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_cert_manager_external_ca_adcs";
    /**
    * Generates CDKTF code for importing a CertManagerExternalCaAdcs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerExternalCaAdcs to import
    * @param importFromId The id of the existing CertManagerExternalCaAdcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerExternalCaAdcs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs infisical_cert_manager_external_ca_adcs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerExternalCaAdcsConfig
    */
    constructor(scope: Construct, id: string, config: CertManagerExternalCaAdcsConfig);
    private _azureAdcsConnectionId?;
    get azureAdcsConnectionId(): string;
    set azureAdcsConnectionId(value: string);
    get azureAdcsConnectionIdInput(): string;
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
