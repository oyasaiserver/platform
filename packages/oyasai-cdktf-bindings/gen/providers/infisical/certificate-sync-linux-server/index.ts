// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncLinuxServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#application_id CertificateSyncLinuxServer#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#auto_sync_enabled CertificateSyncLinuxServer#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Which of the application's certificates this sync holds. A certificate must match every field that is set: setting both `certificate_order_ids` and `profile_ids` selects only the certificates in both. Leave the block out to manage the certificates outside Terraform, for example in the Infisical UI. An empty block, or an empty `certificate_order_ids`, makes the sync hold no certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#certificate_filters CertificateSyncLinuxServer#certificate_filters}
  */
  readonly certificateFilters?: CertificateSyncLinuxServerCertificateFilters;
  /**
  * The ID of the App Connection to use for syncing. Supported connection types: ssh, ldap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#connection_id CertificateSyncLinuxServer#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the Linux Server sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#description CertificateSyncLinuxServer#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#destination_config CertificateSyncLinuxServer#destination_config}
  */
  readonly destinationConfig: CertificateSyncLinuxServerDestinationConfig;
  /**
  * The password protecting the exported PKCS#12 or Java KeyStore file. Required when `export_format` is `pkcs12` or `jks`, unless `export_password_wo` is set. Stored in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#export_password CertificateSyncLinuxServer#export_password}
  */
  readonly exportPassword?: string;
  /**
  * The keystore export password as a write-only value that is never stored in state. Requires Terraform 1.11 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#export_password_wo CertificateSyncLinuxServer#export_password_wo}
  */
  readonly exportPasswordWo?: string;
  /**
  * Used together with `export_password_wo` to trigger an update. Increment this value to send a new `export_password_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#export_password_wo_version CertificateSyncLinuxServer#export_password_wo_version}
  */
  readonly exportPasswordWoVersion?: number;
  /**
  * The name of the Linux Server sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#name CertificateSyncLinuxServer#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how certificates are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#sync_options CertificateSyncLinuxServer#sync_options}
  */
  readonly syncOptions: CertificateSyncLinuxServerSyncOptions;
}
export interface CertificateSyncLinuxServerCertificateFiltersMetadata {
  /**
  * The metadata key the certificate must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#key CertificateSyncLinuxServer#key}
  */
  readonly key: string;
  /**
  * The value the key must have. Leave unset to match any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#value CertificateSyncLinuxServer#value}
  */
  readonly value?: string;
}

export function certificateSyncLinuxServerCertificateFiltersMetadataToTerraform(struct?: CertificateSyncLinuxServerCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificateSyncLinuxServerCertificateFiltersMetadataToHclTerraform(struct?: CertificateSyncLinuxServerCertificateFiltersMetadata | cdktf.IResolvable): any {
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

export class CertificateSyncLinuxServerCertificateFiltersMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateSyncLinuxServerCertificateFiltersMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncLinuxServerCertificateFiltersMetadata | cdktf.IResolvable | undefined) {
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

export class CertificateSyncLinuxServerCertificateFiltersMetadataList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncLinuxServerCertificateFiltersMetadata[] | cdktf.IResolvable

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
  public get(index: number): CertificateSyncLinuxServerCertificateFiltersMetadataOutputReference {
    return new CertificateSyncLinuxServerCertificateFiltersMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncLinuxServerCertificateFilters {
  /**
  * The certificate orders to sync, from the `order_id` attribute of `infisical_cert_manager_certificate`. A certificate and all of its renewals share one order, so the sync keeps holding the newest certificate of each order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#certificate_order_ids CertificateSyncLinuxServer#certificate_order_ids}
  */
  readonly certificateOrderIds?: string[];
  /**
  * Sync certificates carrying every one of these metadata pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#metadata CertificateSyncLinuxServer#metadata}
  */
  readonly metadata?: CertificateSyncLinuxServerCertificateFiltersMetadata[] | cdktf.IResolvable;
  /**
  * Sync certificates issued from any one of these certificate profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#profile_ids CertificateSyncLinuxServer#profile_ids}
  */
  readonly profileIds?: string[];
}

export function certificateSyncLinuxServerCertificateFiltersToTerraform(struct?: CertificateSyncLinuxServerCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_order_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateOrderIds),
    metadata: cdktf.listMapper(certificateSyncLinuxServerCertificateFiltersMetadataToTerraform, false)(struct!.metadata),
    profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileIds),
  }
}


export function certificateSyncLinuxServerCertificateFiltersToHclTerraform(struct?: CertificateSyncLinuxServerCertificateFilters | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(certificateSyncLinuxServerCertificateFiltersMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CertificateSyncLinuxServerCertificateFiltersMetadataList",
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

export class CertificateSyncLinuxServerCertificateFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncLinuxServerCertificateFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncLinuxServerCertificateFilters | cdktf.IResolvable | undefined) {
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
  private _metadata = new CertificateSyncLinuxServerCertificateFiltersMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSyncLinuxServerCertificateFiltersMetadata[] | cdktf.IResolvable) {
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
export interface CertificateSyncLinuxServerDestinationConfig {
  /**
  * The absolute directory on the server to write certificate files to (e.g. /etc/ssl/infisical).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#destination_path CertificateSyncLinuxServer#destination_path}
  */
  readonly destinationPath: string;
  /**
  * The hostname or IP address of the server to sync to. Required with an LDAP connection and not allowed with any other connection type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#host CertificateSyncLinuxServer#host}
  */
  readonly host?: string;
  /**
  * The SSH port to reach the server on. Only valid with an LDAP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#port CertificateSyncLinuxServer#port}
  */
  readonly port?: number;
  /**
  * The trusted SSH host keys of the server, as produced by `ssh-keyscan <host>`. The sync refuses to connect when the server presents a different key, and at least one RSA or ECDSA key must be included. Only valid with an LDAP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#ssh_host_keys CertificateSyncLinuxServer#ssh_host_keys}
  */
  readonly sshHostKeys?: string;
}

export function certificateSyncLinuxServerDestinationConfigToTerraform(struct?: CertificateSyncLinuxServerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_path: cdktf.stringToTerraform(struct!.destinationPath),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    ssh_host_keys: cdktf.stringToTerraform(struct!.sshHostKeys),
  }
}


export function certificateSyncLinuxServerDestinationConfigToHclTerraform(struct?: CertificateSyncLinuxServerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_path: {
      value: cdktf.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_host_keys: {
      value: cdktf.stringToHclTerraform(struct!.sshHostKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncLinuxServerDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncLinuxServerDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshHostKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshHostKeys = this._sshHostKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncLinuxServerDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPath = undefined;
      this._host = undefined;
      this._port = undefined;
      this._sshHostKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPath = value.destinationPath;
      this._host = value.host;
      this._port = value.port;
      this._sshHostKeys = value.sshHostKeys;
    }
  }

  // destination_path - computed: false, optional: false, required: true
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_host_keys - computed: false, optional: true, required: false
  private _sshHostKeys?: string; 
  public get sshHostKeys() {
    return this.getStringAttribute('ssh_host_keys');
  }
  public set sshHostKeys(value: string) {
    this._sshHostKeys = value;
  }
  public resetSshHostKeys() {
    this._sshHostKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeysInput() {
    return this._sshHostKeys;
  }
}
export interface CertificateSyncLinuxServerSyncOptions {
  /**
  * Whether Infisical should delete certificate files from the server when their certificates leave this sync, for example when `certificate_filters` stops matching them. Destroying the sync leaves them in place. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#can_remove_certificates CertificateSyncLinuxServer#can_remove_certificates}
  */
  readonly canRemoveCertificates?: boolean | cdktf.IResolvable;
  /**
  * The file base name for synced certificates. It must resolve to a single file name of 1-200 characters using only letters, digits, dots (.), dashes (-), and underscores (_). Available placeholders: {{certificateId}}, {{shortCertificateId}}, {{profileId}}, {{applicationId}}, {{applicationName}}, {{commonName}}. A schema with no placeholder can be linked to only one certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#certificate_name_schema CertificateSyncLinuxServer#certificate_name_schema}
  */
  readonly certificateNameSchema: string;
  /**
  * Whether to write the leaf certificate followed by the chain into a single PEM file instead of a separate chain file. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#combine_certificate_chain CertificateSyncLinuxServer#combine_certificate_chain}
  */
  readonly combineCertificateChain?: boolean | cdktf.IResolvable;
  /**
  * The file format to deliver certificates in. Supported values: `pem`, `pkcs12`, `jks`. Defaults to `pem`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#export_format CertificateSyncLinuxServer#export_format}
  */
  readonly exportFormat?: string;
  /**
  * The octal file mode applied to delivered certificate files (e.g. 0644).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#file_mode CertificateSyncLinuxServer#file_mode}
  */
  readonly fileMode?: string;
  /**
  * The Linux group that should own the delivered files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#group CertificateSyncLinuxServer#group}
  */
  readonly group?: string;
  /**
  * A command run on the server to check the health of the delivered certificates. Requires a gateway on the connection. Available variables: `{{certificateFiles}}`, `{{certificateDirectory}}`, `{{certificatePath}}`, `{{commonName}}`, `{{exportPassword}}`. Using `{{certificatePath}}` or `{{commonName}}` limits the sync to one certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#health_check_command CertificateSyncLinuxServer#health_check_command}
  */
  readonly healthCheckCommand?: string;
  /**
  * Whether to deliver the certificate's private key alongside the certificate. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#include_private_key CertificateSyncLinuxServer#include_private_key}
  */
  readonly includePrivateKey?: boolean | cdktf.IResolvable;
  /**
  * Whether to include the root CA certificate in the delivered certificate chain. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#include_root_ca CertificateSyncLinuxServer#include_root_ca}
  */
  readonly includeRootCa?: boolean | cdktf.IResolvable;
  /**
  * Whether to also deliver a `<name>.truststore.jks` file holding the chain and root CA as trusted certificates. Only valid when `export_format` is `jks`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#include_truststore CertificateSyncLinuxServer#include_truststore}
  */
  readonly includeTruststore?: boolean | cdktf.IResolvable;
  /**
  * The alias of the private key entry in a PKCS#12 or JKS keystore, using only letters, digits, dots (.), dashes (-), and underscores (_). Only valid when `export_format` is `pkcs12` or `jks`, and defaults to the certificate's file base name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#keystore_alias CertificateSyncLinuxServer#keystore_alias}
  */
  readonly keystoreAlias?: string;
  /**
  * The Linux user that should own the delivered files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#owner CertificateSyncLinuxServer#owner}
  */
  readonly owner?: string;
  /**
  * The file extension of PEM certificate and chain files. Supported values: `pem`, `crt`. Defaults to `pem`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#pem_certificate_extension CertificateSyncLinuxServer#pem_certificate_extension}
  */
  readonly pemCertificateExtension?: string;
  /**
  * A command run on the server after certificates are delivered, for example to reload a service. Requires a gateway on the connection. Available variables: `{{certificateFiles}}`, `{{certificateDirectory}}`, `{{certificatePath}}`, `{{commonName}}`, `{{exportPassword}}`. Using `{{certificatePath}}` or `{{commonName}}` limits the sync to one certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#post_sync_command CertificateSyncLinuxServer#post_sync_command}
  */
  readonly postSyncCommand?: string;
  /**
  * The octal file mode applied to delivered private key files (e.g. 0600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#private_key_file_mode CertificateSyncLinuxServer#private_key_file_mode}
  */
  readonly privateKeyFileMode?: string;
}

export function certificateSyncLinuxServerSyncOptionsToTerraform(struct?: CertificateSyncLinuxServerSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_remove_certificates: cdktf.booleanToTerraform(struct!.canRemoveCertificates),
    certificate_name_schema: cdktf.stringToTerraform(struct!.certificateNameSchema),
    combine_certificate_chain: cdktf.booleanToTerraform(struct!.combineCertificateChain),
    export_format: cdktf.stringToTerraform(struct!.exportFormat),
    file_mode: cdktf.stringToTerraform(struct!.fileMode),
    group: cdktf.stringToTerraform(struct!.group),
    health_check_command: cdktf.stringToTerraform(struct!.healthCheckCommand),
    include_private_key: cdktf.booleanToTerraform(struct!.includePrivateKey),
    include_root_ca: cdktf.booleanToTerraform(struct!.includeRootCa),
    include_truststore: cdktf.booleanToTerraform(struct!.includeTruststore),
    keystore_alias: cdktf.stringToTerraform(struct!.keystoreAlias),
    owner: cdktf.stringToTerraform(struct!.owner),
    pem_certificate_extension: cdktf.stringToTerraform(struct!.pemCertificateExtension),
    post_sync_command: cdktf.stringToTerraform(struct!.postSyncCommand),
    private_key_file_mode: cdktf.stringToTerraform(struct!.privateKeyFileMode),
  }
}


export function certificateSyncLinuxServerSyncOptionsToHclTerraform(struct?: CertificateSyncLinuxServerSyncOptions | cdktf.IResolvable): any {
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
    combine_certificate_chain: {
      value: cdktf.booleanToHclTerraform(struct!.combineCertificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_format: {
      value: cdktf.stringToHclTerraform(struct!.exportFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_mode: {
      value: cdktf.stringToHclTerraform(struct!.fileMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_command: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_private_key: {
      value: cdktf.booleanToHclTerraform(struct!.includePrivateKey),
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
    include_truststore: {
      value: cdktf.booleanToHclTerraform(struct!.includeTruststore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keystore_alias: {
      value: cdktf.stringToHclTerraform(struct!.keystoreAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_certificate_extension: {
      value: cdktf.stringToHclTerraform(struct!.pemCertificateExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_sync_command: {
      value: cdktf.stringToHclTerraform(struct!.postSyncCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file_mode: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyFileMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncLinuxServerSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncLinuxServerSyncOptions | cdktf.IResolvable | undefined {
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
    if (this._combineCertificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.combineCertificateChain = this._combineCertificateChain;
    }
    if (this._exportFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportFormat = this._exportFormat;
    }
    if (this._fileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMode = this._fileMode;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._healthCheckCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckCommand = this._healthCheckCommand;
    }
    if (this._includePrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePrivateKey = this._includePrivateKey;
    }
    if (this._includeRootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRootCa = this._includeRootCa;
    }
    if (this._includeTruststore !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTruststore = this._includeTruststore;
    }
    if (this._keystoreAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoreAlias = this._keystoreAlias;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._pemCertificateExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificateExtension = this._pemCertificateExtension;
    }
    if (this._postSyncCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.postSyncCommand = this._postSyncCommand;
    }
    if (this._privateKeyFileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFileMode = this._privateKeyFileMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncLinuxServerSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = undefined;
      this._certificateNameSchema = undefined;
      this._combineCertificateChain = undefined;
      this._exportFormat = undefined;
      this._fileMode = undefined;
      this._group = undefined;
      this._healthCheckCommand = undefined;
      this._includePrivateKey = undefined;
      this._includeRootCa = undefined;
      this._includeTruststore = undefined;
      this._keystoreAlias = undefined;
      this._owner = undefined;
      this._pemCertificateExtension = undefined;
      this._postSyncCommand = undefined;
      this._privateKeyFileMode = undefined;
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
      this._combineCertificateChain = value.combineCertificateChain;
      this._exportFormat = value.exportFormat;
      this._fileMode = value.fileMode;
      this._group = value.group;
      this._healthCheckCommand = value.healthCheckCommand;
      this._includePrivateKey = value.includePrivateKey;
      this._includeRootCa = value.includeRootCa;
      this._includeTruststore = value.includeTruststore;
      this._keystoreAlias = value.keystoreAlias;
      this._owner = value.owner;
      this._pemCertificateExtension = value.pemCertificateExtension;
      this._postSyncCommand = value.postSyncCommand;
      this._privateKeyFileMode = value.privateKeyFileMode;
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

  // combine_certificate_chain - computed: true, optional: true, required: false
  private _combineCertificateChain?: boolean | cdktf.IResolvable; 
  public get combineCertificateChain() {
    return this.getBooleanAttribute('combine_certificate_chain');
  }
  public set combineCertificateChain(value: boolean | cdktf.IResolvable) {
    this._combineCertificateChain = value;
  }
  public resetCombineCertificateChain() {
    this._combineCertificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineCertificateChainInput() {
    return this._combineCertificateChain;
  }

  // export_format - computed: true, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // file_mode - computed: false, optional: true, required: false
  private _fileMode?: string; 
  public get fileMode() {
    return this.getStringAttribute('file_mode');
  }
  public set fileMode(value: string) {
    this._fileMode = value;
  }
  public resetFileMode() {
    this._fileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModeInput() {
    return this._fileMode;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // health_check_command - computed: false, optional: true, required: false
  private _healthCheckCommand?: string; 
  public get healthCheckCommand() {
    return this.getStringAttribute('health_check_command');
  }
  public set healthCheckCommand(value: string) {
    this._healthCheckCommand = value;
  }
  public resetHealthCheckCommand() {
    this._healthCheckCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCommandInput() {
    return this._healthCheckCommand;
  }

  // include_private_key - computed: true, optional: true, required: false
  private _includePrivateKey?: boolean | cdktf.IResolvable; 
  public get includePrivateKey() {
    return this.getBooleanAttribute('include_private_key');
  }
  public set includePrivateKey(value: boolean | cdktf.IResolvable) {
    this._includePrivateKey = value;
  }
  public resetIncludePrivateKey() {
    this._includePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrivateKeyInput() {
    return this._includePrivateKey;
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

  // include_truststore - computed: false, optional: true, required: false
  private _includeTruststore?: boolean | cdktf.IResolvable; 
  public get includeTruststore() {
    return this.getBooleanAttribute('include_truststore');
  }
  public set includeTruststore(value: boolean | cdktf.IResolvable) {
    this._includeTruststore = value;
  }
  public resetIncludeTruststore() {
    this._includeTruststore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTruststoreInput() {
    return this._includeTruststore;
  }

  // keystore_alias - computed: false, optional: true, required: false
  private _keystoreAlias?: string; 
  public get keystoreAlias() {
    return this.getStringAttribute('keystore_alias');
  }
  public set keystoreAlias(value: string) {
    this._keystoreAlias = value;
  }
  public resetKeystoreAlias() {
    this._keystoreAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreAliasInput() {
    return this._keystoreAlias;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // pem_certificate_extension - computed: true, optional: true, required: false
  private _pemCertificateExtension?: string; 
  public get pemCertificateExtension() {
    return this.getStringAttribute('pem_certificate_extension');
  }
  public set pemCertificateExtension(value: string) {
    this._pemCertificateExtension = value;
  }
  public resetPemCertificateExtension() {
    this._pemCertificateExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateExtensionInput() {
    return this._pemCertificateExtension;
  }

  // post_sync_command - computed: false, optional: true, required: false
  private _postSyncCommand?: string; 
  public get postSyncCommand() {
    return this.getStringAttribute('post_sync_command');
  }
  public set postSyncCommand(value: string) {
    this._postSyncCommand = value;
  }
  public resetPostSyncCommand() {
    this._postSyncCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postSyncCommandInput() {
    return this._postSyncCommand;
  }

  // private_key_file_mode - computed: false, optional: true, required: false
  private _privateKeyFileMode?: string; 
  public get privateKeyFileMode() {
    return this.getStringAttribute('private_key_file_mode');
  }
  public set privateKeyFileMode(value: string) {
    this._privateKeyFileMode = value;
  }
  public resetPrivateKeyFileMode() {
    this._privateKeyFileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileModeInput() {
    return this._privateKeyFileMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server infisical_certificate_sync_linux_server}
*/
export class CertificateSyncLinuxServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_linux_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncLinuxServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncLinuxServer to import
  * @param importFromId The id of the existing CertificateSyncLinuxServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncLinuxServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_linux_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_linux_server infisical_certificate_sync_linux_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncLinuxServerConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncLinuxServerConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_linux_server',
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
    this._exportPassword = config.exportPassword;
    this._exportPasswordWo = config.exportPasswordWo;
    this._exportPasswordWoVersion = config.exportPasswordWoVersion;
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
  private _certificateFilters = new CertificateSyncLinuxServerCertificateFiltersOutputReference(this, "certificate_filters");
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: CertificateSyncLinuxServerCertificateFilters) {
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
  private _destinationConfig = new CertificateSyncLinuxServerDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncLinuxServerDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // export_password - computed: false, optional: true, required: false
  private _exportPassword?: string; 
  public get exportPassword() {
    return this.getStringAttribute('export_password');
  }
  public set exportPassword(value: string) {
    this._exportPassword = value;
  }
  public resetExportPassword() {
    this._exportPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPasswordInput() {
    return this._exportPassword;
  }

  // export_password_wo - computed: false, optional: true, required: false
  private _exportPasswordWo?: string; 
  public get exportPasswordWo() {
    return this.getStringAttribute('export_password_wo');
  }
  public set exportPasswordWo(value: string) {
    this._exportPasswordWo = value;
  }
  public resetExportPasswordWo() {
    this._exportPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPasswordWoInput() {
    return this._exportPasswordWo;
  }

  // export_password_wo_version - computed: false, optional: true, required: false
  private _exportPasswordWoVersion?: number; 
  public get exportPasswordWoVersion() {
    return this.getNumberAttribute('export_password_wo_version');
  }
  public set exportPasswordWoVersion(value: number) {
    this._exportPasswordWoVersion = value;
  }
  public resetExportPasswordWoVersion() {
    this._exportPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPasswordWoVersionInput() {
    return this._exportPasswordWoVersion;
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
  private _syncOptions = new CertificateSyncLinuxServerSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: CertificateSyncLinuxServerSyncOptions) {
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
      certificate_filters: certificateSyncLinuxServerCertificateFiltersToTerraform(this._certificateFilters.internalValue),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncLinuxServerDestinationConfigToTerraform(this._destinationConfig.internalValue),
      export_password: cdktf.stringToTerraform(this._exportPassword),
      export_password_wo: cdktf.stringToTerraform(this._exportPasswordWo),
      export_password_wo_version: cdktf.numberToTerraform(this._exportPasswordWoVersion),
      name: cdktf.stringToTerraform(this._name),
      sync_options: certificateSyncLinuxServerSyncOptionsToTerraform(this._syncOptions.internalValue),
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
        value: certificateSyncLinuxServerCertificateFiltersToHclTerraform(this._certificateFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncLinuxServerCertificateFilters",
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
        value: certificateSyncLinuxServerDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncLinuxServerDestinationConfig",
      },
      export_password: {
        value: cdktf.stringToHclTerraform(this._exportPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_password_wo: {
        value: cdktf.stringToHclTerraform(this._exportPasswordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_password_wo_version: {
        value: cdktf.numberToHclTerraform(this._exportPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: certificateSyncLinuxServerSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncLinuxServerSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
