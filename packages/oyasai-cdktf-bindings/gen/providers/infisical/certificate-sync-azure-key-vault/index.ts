// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncAzureKeyVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#application_id CertificateSyncAzureKeyVault#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#auto_sync_enabled CertificateSyncAzureKeyVault#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Which of the application's certificates this sync holds. A certificate must match every field that is set: setting both `certificate_order_ids` and `profile_ids` selects only the certificates in both. Leave the block out to manage the certificates outside Terraform, for example in the Infisical UI. An empty block, or an empty `certificate_order_ids`, makes the sync hold no certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#certificate_filters CertificateSyncAzureKeyVault#certificate_filters}
  */
  readonly certificateFilters?: CertificateSyncAzureKeyVaultCertificateFilters;
  /**
  * The ID of the azure-key-vault Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#connection_id CertificateSyncAzureKeyVault#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the Azure Key Vault sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#description CertificateSyncAzureKeyVault#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#destination_config CertificateSyncAzureKeyVault#destination_config}
  */
  readonly destinationConfig: CertificateSyncAzureKeyVaultDestinationConfig;
  /**
  * The name of the Azure Key Vault sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#name CertificateSyncAzureKeyVault#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how certificates are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#sync_options CertificateSyncAzureKeyVault#sync_options}
  */
  readonly syncOptions: CertificateSyncAzureKeyVaultSyncOptions;
}
export interface CertificateSyncAzureKeyVaultCertificateFiltersMetadata {
  /**
  * The metadata key the certificate must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#key CertificateSyncAzureKeyVault#key}
  */
  readonly key: string;
  /**
  * The value the key must have. Leave unset to match any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#value CertificateSyncAzureKeyVault#value}
  */
  readonly value?: string;
}

export function certificateSyncAzureKeyVaultCertificateFiltersMetadataToTerraform(struct?: CertificateSyncAzureKeyVaultCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificateSyncAzureKeyVaultCertificateFiltersMetadataToHclTerraform(struct?: CertificateSyncAzureKeyVaultCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncAzureKeyVaultCertificateFiltersMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertificateSyncAzureKeyVaultCertificateFiltersMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncAzureKeyVaultCertificateFiltersMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CertificateSyncAzureKeyVaultCertificateFiltersMetadataList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncAzureKeyVaultCertificateFiltersMetadata[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CertificateSyncAzureKeyVaultCertificateFiltersMetadataOutputReference {
    return new CertificateSyncAzureKeyVaultCertificateFiltersMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncAzureKeyVaultCertificateFilters {
  /**
  * The certificate orders to sync, from the `order_id` attribute of `infisical_cert_manager_certificate`. A certificate and all of its renewals share one order, so the sync keeps holding the newest certificate of each order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#certificate_order_ids CertificateSyncAzureKeyVault#certificate_order_ids}
  */
  readonly certificateOrderIds?: string[];
  /**
  * Sync certificates carrying every one of these metadata pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#metadata CertificateSyncAzureKeyVault#metadata}
  */
  readonly metadata?: CertificateSyncAzureKeyVaultCertificateFiltersMetadata[] | cdktf.IResolvable;
  /**
  * Sync certificates issued from any one of these certificate profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#profile_ids CertificateSyncAzureKeyVault#profile_ids}
  */
  readonly profileIds?: string[];
}

export function certificateSyncAzureKeyVaultCertificateFiltersToTerraform(struct?: CertificateSyncAzureKeyVaultCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_order_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateOrderIds),
    metadata: cdktf.listMapper(certificateSyncAzureKeyVaultCertificateFiltersMetadataToTerraform, false)(struct!.metadata),
    profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileIds),
  }
}


export function certificateSyncAzureKeyVaultCertificateFiltersToHclTerraform(struct?: CertificateSyncAzureKeyVaultCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_order_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateOrderIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(certificateSyncAzureKeyVaultCertificateFiltersMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CertificateSyncAzureKeyVaultCertificateFiltersMetadataList",
    },
    profile_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profileIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncAzureKeyVaultCertificateFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncAzureKeyVaultCertificateFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateOrderIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateOrderIds = this._certificateOrderIds;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._profileIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileIds = this._profileIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncAzureKeyVaultCertificateFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateOrderIds = undefined;
      this._metadata.internalValue = undefined;
      this._profileIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateOrderIds = value.certificateOrderIds;
      this._metadata.internalValue = value.metadata;
      this._profileIds = value.profileIds;
    }
  }

  // certificate_order_ids - computed: false, optional: true, required: false
  private _certificateOrderIds?: string[]; 
  public get certificateOrderIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_order_ids'));
  }
  public set certificateOrderIds(value: string[]) {
    this._certificateOrderIds = value;
  }
  public resetCertificateOrderIds() {
    this._certificateOrderIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateOrderIdsInput() {
    return this._certificateOrderIds;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CertificateSyncAzureKeyVaultCertificateFiltersMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSyncAzureKeyVaultCertificateFiltersMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // profile_ids - computed: false, optional: true, required: false
  private _profileIds?: string[]; 
  public get profileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('profile_ids'));
  }
  public set profileIds(value: string[]) {
    this._profileIds = value;
  }
  public resetProfileIds() {
    this._profileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdsInput() {
    return this._profileIds;
  }
}
export interface CertificateSyncAzureKeyVaultDestinationConfig {
  /**
  * The URL of the Azure Key Vault to sync certificates to (e.g. https://<vault-name>.vault.azure.net).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#vault_base_url CertificateSyncAzureKeyVault#vault_base_url}
  */
  readonly vaultBaseUrl: string;
}

export function certificateSyncAzureKeyVaultDestinationConfigToTerraform(struct?: CertificateSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vault_base_url: cdktf.stringToTerraform(struct!.vaultBaseUrl),
  }
}


export function certificateSyncAzureKeyVaultDestinationConfigToHclTerraform(struct?: CertificateSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vault_base_url: {
      value: cdktf.stringToHclTerraform(struct!.vaultBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncAzureKeyVaultDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vaultBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultBaseUrl = this._vaultBaseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vaultBaseUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vaultBaseUrl = value.vaultBaseUrl;
    }
  }

  // vault_base_url - computed: false, optional: false, required: true
  private _vaultBaseUrl?: string; 
  public get vaultBaseUrl() {
    return this.getStringAttribute('vault_base_url');
  }
  public set vaultBaseUrl(value: string) {
    this._vaultBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultBaseUrlInput() {
    return this._vaultBaseUrl;
  }
}
export interface CertificateSyncAzureKeyVaultSyncOptions {
  /**
  * Whether Infisical should remove certificates from Azure Key Vault when their certificates leave this sync, for example when `certificate_filters` stops matching them. Destroying the sync leaves them in place. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#can_remove_certificates CertificateSyncAzureKeyVault#can_remove_certificates}
  */
  readonly canRemoveCertificates?: boolean | cdktf.IResolvable;
  /**
  * The naming scheme for synced certificates. Must include the {{certificateId}} or {{shortCertificateId}} placeholder, and compiled names may contain only alphanumeric characters and hyphens (1-127 characters). Available placeholders: {{certificateId}}, {{shortCertificateId}}, {{profileId}}, {{applicationId}}, {{applicationName}}, {{commonName}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#certificate_name_schema CertificateSyncAzureKeyVault#certificate_name_schema}
  */
  readonly certificateNameSchema: string;
  /**
  * Whether a renewed certificate is added as a new version of the existing Azure Key Vault certificate instead of a new certificate. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#enable_versioning CertificateSyncAzureKeyVault#enable_versioning}
  */
  readonly enableVersioning?: boolean | cdktf.IResolvable;
  /**
  * Whether to include the root CA certificate in the synced certificate chain. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#include_root_ca CertificateSyncAzureKeyVault#include_root_ca}
  */
  readonly includeRootCa?: boolean | cdktf.IResolvable;
}

export function certificateSyncAzureKeyVaultSyncOptionsToTerraform(struct?: CertificateSyncAzureKeyVaultSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_remove_certificates: cdktf.booleanToTerraform(struct!.canRemoveCertificates),
    certificate_name_schema: cdktf.stringToTerraform(struct!.certificateNameSchema),
    enable_versioning: cdktf.booleanToTerraform(struct!.enableVersioning),
    include_root_ca: cdktf.booleanToTerraform(struct!.includeRootCa),
  }
}


export function certificateSyncAzureKeyVaultSyncOptionsToHclTerraform(struct?: CertificateSyncAzureKeyVaultSyncOptions | cdktf.IResolvable): any {
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
    enable_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.enableVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_root_ca: {
      value: cdktf.booleanToHclTerraform(struct!.includeRootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncAzureKeyVaultSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncAzureKeyVaultSyncOptions | cdktf.IResolvable | undefined {
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
    if (this._enableVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVersioning = this._enableVersioning;
    }
    if (this._includeRootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRootCa = this._includeRootCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncAzureKeyVaultSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = undefined;
      this._certificateNameSchema = undefined;
      this._enableVersioning = undefined;
      this._includeRootCa = undefined;
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
      this._enableVersioning = value.enableVersioning;
      this._includeRootCa = value.includeRootCa;
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

  // enable_versioning - computed: true, optional: true, required: false
  private _enableVersioning?: boolean | cdktf.IResolvable; 
  public get enableVersioning() {
    return this.getBooleanAttribute('enable_versioning');
  }
  public set enableVersioning(value: boolean | cdktf.IResolvable) {
    this._enableVersioning = value;
  }
  public resetEnableVersioning() {
    this._enableVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVersioningInput() {
    return this._enableVersioning;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault infisical_certificate_sync_azure_key_vault}
*/
export class CertificateSyncAzureKeyVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_azure_key_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncAzureKeyVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncAzureKeyVault to import
  * @param importFromId The id of the existing CertificateSyncAzureKeyVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncAzureKeyVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_azure_key_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_azure_key_vault infisical_certificate_sync_azure_key_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncAzureKeyVaultConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncAzureKeyVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_azure_key_vault',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
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
    this._certificateFilters.internalValue = config.certificateFilters;
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

  // certificate_filters - computed: false, optional: true, required: false
  private _certificateFilters = new CertificateSyncAzureKeyVaultCertificateFiltersOutputReference(this, "certificate_filters");
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: CertificateSyncAzureKeyVaultCertificateFilters) {
    this._certificateFilters.internalValue = value;
  }
  public resetCertificateFilters() {
    this._certificateFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFiltersInput() {
    return this._certificateFilters.internalValue;
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
  private _destinationConfig = new CertificateSyncAzureKeyVaultDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncAzureKeyVaultDestinationConfig) {
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
  private _syncOptions = new CertificateSyncAzureKeyVaultSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: CertificateSyncAzureKeyVaultSyncOptions) {
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
      certificate_filters: certificateSyncAzureKeyVaultCertificateFiltersToTerraform(this._certificateFilters.internalValue),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncAzureKeyVaultDestinationConfigToTerraform(this._destinationConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sync_options: certificateSyncAzureKeyVaultSyncOptionsToTerraform(this._syncOptions.internalValue),
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
      certificate_filters: {
        value: certificateSyncAzureKeyVaultCertificateFiltersToHclTerraform(this._certificateFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncAzureKeyVaultCertificateFilters",
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
        value: certificateSyncAzureKeyVaultDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncAzureKeyVaultDestinationConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: certificateSyncAzureKeyVaultSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncAzureKeyVaultSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
