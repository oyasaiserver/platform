// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncAwsCertificateManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#application_id CertificateSyncAwsCertificateManager#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#auto_sync_enabled CertificateSyncAwsCertificateManager#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the aws Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#connection_id CertificateSyncAwsCertificateManager#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the AWS Certificate Manager sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#description CertificateSyncAwsCertificateManager#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#destination_config CertificateSyncAwsCertificateManager#destination_config}
  */
  readonly destinationConfig: CertificateSyncAwsCertificateManagerDestinationConfig;
  /**
  * The name of the AWS Certificate Manager sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#name CertificateSyncAwsCertificateManager#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how certificates are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#sync_options CertificateSyncAwsCertificateManager#sync_options}
  */
  readonly syncOptions: CertificateSyncAwsCertificateManagerSyncOptions;
}
export interface CertificateSyncAwsCertificateManagerDestinationConfig {
  /**
  * The AWS region to sync certificates to (e.g. us-east-1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#aws_region CertificateSyncAwsCertificateManager#aws_region}
  */
  readonly awsRegion: string;
}

export function certificateSyncAwsCertificateManagerDestinationConfigToTerraform(struct?: CertificateSyncAwsCertificateManagerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
  }
}


export function certificateSyncAwsCertificateManagerDestinationConfigToHclTerraform(struct?: CertificateSyncAwsCertificateManagerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncAwsCertificateManagerDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncAwsCertificateManagerDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncAwsCertificateManagerDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }
}
export interface CertificateSyncAwsCertificateManagerSyncOptions {
  /**
  * Whether Infisical should remove certificates from AWS Certificate Manager when they are no longer managed in Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#can_remove_certificates CertificateSyncAwsCertificateManager#can_remove_certificates}
  */
  readonly canRemoveCertificates?: boolean | cdktf.IResolvable;
  /**
  * The naming scheme for synced certificates. Must include the {{certificateId}} or {{shortCertificateId}} placeholder. Available placeholders: {{certificateId}}, {{shortCertificateId}}, {{profileId}}, {{applicationId}}, {{applicationName}}, {{commonName}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#certificate_name_schema CertificateSyncAwsCertificateManager#certificate_name_schema}
  */
  readonly certificateNameSchema: string;
  /**
  * Whether to include the root CA certificate in the synced certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#include_root_ca CertificateSyncAwsCertificateManager#include_root_ca}
  */
  readonly includeRootCa?: boolean | cdktf.IResolvable;
  /**
  * Whether to preserve the AWS Certificate Manager ARN when a certificate is renewed, reimporting into the existing certificate instead of creating a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#preserve_arn CertificateSyncAwsCertificateManager#preserve_arn}
  */
  readonly preserveArn?: boolean | cdktf.IResolvable;
}

export function certificateSyncAwsCertificateManagerSyncOptionsToTerraform(struct?: CertificateSyncAwsCertificateManagerSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_remove_certificates: cdktf.booleanToTerraform(struct!.canRemoveCertificates),
    certificate_name_schema: cdktf.stringToTerraform(struct!.certificateNameSchema),
    include_root_ca: cdktf.booleanToTerraform(struct!.includeRootCa),
    preserve_arn: cdktf.booleanToTerraform(struct!.preserveArn),
  }
}


export function certificateSyncAwsCertificateManagerSyncOptionsToHclTerraform(struct?: CertificateSyncAwsCertificateManagerSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_remove_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.canRemoveCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_name_schema: {
      value: cdktf.stringToHclTerraform(struct!.certificateNameSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_root_ca: {
      value: cdktf.booleanToHclTerraform(struct!.includeRootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_arn: {
      value: cdktf.booleanToHclTerraform(struct!.preserveArn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncAwsCertificateManagerSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncAwsCertificateManagerSyncOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canRemoveCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.canRemoveCertificates = this._canRemoveCertificates;
    }
    if (this._certificateNameSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateNameSchema = this._certificateNameSchema;
    }
    if (this._includeRootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRootCa = this._includeRootCa;
    }
    if (this._preserveArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveArn = this._preserveArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncAwsCertificateManagerSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = undefined;
      this._certificateNameSchema = undefined;
      this._includeRootCa = undefined;
      this._preserveArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = value.canRemoveCertificates;
      this._certificateNameSchema = value.certificateNameSchema;
      this._includeRootCa = value.includeRootCa;
      this._preserveArn = value.preserveArn;
    }
  }

  // can_remove_certificates - computed: true, optional: true, required: false
  private _canRemoveCertificates?: boolean | cdktf.IResolvable; 
  public get canRemoveCertificates() {
    return this.getBooleanAttribute('can_remove_certificates');
  }
  public set canRemoveCertificates(value: boolean | cdktf.IResolvable) {
    this._canRemoveCertificates = value;
  }
  public resetCanRemoveCertificates() {
    this._canRemoveCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canRemoveCertificatesInput() {
    return this._canRemoveCertificates;
  }

  // certificate_name_schema - computed: false, optional: false, required: true
  private _certificateNameSchema?: string; 
  public get certificateNameSchema() {
    return this.getStringAttribute('certificate_name_schema');
  }
  public set certificateNameSchema(value: string) {
    this._certificateNameSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameSchemaInput() {
    return this._certificateNameSchema;
  }

  // include_root_ca - computed: true, optional: true, required: false
  private _includeRootCa?: boolean | cdktf.IResolvable; 
  public get includeRootCa() {
    return this.getBooleanAttribute('include_root_ca');
  }
  public set includeRootCa(value: boolean | cdktf.IResolvable) {
    this._includeRootCa = value;
  }
  public resetIncludeRootCa() {
    this._includeRootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRootCaInput() {
    return this._includeRootCa;
  }

  // preserve_arn - computed: true, optional: true, required: false
  private _preserveArn?: boolean | cdktf.IResolvable; 
  public get preserveArn() {
    return this.getBooleanAttribute('preserve_arn');
  }
  public set preserveArn(value: boolean | cdktf.IResolvable) {
    this._preserveArn = value;
  }
  public resetPreserveArn() {
    this._preserveArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveArnInput() {
    return this._preserveArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager infisical_certificate_sync_aws_certificate_manager}
*/
export class CertificateSyncAwsCertificateManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_aws_certificate_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncAwsCertificateManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncAwsCertificateManager to import
  * @param importFromId The id of the existing CertificateSyncAwsCertificateManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncAwsCertificateManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_aws_certificate_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_aws_certificate_manager infisical_certificate_sync_aws_certificate_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncAwsCertificateManagerConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncAwsCertificateManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_aws_certificate_manager',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._autoSyncEnabled = config.autoSyncEnabled;
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._name = config.name;
    this._syncOptions.internalValue = config.syncOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // auto_sync_enabled - computed: true, optional: true, required: false
  private _autoSyncEnabled?: boolean | cdktf.IResolvable; 
  public get autoSyncEnabled() {
    return this.getBooleanAttribute('auto_sync_enabled');
  }
  public set autoSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._autoSyncEnabled = value;
  }
  public resetAutoSyncEnabled() {
    this._autoSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncEnabledInput() {
    return this._autoSyncEnabled;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new CertificateSyncAwsCertificateManagerDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncAwsCertificateManagerDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
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

  // sync_options - computed: false, optional: false, required: true
  private _syncOptions = new CertificateSyncAwsCertificateManagerSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: CertificateSyncAwsCertificateManagerSyncOptions) {
    this._syncOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncAwsCertificateManagerDestinationConfigToTerraform(this._destinationConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sync_options: certificateSyncAwsCertificateManagerSyncOptionsToTerraform(this._syncOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_config: {
        value: certificateSyncAwsCertificateManagerDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncAwsCertificateManagerDestinationConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: certificateSyncAwsCertificateManagerSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncAwsCertificateManagerSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
