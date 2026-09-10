// https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerExternalCaDigicertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the DigiCert app connection used for certificate issuance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#app_connection_id CertManagerExternalCaDigicert#app_connection_id}
  */
  readonly appConnectionId: string;
  /**
  * The name of the DigiCert CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#name CertManagerExternalCaDigicert#name}
  */
  readonly name: string;
  /**
  * The CertCentral organization ID that will be listed on issued certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#organization_id CertManagerExternalCaDigicert#organization_id}
  */
  readonly organizationId: number;
  /**
  * The DigiCert product name ID used for issuance (e.g. ssl_plus, code_signing, code_signing_ev)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#product_name_id CertManagerExternalCaDigicert#product_name_id}
  */
  readonly productNameId: string;
  /**
  * Whether this CA issues SSL/TLS or code signing certificates. Supported values: ssl, code_signing. Defaults to 'ssl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#purpose CertManagerExternalCaDigicert#purpose}
  */
  readonly purpose?: string;
  /**
  * The status of the CA. Supported values: active, disabled. Defaults to 'active'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#status CertManagerExternalCaDigicert#status}
  */
  readonly status?: string;
  /**
  * Contact info for the user who approves first-time code signing orders for the organization. Required when purpose is 'code_signing'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#verified_contact CertManagerExternalCaDigicert#verified_contact}
  */
  readonly verifiedContact?: CertManagerExternalCaDigicertVerifiedContact;
}
export interface CertManagerExternalCaDigicertVerifiedContact {
  /**
  * The email address of the verified contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#email CertManagerExternalCaDigicert#email}
  */
  readonly email: string;
  /**
  * The first name of the verified contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#first_name CertManagerExternalCaDigicert#first_name}
  */
  readonly firstName: string;
  /**
  * The job title of the verified contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#job_title CertManagerExternalCaDigicert#job_title}
  */
  readonly jobTitle: string;
  /**
  * The last name of the verified contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#last_name CertManagerExternalCaDigicert#last_name}
  */
  readonly lastName: string;
  /**
  * The telephone number of the verified contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#telephone CertManagerExternalCaDigicert#telephone}
  */
  readonly telephone: string;
}

export function certManagerExternalCaDigicertVerifiedContactToTerraform(struct?: CertManagerExternalCaDigicertVerifiedContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    job_title: cdktf.stringToTerraform(struct!.jobTitle),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    telephone: cdktf.stringToTerraform(struct!.telephone),
  }
}


export function certManagerExternalCaDigicertVerifiedContactToHclTerraform(struct?: CertManagerExternalCaDigicertVerifiedContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_title: {
      value: cdktf.stringToHclTerraform(struct!.jobTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telephone: {
      value: cdktf.stringToHclTerraform(struct!.telephone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerExternalCaDigicertVerifiedContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerExternalCaDigicertVerifiedContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._jobTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTitle = this._jobTitle;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._telephone !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephone = this._telephone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerExternalCaDigicertVerifiedContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._jobTitle = undefined;
      this._lastName = undefined;
      this._telephone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._firstName = value.firstName;
      this._jobTitle = value.jobTitle;
      this._lastName = value.lastName;
      this._telephone = value.telephone;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // job_title - computed: false, optional: false, required: true
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // telephone - computed: false, optional: false, required: true
  private _telephone?: string; 
  public get telephone() {
    return this.getStringAttribute('telephone');
  }
  public set telephone(value: string) {
    this._telephone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telephoneInput() {
    return this._telephone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert infisical_cert_manager_external_ca_digicert}
*/
export class CertManagerExternalCaDigicert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_external_ca_digicert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerExternalCaDigicert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerExternalCaDigicert to import
  * @param importFromId The id of the existing CertManagerExternalCaDigicert that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerExternalCaDigicert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_external_ca_digicert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/cert_manager_external_ca_digicert infisical_cert_manager_external_ca_digicert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerExternalCaDigicertConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerExternalCaDigicertConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_external_ca_digicert',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appConnectionId = config.appConnectionId;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._productNameId = config.productNameId;
    this._purpose = config.purpose;
    this._status = config.status;
    this._verifiedContact.internalValue = config.verifiedContact;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_connection_id - computed: false, optional: false, required: true
  private _appConnectionId?: string; 
  public get appConnectionId() {
    return this.getStringAttribute('app_connection_id');
  }
  public set appConnectionId(value: string) {
    this._appConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnectionIdInput() {
    return this._appConnectionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: number; 
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }
  public set organizationId(value: number) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // product_name_id - computed: false, optional: false, required: true
  private _productNameId?: string; 
  public get productNameId() {
    return this.getStringAttribute('product_name_id');
  }
  public set productNameId(value: string) {
    this._productNameId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameIdInput() {
    return this._productNameId;
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // verified_contact - computed: false, optional: true, required: false
  private _verifiedContact = new CertManagerExternalCaDigicertVerifiedContactOutputReference(this, "verified_contact");
  public get verifiedContact() {
    return this._verifiedContact;
  }
  public putVerifiedContact(value: CertManagerExternalCaDigicertVerifiedContact) {
    this._verifiedContact.internalValue = value;
  }
  public resetVerifiedContact() {
    this._verifiedContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedContactInput() {
    return this._verifiedContact.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_connection_id: cdktf.stringToTerraform(this._appConnectionId),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.numberToTerraform(this._organizationId),
      product_name_id: cdktf.stringToTerraform(this._productNameId),
      purpose: cdktf.stringToTerraform(this._purpose),
      status: cdktf.stringToTerraform(this._status),
      verified_contact: certManagerExternalCaDigicertVerifiedContactToTerraform(this._verifiedContact.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_connection_id: {
        value: cdktf.stringToHclTerraform(this._appConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.numberToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_name_id: {
        value: cdktf.stringToHclTerraform(this._productNameId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verified_contact: {
        value: certManagerExternalCaDigicertVerifiedContactToHclTerraform(this._verifiedContact.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerExternalCaDigicertVerifiedContact",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
