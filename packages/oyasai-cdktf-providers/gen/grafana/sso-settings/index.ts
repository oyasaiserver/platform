// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#id SsoSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the SSO provider. Supported values: github, gitlab, google, azuread, okta, generic_oauth, saml, ldap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#provider_name SsoSettings#provider_name}
  */
  readonly providerName: string;
  /**
  * ldap_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#ldap_settings SsoSettings#ldap_settings}
  */
  readonly ldapSettings?: SsoSettingsLdapSettings;
  /**
  * oauth2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#oauth2_settings SsoSettings#oauth2_settings}
  */
  readonly oauth2Settings?: SsoSettingsOauth2Settings;
  /**
  * saml_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#saml_settings SsoSettings#saml_settings}
  */
  readonly samlSettings?: SsoSettingsSamlSettings;
}
export interface SsoSettingsLdapSettingsConfigServersGroupMappings {
  /**
  * If set to true, it makes the user of group_dn Grafana server admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#grafana_admin SsoSettings#grafana_admin}
  */
  readonly grafanaAdmin?: boolean | cdktf.IResolvable;
  /**
  * LDAP distinguished name (DN) of LDAP group. If you want to match all (or no LDAP groups) then you can use wildcard ("*").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#group_dn SsoSettings#group_dn}
  */
  readonly groupDn: string;
  /**
  * The Grafana organization database id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#org_id SsoSettings#org_id}
  */
  readonly orgId?: number;
  /**
  * Assign users of group_dn the organization role Admin, Editor, or Viewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#org_role SsoSettings#org_role}
  */
  readonly orgRole: string;
}

export function ssoSettingsLdapSettingsConfigServersGroupMappingsToTerraform(struct?: SsoSettingsLdapSettingsConfigServersGroupMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grafana_admin: cdktf.booleanToTerraform(struct!.grafanaAdmin),
    group_dn: cdktf.stringToTerraform(struct!.groupDn),
    org_id: cdktf.numberToTerraform(struct!.orgId),
    org_role: cdktf.stringToTerraform(struct!.orgRole),
  }
}


export function ssoSettingsLdapSettingsConfigServersGroupMappingsToHclTerraform(struct?: SsoSettingsLdapSettingsConfigServersGroupMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grafana_admin: {
      value: cdktf.booleanToHclTerraform(struct!.grafanaAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.numberToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    org_role: {
      value: cdktf.stringToHclTerraform(struct!.orgRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsoSettingsLdapSettingsConfigServersGroupMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grafanaAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaAdmin = this._grafanaAdmin;
    }
    if (this._groupDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDn = this._groupDn;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._orgRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgRole = this._orgRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoSettingsLdapSettingsConfigServersGroupMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grafanaAdmin = undefined;
      this._groupDn = undefined;
      this._orgId = undefined;
      this._orgRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grafanaAdmin = value.grafanaAdmin;
      this._groupDn = value.groupDn;
      this._orgId = value.orgId;
      this._orgRole = value.orgRole;
    }
  }

  // grafana_admin - computed: false, optional: true, required: false
  private _grafanaAdmin?: boolean | cdktf.IResolvable; 
  public get grafanaAdmin() {
    return this.getBooleanAttribute('grafana_admin');
  }
  public set grafanaAdmin(value: boolean | cdktf.IResolvable) {
    this._grafanaAdmin = value;
  }
  public resetGrafanaAdmin() {
    this._grafanaAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaAdminInput() {
    return this._grafanaAdmin;
  }

  // group_dn - computed: false, optional: false, required: true
  private _groupDn?: string; 
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }
  public set groupDn(value: string) {
    this._groupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // org_role - computed: false, optional: false, required: true
  private _orgRole?: string; 
  public get orgRole() {
    return this.getStringAttribute('org_role');
  }
  public set orgRole(value: string) {
    this._orgRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgRoleInput() {
    return this._orgRole;
  }
}

export class SsoSettingsLdapSettingsConfigServersGroupMappingsList extends cdktf.ComplexList {
  public internalValue? : SsoSettingsLdapSettingsConfigServersGroupMappings[] | cdktf.IResolvable

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
  public get(index: number): SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference {
    return new SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsoSettingsLdapSettingsConfigServers {
  /**
  * The LDAP server attributes. The following attributes can be configured: email, member_of, name, surname, username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#attributes SsoSettings#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * The search user bind DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#bind_dn SsoSettings#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * The search user bind password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#bind_password SsoSettings#bind_password}
  */
  readonly bindPassword?: string;
  /**
  * The path to the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_cert SsoSettings#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The Base64 encoded value of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_cert_value SsoSettings#client_cert_value}
  */
  readonly clientCertValue?: string;
  /**
  * The path to the client private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_key SsoSettings#client_key}
  */
  readonly clientKey?: string;
  /**
  * The Base64 encoded value of the client private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_key_value SsoSettings#client_key_value}
  */
  readonly clientKeyValue?: string;
  /**
  * An array of the base DNs to search through for groups. Typically uses ou=groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#group_search_base_dns SsoSettings#group_search_base_dns}
  */
  readonly groupSearchBaseDns?: string[];
  /**
  * Group search filter, to retrieve the groups of which the user is a member (only set if memberOf attribute is not available).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#group_search_filter SsoSettings#group_search_filter}
  */
  readonly groupSearchFilter?: string;
  /**
  * The %s in the search filter will be replaced with the attribute defined in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#group_search_filter_user_attribute SsoSettings#group_search_filter_user_attribute}
  */
  readonly groupSearchFilterUserAttribute?: string;
  /**
  * The LDAP server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#host SsoSettings#host}
  */
  readonly host: string;
  /**
  * Minimum TLS version allowed. Accepted values are: TLS1.2, TLS1.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#min_tls_version SsoSettings#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * The LDAP server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#port SsoSettings#port}
  */
  readonly port?: number;
  /**
  * The path to the root CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#root_ca_cert SsoSettings#root_ca_cert}
  */
  readonly rootCaCert?: string;
  /**
  * The Base64 encoded values of the root CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#root_ca_cert_value SsoSettings#root_ca_cert_value}
  */
  readonly rootCaCertValue?: string[];
  /**
  * An array of base DNs to search through.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#search_base_dns SsoSettings#search_base_dns}
  */
  readonly searchBaseDns: string[];
  /**
  * The user search filter, for example "(cn=%s)" or "(sAMAccountName=%s)" or "(uid=%s)".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#search_filter SsoSettings#search_filter}
  */
  readonly searchFilter: string;
  /**
  * If set to true, the SSL cert validation will be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#ssl_skip_verify SsoSettings#ssl_skip_verify}
  */
  readonly sslSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * If set to true, use LDAP with STARTTLS instead of LDAPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#start_tls SsoSettings#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * The timeout in seconds for connecting to the LDAP host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#timeout SsoSettings#timeout}
  */
  readonly timeout?: number;
  /**
  * Accepted TLS ciphers. For a complete list of supported ciphers, refer to: https://go.dev/src/crypto/tls/cipher_suites.go.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#tls_ciphers SsoSettings#tls_ciphers}
  */
  readonly tlsCiphers?: string[];
  /**
  * Set to true if LDAP server should use an encrypted TLS connection (either with STARTTLS or LDAPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#use_ssl SsoSettings#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * group_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#group_mappings SsoSettings#group_mappings}
  */
  readonly groupMappings?: SsoSettingsLdapSettingsConfigServersGroupMappings[] | cdktf.IResolvable;
}

export function ssoSettingsLdapSettingsConfigServersToTerraform(struct?: SsoSettingsLdapSettingsConfigServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    bind_dn: cdktf.stringToTerraform(struct!.bindDn),
    bind_password: cdktf.stringToTerraform(struct!.bindPassword),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_cert_value: cdktf.stringToTerraform(struct!.clientCertValue),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    client_key_value: cdktf.stringToTerraform(struct!.clientKeyValue),
    group_search_base_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupSearchBaseDns),
    group_search_filter: cdktf.stringToTerraform(struct!.groupSearchFilter),
    group_search_filter_user_attribute: cdktf.stringToTerraform(struct!.groupSearchFilterUserAttribute),
    host: cdktf.stringToTerraform(struct!.host),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    port: cdktf.numberToTerraform(struct!.port),
    root_ca_cert: cdktf.stringToTerraform(struct!.rootCaCert),
    root_ca_cert_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootCaCertValue),
    search_base_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchBaseDns),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    ssl_skip_verify: cdktf.booleanToTerraform(struct!.sslSkipVerify),
    start_tls: cdktf.booleanToTerraform(struct!.startTls),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsCiphers),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    group_mappings: cdktf.listMapper(ssoSettingsLdapSettingsConfigServersGroupMappingsToTerraform, true)(struct!.groupMappings),
  }
}


export function ssoSettingsLdapSettingsConfigServersToHclTerraform(struct?: SsoSettingsLdapSettingsConfigServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.bindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_password: {
      value: cdktf.stringToHclTerraform(struct!.bindPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_value: {
      value: cdktf.stringToHclTerraform(struct!.clientCertValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_value: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_search_base_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupSearchBaseDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_search_filter: {
      value: cdktf.stringToHclTerraform(struct!.groupSearchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_search_filter_user_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupSearchFilterUserAttribute),
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
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
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
    root_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.rootCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_ca_cert_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootCaCertValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_base_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchBaseDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.startTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsCiphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_mappings: {
      value: cdktf.listMapperHcl(ssoSettingsLdapSettingsConfigServersGroupMappingsToHclTerraform, true)(struct!.groupMappings),
      isBlock: true,
      type: "list",
      storageClassType: "SsoSettingsLdapSettingsConfigServersGroupMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoSettingsLdapSettingsConfigServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsoSettingsLdapSettingsConfigServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._bindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindDn = this._bindDn;
    }
    if (this._bindPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPassword = this._bindPassword;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientCertValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertValue = this._clientCertValue;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._clientKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyValue = this._clientKeyValue;
    }
    if (this._groupSearchBaseDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchBaseDns = this._groupSearchBaseDns;
    }
    if (this._groupSearchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchFilter = this._groupSearchFilter;
    }
    if (this._groupSearchFilterUserAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchFilterUserAttribute = this._groupSearchFilterUserAttribute;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._rootCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCaCert = this._rootCaCert;
    }
    if (this._rootCaCertValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCaCertValue = this._rootCaCertValue;
    }
    if (this._searchBaseDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBaseDns = this._searchBaseDns;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._sslSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSkipVerify = this._sslSkipVerify;
    }
    if (this._startTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTls = this._startTls;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCiphers = this._tlsCiphers;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._groupMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMappings = this._groupMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoSettingsLdapSettingsConfigServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._bindDn = undefined;
      this._bindPassword = undefined;
      this._clientCert = undefined;
      this._clientCertValue = undefined;
      this._clientKey = undefined;
      this._clientKeyValue = undefined;
      this._groupSearchBaseDns = undefined;
      this._groupSearchFilter = undefined;
      this._groupSearchFilterUserAttribute = undefined;
      this._host = undefined;
      this._minTlsVersion = undefined;
      this._port = undefined;
      this._rootCaCert = undefined;
      this._rootCaCertValue = undefined;
      this._searchBaseDns = undefined;
      this._searchFilter = undefined;
      this._sslSkipVerify = undefined;
      this._startTls = undefined;
      this._timeout = undefined;
      this._tlsCiphers = undefined;
      this._useSsl = undefined;
      this._groupMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._bindDn = value.bindDn;
      this._bindPassword = value.bindPassword;
      this._clientCert = value.clientCert;
      this._clientCertValue = value.clientCertValue;
      this._clientKey = value.clientKey;
      this._clientKeyValue = value.clientKeyValue;
      this._groupSearchBaseDns = value.groupSearchBaseDns;
      this._groupSearchFilter = value.groupSearchFilter;
      this._groupSearchFilterUserAttribute = value.groupSearchFilterUserAttribute;
      this._host = value.host;
      this._minTlsVersion = value.minTlsVersion;
      this._port = value.port;
      this._rootCaCert = value.rootCaCert;
      this._rootCaCertValue = value.rootCaCertValue;
      this._searchBaseDns = value.searchBaseDns;
      this._searchFilter = value.searchFilter;
      this._sslSkipVerify = value.sslSkipVerify;
      this._startTls = value.startTls;
      this._timeout = value.timeout;
      this._tlsCiphers = value.tlsCiphers;
      this._useSsl = value.useSsl;
      this._groupMappings.internalValue = value.groupMappings;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: false, optional: true, required: false
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  public resetBindPassword() {
    this._bindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_cert_value - computed: false, optional: true, required: false
  private _clientCertValue?: string; 
  public get clientCertValue() {
    return this.getStringAttribute('client_cert_value');
  }
  public set clientCertValue(value: string) {
    this._clientCertValue = value;
  }
  public resetClientCertValue() {
    this._clientCertValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertValueInput() {
    return this._clientCertValue;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_value - computed: false, optional: true, required: false
  private _clientKeyValue?: string; 
  public get clientKeyValue() {
    return this.getStringAttribute('client_key_value');
  }
  public set clientKeyValue(value: string) {
    this._clientKeyValue = value;
  }
  public resetClientKeyValue() {
    this._clientKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyValueInput() {
    return this._clientKeyValue;
  }

  // group_search_base_dns - computed: false, optional: true, required: false
  private _groupSearchBaseDns?: string[]; 
  public get groupSearchBaseDns() {
    return this.getListAttribute('group_search_base_dns');
  }
  public set groupSearchBaseDns(value: string[]) {
    this._groupSearchBaseDns = value;
  }
  public resetGroupSearchBaseDns() {
    this._groupSearchBaseDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchBaseDnsInput() {
    return this._groupSearchBaseDns;
  }

  // group_search_filter - computed: false, optional: true, required: false
  private _groupSearchFilter?: string; 
  public get groupSearchFilter() {
    return this.getStringAttribute('group_search_filter');
  }
  public set groupSearchFilter(value: string) {
    this._groupSearchFilter = value;
  }
  public resetGroupSearchFilter() {
    this._groupSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchFilterInput() {
    return this._groupSearchFilter;
  }

  // group_search_filter_user_attribute - computed: false, optional: true, required: false
  private _groupSearchFilterUserAttribute?: string; 
  public get groupSearchFilterUserAttribute() {
    return this.getStringAttribute('group_search_filter_user_attribute');
  }
  public set groupSearchFilterUserAttribute(value: string) {
    this._groupSearchFilterUserAttribute = value;
  }
  public resetGroupSearchFilterUserAttribute() {
    this._groupSearchFilterUserAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchFilterUserAttributeInput() {
    return this._groupSearchFilterUserAttribute;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // root_ca_cert - computed: false, optional: true, required: false
  private _rootCaCert?: string; 
  public get rootCaCert() {
    return this.getStringAttribute('root_ca_cert');
  }
  public set rootCaCert(value: string) {
    this._rootCaCert = value;
  }
  public resetRootCaCert() {
    this._rootCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaCertInput() {
    return this._rootCaCert;
  }

  // root_ca_cert_value - computed: false, optional: true, required: false
  private _rootCaCertValue?: string[]; 
  public get rootCaCertValue() {
    return this.getListAttribute('root_ca_cert_value');
  }
  public set rootCaCertValue(value: string[]) {
    this._rootCaCertValue = value;
  }
  public resetRootCaCertValue() {
    this._rootCaCertValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaCertValueInput() {
    return this._rootCaCertValue;
  }

  // search_base_dns - computed: false, optional: false, required: true
  private _searchBaseDns?: string[]; 
  public get searchBaseDns() {
    return this.getListAttribute('search_base_dns');
  }
  public set searchBaseDns(value: string[]) {
    this._searchBaseDns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseDnsInput() {
    return this._searchBaseDns;
  }

  // search_filter - computed: false, optional: false, required: true
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // ssl_skip_verify - computed: false, optional: true, required: false
  private _sslSkipVerify?: boolean | cdktf.IResolvable; 
  public get sslSkipVerify() {
    return this.getBooleanAttribute('ssl_skip_verify');
  }
  public set sslSkipVerify(value: boolean | cdktf.IResolvable) {
    this._sslSkipVerify = value;
  }
  public resetSslSkipVerify() {
    this._sslSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSkipVerifyInput() {
    return this._sslSkipVerify;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_ciphers - computed: false, optional: true, required: false
  private _tlsCiphers?: string[]; 
  public get tlsCiphers() {
    return this.getListAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string[]) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // group_mappings - computed: false, optional: true, required: false
  private _groupMappings = new SsoSettingsLdapSettingsConfigServersGroupMappingsList(this, "group_mappings", false);
  public get groupMappings() {
    return this._groupMappings;
  }
  public putGroupMappings(value: SsoSettingsLdapSettingsConfigServersGroupMappings[] | cdktf.IResolvable) {
    this._groupMappings.internalValue = value;
  }
  public resetGroupMappings() {
    this._groupMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMappingsInput() {
    return this._groupMappings.internalValue;
  }
}

export class SsoSettingsLdapSettingsConfigServersList extends cdktf.ComplexList {
  public internalValue? : SsoSettingsLdapSettingsConfigServers[] | cdktf.IResolvable

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
  public get(index: number): SsoSettingsLdapSettingsConfigServersOutputReference {
    return new SsoSettingsLdapSettingsConfigServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsoSettingsLdapSettingsConfig {
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#servers SsoSettings#servers}
  */
  readonly servers: SsoSettingsLdapSettingsConfigServers[] | cdktf.IResolvable;
}

export function ssoSettingsLdapSettingsConfigToTerraform(struct?: SsoSettingsLdapSettingsConfigOutputReference | SsoSettingsLdapSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    servers: cdktf.listMapper(ssoSettingsLdapSettingsConfigServersToTerraform, true)(struct!.servers),
  }
}


export function ssoSettingsLdapSettingsConfigToHclTerraform(struct?: SsoSettingsLdapSettingsConfigOutputReference | SsoSettingsLdapSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    servers: {
      value: cdktf.listMapperHcl(ssoSettingsLdapSettingsConfigServersToHclTerraform, true)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "SsoSettingsLdapSettingsConfigServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoSettingsLdapSettingsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoSettingsLdapSettingsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoSettingsLdapSettingsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servers.internalValue = value.servers;
    }
  }

  // servers - computed: false, optional: false, required: true
  private _servers = new SsoSettingsLdapSettingsConfigServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: SsoSettingsLdapSettingsConfigServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}
export interface SsoSettingsLdapSettings {
  /**
  * Whether to allow new Grafana user creation through LDAP login. If set to false, then only existing Grafana users can log in with LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allow_sign_up SsoSettings#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * Define whether this configuration is enabled for LDAP. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#enabled SsoSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Prevent synchronizing users’ organization roles from LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#skip_org_role_sync SsoSettings#skip_org_role_sync}
  */
  readonly skipOrgRoleSync?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#config SsoSettings#config}
  */
  readonly config: SsoSettingsLdapSettingsConfig;
}

export function ssoSettingsLdapSettingsToTerraform(struct?: SsoSettingsLdapSettingsOutputReference | SsoSettingsLdapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    skip_org_role_sync: cdktf.booleanToTerraform(struct!.skipOrgRoleSync),
    config: ssoSettingsLdapSettingsConfigToTerraform(struct!.config),
  }
}


export function ssoSettingsLdapSettingsToHclTerraform(struct?: SsoSettingsLdapSettingsOutputReference | SsoSettingsLdapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_org_role_sync: {
      value: cdktf.booleanToHclTerraform(struct!.skipOrgRoleSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: ssoSettingsLdapSettingsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "SsoSettingsLdapSettingsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoSettingsLdapSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoSettingsLdapSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._skipOrgRoleSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipOrgRoleSync = this._skipOrgRoleSync;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoSettingsLdapSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSignUp = undefined;
      this._enabled = undefined;
      this._skipOrgRoleSync = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSignUp = value.allowSignUp;
      this._enabled = value.enabled;
      this._skipOrgRoleSync = value.skipOrgRoleSync;
      this._config.internalValue = value.config;
    }
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // skip_org_role_sync - computed: false, optional: true, required: false
  private _skipOrgRoleSync?: boolean | cdktf.IResolvable; 
  public get skipOrgRoleSync() {
    return this.getBooleanAttribute('skip_org_role_sync');
  }
  public set skipOrgRoleSync(value: boolean | cdktf.IResolvable) {
    this._skipOrgRoleSync = value;
  }
  public resetSkipOrgRoleSync() {
    this._skipOrgRoleSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOrgRoleSyncInput() {
    return this._skipOrgRoleSync;
  }

  // config - computed: false, optional: false, required: true
  private _config = new SsoSettingsLdapSettingsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SsoSettingsLdapSettingsConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface SsoSettingsOauth2Settings {
  /**
  * If enabled, it will automatically sync the Grafana server administrator role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allow_assign_grafana_admin SsoSettings#allow_assign_grafana_admin}
  */
  readonly allowAssignGrafanaAdmin?: boolean | cdktf.IResolvable;
  /**
  * If not enabled, only existing Grafana users can log in using OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allow_sign_up SsoSettings#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * List of comma- or space-separated domains. The user should belong to at least one domain to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allowed_domains SsoSettings#allowed_domains}
  */
  readonly allowedDomains?: string;
  /**
  * List of comma- or space-separated groups. The user should be a member of at least one group to log in. For Generic OAuth, if you configure allowed_groups, you must also configure groups_attribute_path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allowed_groups SsoSettings#allowed_groups}
  */
  readonly allowedGroups?: string;
  /**
  * List of comma- or space-separated organizations. The user should be a member of at least one organization to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allowed_organizations SsoSettings#allowed_organizations}
  */
  readonly allowedOrganizations?: string;
  /**
  * The user information endpoint of your OAuth2 provider. Required for okta and generic_oauth providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#api_url SsoSettings#api_url}
  */
  readonly apiUrl?: string;
  /**
  * It determines how client_id and client_secret are sent to Oauth2 provider. Possible values are AutoDetect, InParams, InHeader. Default is AutoDetect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#auth_style SsoSettings#auth_style}
  */
  readonly authStyle?: string;
  /**
  * The authorization endpoint of your OAuth2 provider. Required for azuread, okta and generic_oauth providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#auth_url SsoSettings#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Log in automatically, skipping the login screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#auto_login SsoSettings#auto_login}
  */
  readonly autoLogin?: boolean | cdktf.IResolvable;
  /**
  * The client Id of your OAuth2 app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_id SsoSettings#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret of your OAuth2 app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_secret SsoSettings#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Custom fields to configure for OAuth2 such as the [force_use_graph_api](https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-authentication/azuread/#force-fetching-groups-from-microsoft-graph-api) field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#custom SsoSettings#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * Define allowed groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#define_allowed_groups SsoSettings#define_allowed_groups}
  */
  readonly defineAllowedGroups?: boolean | cdktf.IResolvable;
  /**
  * Define allowed teams ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#define_allowed_teams_ids SsoSettings#define_allowed_teams_ids}
  */
  readonly defineAllowedTeamsIds?: boolean | cdktf.IResolvable;
  /**
  * Name of the key to use for user email lookup within the attributes map of OAuth2 ID token. Only applicable to Generic OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#email_attribute_name SsoSettings#email_attribute_name}
  */
  readonly emailAttributeName?: string;
  /**
  * JMESPath expression to use for user email lookup from the user information. Only applicable to Generic OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#email_attribute_path SsoSettings#email_attribute_path}
  */
  readonly emailAttributePath?: string;
  /**
  * If enabled, no scopes will be sent to the OAuth2 provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#empty_scopes SsoSettings#empty_scopes}
  */
  readonly emptyScopes?: boolean | cdktf.IResolvable;
  /**
  * Define whether this configuration is enabled for the specified provider. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#enabled SsoSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * JMESPath expression to use for user group lookup. If you configure allowed_groups, you must also configure groups_attribute_path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#groups_attribute_path SsoSettings#groups_attribute_path}
  */
  readonly groupsAttributePath?: string;
  /**
  * The name of the key used to extract the ID token from the returned OAuth2 token. Only applicable to Generic OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#id_token_attribute_name SsoSettings#id_token_attribute_name}
  */
  readonly idTokenAttributeName?: string;
  /**
  * JMESPath expression to use for user login lookup from the user ID token. Only applicable to Generic OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#login_attribute_path SsoSettings#login_attribute_path}
  */
  readonly loginAttributePath?: string;
  /**
  * Indicates the type of user interaction when the user logs in with the IdP. Available values are `login`, `consent` and `select_account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#login_prompt SsoSettings#login_prompt}
  */
  readonly loginPrompt?: string;
  /**
  * Helpful if you use more than one identity providers or SSO protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#name SsoSettings#name}
  */
  readonly name?: string;
  /**
  * JMESPath expression to use for user name lookup from the user ID token. This name will be used as the user’s display name. Only applicable to Generic OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#name_attribute_path SsoSettings#name_attribute_path}
  */
  readonly nameAttributePath?: string;
  /**
  * JMESPath expression to use for the organization mapping lookup from the user ID token. The extracted list will be used for the organization mapping (to match "Organization" in the "org_mapping"). Only applicable to Generic OAuth and Okta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#org_attribute_path SsoSettings#org_attribute_path}
  */
  readonly orgAttributePath?: string;
  /**
  * List of comma- or space-separated Organization:OrgIdOrOrgName:Role mappings. Organization can be * meaning “All users”. Role is optional and can have the following values: None, Viewer, Editor or Admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#org_mapping SsoSettings#org_mapping}
  */
  readonly orgMapping?: string;
  /**
  * JMESPath expression to use for Grafana role lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#role_attribute_path SsoSettings#role_attribute_path}
  */
  readonly roleAttributePath?: string;
  /**
  * If enabled, denies user login if the Grafana role cannot be extracted using Role attribute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#role_attribute_strict SsoSettings#role_attribute_strict}
  */
  readonly roleAttributeStrict?: boolean | cdktf.IResolvable;
  /**
  * List of comma- or space-separated OAuth2 scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#scopes SsoSettings#scopes}
  */
  readonly scopes?: string;
  /**
  * The URL to redirect the user to after signing out from Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#signout_redirect_url SsoSettings#signout_redirect_url}
  */
  readonly signoutRedirectUrl?: string;
  /**
  * Prevent synchronizing users’ organization roles from your IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#skip_org_role_sync SsoSettings#skip_org_role_sync}
  */
  readonly skipOrgRoleSync?: boolean | cdktf.IResolvable;
  /**
  * String list of Team Ids. If set, the user must be a member of one of the given teams to log in. If you configure team_ids, you must also configure teams_url and team_ids_attribute_path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#team_ids SsoSettings#team_ids}
  */
  readonly teamIds?: string;
  /**
  * The JMESPath expression to use for Grafana Team Id lookup within the results returned by the teams_url endpoint. Only applicable to Generic OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#team_ids_attribute_path SsoSettings#team_ids_attribute_path}
  */
  readonly teamIdsAttributePath?: string;
  /**
  * The URL used to query for Team Ids. If not set, the default value is /teams. If you configure teams_url, you must also configure team_ids_attribute_path. Only applicable to Generic OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#teams_url SsoSettings#teams_url}
  */
  readonly teamsUrl?: string;
  /**
  * The path to the trusted certificate authority list. Is not applicable on Grafana Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#tls_client_ca SsoSettings#tls_client_ca}
  */
  readonly tlsClientCa?: string;
  /**
  * The path to the certificate. Is not applicable on Grafana Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#tls_client_cert SsoSettings#tls_client_cert}
  */
  readonly tlsClientCert?: string;
  /**
  * The path to the key. Is not applicable on Grafana Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#tls_client_key SsoSettings#tls_client_key}
  */
  readonly tlsClientKey?: string;
  /**
  * If enabled, the client accepts any certificate presented by the server and any host name in that certificate. You should only use this for testing, because this mode leaves SSL/TLS susceptible to man-in-the-middle attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#tls_skip_verify_insecure SsoSettings#tls_skip_verify_insecure}
  */
  readonly tlsSkipVerifyInsecure?: boolean | cdktf.IResolvable;
  /**
  * The token endpoint of your OAuth2 provider. Required for azuread, okta and generic_oauth providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#token_url SsoSettings#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * If enabled, Grafana will use Proof Key for Code Exchange (PKCE) with the OAuth2 Authorization Code Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#use_pkce SsoSettings#use_pkce}
  */
  readonly usePkce?: boolean | cdktf.IResolvable;
  /**
  * If enabled, Grafana will fetch a new access token using the refresh token provided by the OAuth2 provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#use_refresh_token SsoSettings#use_refresh_token}
  */
  readonly useRefreshToken?: boolean | cdktf.IResolvable;
}

export function ssoSettingsOauth2SettingsToTerraform(struct?: SsoSettingsOauth2SettingsOutputReference | SsoSettingsOauth2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_assign_grafana_admin: cdktf.booleanToTerraform(struct!.allowAssignGrafanaAdmin),
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    allowed_domains: cdktf.stringToTerraform(struct!.allowedDomains),
    allowed_groups: cdktf.stringToTerraform(struct!.allowedGroups),
    allowed_organizations: cdktf.stringToTerraform(struct!.allowedOrganizations),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    auth_style: cdktf.stringToTerraform(struct!.authStyle),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    auto_login: cdktf.booleanToTerraform(struct!.autoLogin),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    custom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.custom),
    define_allowed_groups: cdktf.booleanToTerraform(struct!.defineAllowedGroups),
    define_allowed_teams_ids: cdktf.booleanToTerraform(struct!.defineAllowedTeamsIds),
    email_attribute_name: cdktf.stringToTerraform(struct!.emailAttributeName),
    email_attribute_path: cdktf.stringToTerraform(struct!.emailAttributePath),
    empty_scopes: cdktf.booleanToTerraform(struct!.emptyScopes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    groups_attribute_path: cdktf.stringToTerraform(struct!.groupsAttributePath),
    id_token_attribute_name: cdktf.stringToTerraform(struct!.idTokenAttributeName),
    login_attribute_path: cdktf.stringToTerraform(struct!.loginAttributePath),
    login_prompt: cdktf.stringToTerraform(struct!.loginPrompt),
    name: cdktf.stringToTerraform(struct!.name),
    name_attribute_path: cdktf.stringToTerraform(struct!.nameAttributePath),
    org_attribute_path: cdktf.stringToTerraform(struct!.orgAttributePath),
    org_mapping: cdktf.stringToTerraform(struct!.orgMapping),
    role_attribute_path: cdktf.stringToTerraform(struct!.roleAttributePath),
    role_attribute_strict: cdktf.booleanToTerraform(struct!.roleAttributeStrict),
    scopes: cdktf.stringToTerraform(struct!.scopes),
    signout_redirect_url: cdktf.stringToTerraform(struct!.signoutRedirectUrl),
    skip_org_role_sync: cdktf.booleanToTerraform(struct!.skipOrgRoleSync),
    team_ids: cdktf.stringToTerraform(struct!.teamIds),
    team_ids_attribute_path: cdktf.stringToTerraform(struct!.teamIdsAttributePath),
    teams_url: cdktf.stringToTerraform(struct!.teamsUrl),
    tls_client_ca: cdktf.stringToTerraform(struct!.tlsClientCa),
    tls_client_cert: cdktf.stringToTerraform(struct!.tlsClientCert),
    tls_client_key: cdktf.stringToTerraform(struct!.tlsClientKey),
    tls_skip_verify_insecure: cdktf.booleanToTerraform(struct!.tlsSkipVerifyInsecure),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    use_pkce: cdktf.booleanToTerraform(struct!.usePkce),
    use_refresh_token: cdktf.booleanToTerraform(struct!.useRefreshToken),
  }
}


export function ssoSettingsOauth2SettingsToHclTerraform(struct?: SsoSettingsOauth2SettingsOutputReference | SsoSettingsOauth2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_assign_grafana_admin: {
      value: cdktf.booleanToHclTerraform(struct!.allowAssignGrafanaAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains: {
      value: cdktf.stringToHclTerraform(struct!.allowedDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_groups: {
      value: cdktf.stringToHclTerraform(struct!.allowedGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_organizations: {
      value: cdktf.stringToHclTerraform(struct!.allowedOrganizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_style: {
      value: cdktf.stringToHclTerraform(struct!.authStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_login: {
      value: cdktf.booleanToHclTerraform(struct!.autoLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.custom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    define_allowed_groups: {
      value: cdktf.booleanToHclTerraform(struct!.defineAllowedGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    define_allowed_teams_ids: {
      value: cdktf.booleanToHclTerraform(struct!.defineAllowedTeamsIds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.emailAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.emailAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_scopes: {
      value: cdktf.booleanToHclTerraform(struct!.emptyScopes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.groupsAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.idTokenAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.loginAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_prompt: {
      value: cdktf.stringToHclTerraform(struct!.loginPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.nameAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.orgAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_mapping: {
      value: cdktf.stringToHclTerraform(struct!.orgMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.roleAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_attribute_strict: {
      value: cdktf.booleanToHclTerraform(struct!.roleAttributeStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signout_redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.signoutRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_org_role_sync: {
      value: cdktf.booleanToHclTerraform(struct!.skipOrgRoleSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    team_ids: {
      value: cdktf.stringToHclTerraform(struct!.teamIds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_ids_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.teamIdsAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    teams_url: {
      value: cdktf.stringToHclTerraform(struct!.teamsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_ca: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_skip_verify_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.tlsSkipVerifyInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pkce: {
      value: cdktf.booleanToHclTerraform(struct!.usePkce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_refresh_token: {
      value: cdktf.booleanToHclTerraform(struct!.useRefreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoSettingsOauth2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoSettingsOauth2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAssignGrafanaAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAssignGrafanaAdmin = this._allowAssignGrafanaAdmin;
    }
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._allowedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroups = this._allowedGroups;
    }
    if (this._allowedOrganizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrganizations = this._allowedOrganizations;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._authStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStyle = this._authStyle;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._autoLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogin = this._autoLogin;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._defineAllowedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.defineAllowedGroups = this._defineAllowedGroups;
    }
    if (this._defineAllowedTeamsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.defineAllowedTeamsIds = this._defineAllowedTeamsIds;
    }
    if (this._emailAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAttributeName = this._emailAttributeName;
    }
    if (this._emailAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAttributePath = this._emailAttributePath;
    }
    if (this._emptyScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyScopes = this._emptyScopes;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupsAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsAttributePath = this._groupsAttributePath;
    }
    if (this._idTokenAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenAttributeName = this._idTokenAttributeName;
    }
    if (this._loginAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAttributePath = this._loginAttributePath;
    }
    if (this._loginPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPrompt = this._loginPrompt;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAttributePath = this._nameAttributePath;
    }
    if (this._orgAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgAttributePath = this._orgAttributePath;
    }
    if (this._orgMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgMapping = this._orgMapping;
    }
    if (this._roleAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleAttributePath = this._roleAttributePath;
    }
    if (this._roleAttributeStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleAttributeStrict = this._roleAttributeStrict;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._signoutRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.signoutRedirectUrl = this._signoutRedirectUrl;
    }
    if (this._skipOrgRoleSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipOrgRoleSync = this._skipOrgRoleSync;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    if (this._teamIdsAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIdsAttributePath = this._teamIdsAttributePath;
    }
    if (this._teamsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsUrl = this._teamsUrl;
    }
    if (this._tlsClientCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCa = this._tlsClientCa;
    }
    if (this._tlsClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert;
    }
    if (this._tlsClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey;
    }
    if (this._tlsSkipVerifyInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSkipVerifyInsecure = this._tlsSkipVerifyInsecure;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._usePkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePkce = this._usePkce;
    }
    if (this._useRefreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRefreshToken = this._useRefreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoSettingsOauth2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAssignGrafanaAdmin = undefined;
      this._allowSignUp = undefined;
      this._allowedDomains = undefined;
      this._allowedGroups = undefined;
      this._allowedOrganizations = undefined;
      this._apiUrl = undefined;
      this._authStyle = undefined;
      this._authUrl = undefined;
      this._autoLogin = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._custom = undefined;
      this._defineAllowedGroups = undefined;
      this._defineAllowedTeamsIds = undefined;
      this._emailAttributeName = undefined;
      this._emailAttributePath = undefined;
      this._emptyScopes = undefined;
      this._enabled = undefined;
      this._groupsAttributePath = undefined;
      this._idTokenAttributeName = undefined;
      this._loginAttributePath = undefined;
      this._loginPrompt = undefined;
      this._name = undefined;
      this._nameAttributePath = undefined;
      this._orgAttributePath = undefined;
      this._orgMapping = undefined;
      this._roleAttributePath = undefined;
      this._roleAttributeStrict = undefined;
      this._scopes = undefined;
      this._signoutRedirectUrl = undefined;
      this._skipOrgRoleSync = undefined;
      this._teamIds = undefined;
      this._teamIdsAttributePath = undefined;
      this._teamsUrl = undefined;
      this._tlsClientCa = undefined;
      this._tlsClientCert = undefined;
      this._tlsClientKey = undefined;
      this._tlsSkipVerifyInsecure = undefined;
      this._tokenUrl = undefined;
      this._usePkce = undefined;
      this._useRefreshToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAssignGrafanaAdmin = value.allowAssignGrafanaAdmin;
      this._allowSignUp = value.allowSignUp;
      this._allowedDomains = value.allowedDomains;
      this._allowedGroups = value.allowedGroups;
      this._allowedOrganizations = value.allowedOrganizations;
      this._apiUrl = value.apiUrl;
      this._authStyle = value.authStyle;
      this._authUrl = value.authUrl;
      this._autoLogin = value.autoLogin;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._custom = value.custom;
      this._defineAllowedGroups = value.defineAllowedGroups;
      this._defineAllowedTeamsIds = value.defineAllowedTeamsIds;
      this._emailAttributeName = value.emailAttributeName;
      this._emailAttributePath = value.emailAttributePath;
      this._emptyScopes = value.emptyScopes;
      this._enabled = value.enabled;
      this._groupsAttributePath = value.groupsAttributePath;
      this._idTokenAttributeName = value.idTokenAttributeName;
      this._loginAttributePath = value.loginAttributePath;
      this._loginPrompt = value.loginPrompt;
      this._name = value.name;
      this._nameAttributePath = value.nameAttributePath;
      this._orgAttributePath = value.orgAttributePath;
      this._orgMapping = value.orgMapping;
      this._roleAttributePath = value.roleAttributePath;
      this._roleAttributeStrict = value.roleAttributeStrict;
      this._scopes = value.scopes;
      this._signoutRedirectUrl = value.signoutRedirectUrl;
      this._skipOrgRoleSync = value.skipOrgRoleSync;
      this._teamIds = value.teamIds;
      this._teamIdsAttributePath = value.teamIdsAttributePath;
      this._teamsUrl = value.teamsUrl;
      this._tlsClientCa = value.tlsClientCa;
      this._tlsClientCert = value.tlsClientCert;
      this._tlsClientKey = value.tlsClientKey;
      this._tlsSkipVerifyInsecure = value.tlsSkipVerifyInsecure;
      this._tokenUrl = value.tokenUrl;
      this._usePkce = value.usePkce;
      this._useRefreshToken = value.useRefreshToken;
    }
  }

  // allow_assign_grafana_admin - computed: false, optional: true, required: false
  private _allowAssignGrafanaAdmin?: boolean | cdktf.IResolvable; 
  public get allowAssignGrafanaAdmin() {
    return this.getBooleanAttribute('allow_assign_grafana_admin');
  }
  public set allowAssignGrafanaAdmin(value: boolean | cdktf.IResolvable) {
    this._allowAssignGrafanaAdmin = value;
  }
  public resetAllowAssignGrafanaAdmin() {
    this._allowAssignGrafanaAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAssignGrafanaAdminInput() {
    return this._allowAssignGrafanaAdmin;
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string; 
  public get allowedDomains() {
    return this.getStringAttribute('allowed_domains');
  }
  public set allowedDomains(value: string) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_groups - computed: false, optional: true, required: false
  private _allowedGroups?: string; 
  public get allowedGroups() {
    return this.getStringAttribute('allowed_groups');
  }
  public set allowedGroups(value: string) {
    this._allowedGroups = value;
  }
  public resetAllowedGroups() {
    this._allowedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsInput() {
    return this._allowedGroups;
  }

  // allowed_organizations - computed: false, optional: true, required: false
  private _allowedOrganizations?: string; 
  public get allowedOrganizations() {
    return this.getStringAttribute('allowed_organizations');
  }
  public set allowedOrganizations(value: string) {
    this._allowedOrganizations = value;
  }
  public resetAllowedOrganizations() {
    this._allowedOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOrganizationsInput() {
    return this._allowedOrganizations;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auth_style - computed: false, optional: true, required: false
  private _authStyle?: string; 
  public get authStyle() {
    return this.getStringAttribute('auth_style');
  }
  public set authStyle(value: string) {
    this._authStyle = value;
  }
  public resetAuthStyle() {
    this._authStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStyleInput() {
    return this._authStyle;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // auto_login - computed: false, optional: true, required: false
  private _autoLogin?: boolean | cdktf.IResolvable; 
  public get autoLogin() {
    return this.getBooleanAttribute('auto_login');
  }
  public set autoLogin(value: boolean | cdktf.IResolvable) {
    this._autoLogin = value;
  }
  public resetAutoLogin() {
    this._autoLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLoginInput() {
    return this._autoLogin;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // define_allowed_groups - computed: false, optional: true, required: false
  private _defineAllowedGroups?: boolean | cdktf.IResolvable; 
  public get defineAllowedGroups() {
    return this.getBooleanAttribute('define_allowed_groups');
  }
  public set defineAllowedGroups(value: boolean | cdktf.IResolvable) {
    this._defineAllowedGroups = value;
  }
  public resetDefineAllowedGroups() {
    this._defineAllowedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defineAllowedGroupsInput() {
    return this._defineAllowedGroups;
  }

  // define_allowed_teams_ids - computed: false, optional: true, required: false
  private _defineAllowedTeamsIds?: boolean | cdktf.IResolvable; 
  public get defineAllowedTeamsIds() {
    return this.getBooleanAttribute('define_allowed_teams_ids');
  }
  public set defineAllowedTeamsIds(value: boolean | cdktf.IResolvable) {
    this._defineAllowedTeamsIds = value;
  }
  public resetDefineAllowedTeamsIds() {
    this._defineAllowedTeamsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defineAllowedTeamsIdsInput() {
    return this._defineAllowedTeamsIds;
  }

  // email_attribute_name - computed: false, optional: true, required: false
  private _emailAttributeName?: string; 
  public get emailAttributeName() {
    return this.getStringAttribute('email_attribute_name');
  }
  public set emailAttributeName(value: string) {
    this._emailAttributeName = value;
  }
  public resetEmailAttributeName() {
    this._emailAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeNameInput() {
    return this._emailAttributeName;
  }

  // email_attribute_path - computed: false, optional: true, required: false
  private _emailAttributePath?: string; 
  public get emailAttributePath() {
    return this.getStringAttribute('email_attribute_path');
  }
  public set emailAttributePath(value: string) {
    this._emailAttributePath = value;
  }
  public resetEmailAttributePath() {
    this._emailAttributePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributePathInput() {
    return this._emailAttributePath;
  }

  // empty_scopes - computed: false, optional: true, required: false
  private _emptyScopes?: boolean | cdktf.IResolvable; 
  public get emptyScopes() {
    return this.getBooleanAttribute('empty_scopes');
  }
  public set emptyScopes(value: boolean | cdktf.IResolvable) {
    this._emptyScopes = value;
  }
  public resetEmptyScopes() {
    this._emptyScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyScopesInput() {
    return this._emptyScopes;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // groups_attribute_path - computed: false, optional: true, required: false
  private _groupsAttributePath?: string; 
  public get groupsAttributePath() {
    return this.getStringAttribute('groups_attribute_path');
  }
  public set groupsAttributePath(value: string) {
    this._groupsAttributePath = value;
  }
  public resetGroupsAttributePath() {
    this._groupsAttributePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAttributePathInput() {
    return this._groupsAttributePath;
  }

  // id_token_attribute_name - computed: false, optional: true, required: false
  private _idTokenAttributeName?: string; 
  public get idTokenAttributeName() {
    return this.getStringAttribute('id_token_attribute_name');
  }
  public set idTokenAttributeName(value: string) {
    this._idTokenAttributeName = value;
  }
  public resetIdTokenAttributeName() {
    this._idTokenAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenAttributeNameInput() {
    return this._idTokenAttributeName;
  }

  // login_attribute_path - computed: false, optional: true, required: false
  private _loginAttributePath?: string; 
  public get loginAttributePath() {
    return this.getStringAttribute('login_attribute_path');
  }
  public set loginAttributePath(value: string) {
    this._loginAttributePath = value;
  }
  public resetLoginAttributePath() {
    this._loginAttributePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttributePathInput() {
    return this._loginAttributePath;
  }

  // login_prompt - computed: false, optional: true, required: false
  private _loginPrompt?: string; 
  public get loginPrompt() {
    return this.getStringAttribute('login_prompt');
  }
  public set loginPrompt(value: string) {
    this._loginPrompt = value;
  }
  public resetLoginPrompt() {
    this._loginPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPromptInput() {
    return this._loginPrompt;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_attribute_path - computed: false, optional: true, required: false
  private _nameAttributePath?: string; 
  public get nameAttributePath() {
    return this.getStringAttribute('name_attribute_path');
  }
  public set nameAttributePath(value: string) {
    this._nameAttributePath = value;
  }
  public resetNameAttributePath() {
    this._nameAttributePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAttributePathInput() {
    return this._nameAttributePath;
  }

  // org_attribute_path - computed: false, optional: true, required: false
  private _orgAttributePath?: string; 
  public get orgAttributePath() {
    return this.getStringAttribute('org_attribute_path');
  }
  public set orgAttributePath(value: string) {
    this._orgAttributePath = value;
  }
  public resetOrgAttributePath() {
    this._orgAttributePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgAttributePathInput() {
    return this._orgAttributePath;
  }

  // org_mapping - computed: false, optional: true, required: false
  private _orgMapping?: string; 
  public get orgMapping() {
    return this.getStringAttribute('org_mapping');
  }
  public set orgMapping(value: string) {
    this._orgMapping = value;
  }
  public resetOrgMapping() {
    this._orgMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgMappingInput() {
    return this._orgMapping;
  }

  // role_attribute_path - computed: false, optional: true, required: false
  private _roleAttributePath?: string; 
  public get roleAttributePath() {
    return this.getStringAttribute('role_attribute_path');
  }
  public set roleAttributePath(value: string) {
    this._roleAttributePath = value;
  }
  public resetRoleAttributePath() {
    this._roleAttributePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAttributePathInput() {
    return this._roleAttributePath;
  }

  // role_attribute_strict - computed: false, optional: true, required: false
  private _roleAttributeStrict?: boolean | cdktf.IResolvable; 
  public get roleAttributeStrict() {
    return this.getBooleanAttribute('role_attribute_strict');
  }
  public set roleAttributeStrict(value: boolean | cdktf.IResolvable) {
    this._roleAttributeStrict = value;
  }
  public resetRoleAttributeStrict() {
    this._roleAttributeStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAttributeStrictInput() {
    return this._roleAttributeStrict;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string; 
  public get scopes() {
    return this.getStringAttribute('scopes');
  }
  public set scopes(value: string) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // signout_redirect_url - computed: false, optional: true, required: false
  private _signoutRedirectUrl?: string; 
  public get signoutRedirectUrl() {
    return this.getStringAttribute('signout_redirect_url');
  }
  public set signoutRedirectUrl(value: string) {
    this._signoutRedirectUrl = value;
  }
  public resetSignoutRedirectUrl() {
    this._signoutRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signoutRedirectUrlInput() {
    return this._signoutRedirectUrl;
  }

  // skip_org_role_sync - computed: false, optional: true, required: false
  private _skipOrgRoleSync?: boolean | cdktf.IResolvable; 
  public get skipOrgRoleSync() {
    return this.getBooleanAttribute('skip_org_role_sync');
  }
  public set skipOrgRoleSync(value: boolean | cdktf.IResolvable) {
    this._skipOrgRoleSync = value;
  }
  public resetSkipOrgRoleSync() {
    this._skipOrgRoleSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOrgRoleSyncInput() {
    return this._skipOrgRoleSync;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string; 
  public get teamIds() {
    return this.getStringAttribute('team_ids');
  }
  public set teamIds(value: string) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // team_ids_attribute_path - computed: false, optional: true, required: false
  private _teamIdsAttributePath?: string; 
  public get teamIdsAttributePath() {
    return this.getStringAttribute('team_ids_attribute_path');
  }
  public set teamIdsAttributePath(value: string) {
    this._teamIdsAttributePath = value;
  }
  public resetTeamIdsAttributePath() {
    this._teamIdsAttributePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsAttributePathInput() {
    return this._teamIdsAttributePath;
  }

  // teams_url - computed: false, optional: true, required: false
  private _teamsUrl?: string; 
  public get teamsUrl() {
    return this.getStringAttribute('teams_url');
  }
  public set teamsUrl(value: string) {
    this._teamsUrl = value;
  }
  public resetTeamsUrl() {
    this._teamsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsUrlInput() {
    return this._teamsUrl;
  }

  // tls_client_ca - computed: false, optional: true, required: false
  private _tlsClientCa?: string; 
  public get tlsClientCa() {
    return this.getStringAttribute('tls_client_ca');
  }
  public set tlsClientCa(value: string) {
    this._tlsClientCa = value;
  }
  public resetTlsClientCa() {
    this._tlsClientCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCaInput() {
    return this._tlsClientCa;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert?: string; 
  public get tlsClientCert() {
    return this.getStringAttribute('tls_client_cert');
  }
  public set tlsClientCert(value: string) {
    this._tlsClientCert = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey?: string; 
  public get tlsClientKey() {
    return this.getStringAttribute('tls_client_key');
  }
  public set tlsClientKey(value: string) {
    this._tlsClientKey = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey;
  }

  // tls_skip_verify_insecure - computed: false, optional: true, required: false
  private _tlsSkipVerifyInsecure?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerifyInsecure() {
    return this.getBooleanAttribute('tls_skip_verify_insecure');
  }
  public set tlsSkipVerifyInsecure(value: boolean | cdktf.IResolvable) {
    this._tlsSkipVerifyInsecure = value;
  }
  public resetTlsSkipVerifyInsecure() {
    this._tlsSkipVerifyInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInsecureInput() {
    return this._tlsSkipVerifyInsecure;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // use_pkce - computed: false, optional: true, required: false
  private _usePkce?: boolean | cdktf.IResolvable; 
  public get usePkce() {
    return this.getBooleanAttribute('use_pkce');
  }
  public set usePkce(value: boolean | cdktf.IResolvable) {
    this._usePkce = value;
  }
  public resetUsePkce() {
    this._usePkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePkceInput() {
    return this._usePkce;
  }

  // use_refresh_token - computed: false, optional: true, required: false
  private _useRefreshToken?: boolean | cdktf.IResolvable; 
  public get useRefreshToken() {
    return this.getBooleanAttribute('use_refresh_token');
  }
  public set useRefreshToken(value: boolean | cdktf.IResolvable) {
    this._useRefreshToken = value;
  }
  public resetUseRefreshToken() {
    this._useRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRefreshTokenInput() {
    return this._useRefreshToken;
  }
}
export interface SsoSettingsSamlSettings {
  /**
  * Whether SAML IdP-initiated login is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allow_idp_initiated SsoSettings#allow_idp_initiated}
  */
  readonly allowIdpInitiated?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow new Grafana user creation through SAML login. If set to false, then only existing Grafana users can log in with SAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allow_sign_up SsoSettings#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * List of comma- or space-separated organizations. User should be a member of at least one organization to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#allowed_organizations SsoSettings#allowed_organizations}
  */
  readonly allowedOrganizations?: string;
  /**
  * Friendly name or name of the attribute within the SAML assertion to use as the user email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#assertion_attribute_email SsoSettings#assertion_attribute_email}
  */
  readonly assertionAttributeEmail?: string;
  /**
  * Friendly name of the attribute within the SAML assertion to use as the external user ID. Only used for SCIM provisioned users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#assertion_attribute_external_uid SsoSettings#assertion_attribute_external_uid}
  */
  readonly assertionAttributeExternalUid?: string;
  /**
  * Friendly name or name of the attribute within the SAML assertion to use as the user groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#assertion_attribute_groups SsoSettings#assertion_attribute_groups}
  */
  readonly assertionAttributeGroups?: string;
  /**
  * Friendly name or name of the attribute within the SAML assertion to use as the user login handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#assertion_attribute_login SsoSettings#assertion_attribute_login}
  */
  readonly assertionAttributeLogin?: string;
  /**
  * Friendly name or name of the attribute within the SAML assertion to use as the user name. Alternatively, this can be a template with variables that match the names of attributes within the SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#assertion_attribute_name SsoSettings#assertion_attribute_name}
  */
  readonly assertionAttributeName?: string;
  /**
  * Friendly name or name of the attribute within the SAML assertion to use as the user organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#assertion_attribute_org SsoSettings#assertion_attribute_org}
  */
  readonly assertionAttributeOrg?: string;
  /**
  * Friendly name or name of the attribute within the SAML assertion to use as the user roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#assertion_attribute_role SsoSettings#assertion_attribute_role}
  */
  readonly assertionAttributeRole?: string;
  /**
  * Whether SAML auto login is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#auto_login SsoSettings#auto_login}
  */
  readonly autoLogin?: boolean | cdktf.IResolvable;
  /**
  * Base64-encoded string for the SP X.509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#certificate SsoSettings#certificate}
  */
  readonly certificate?: string;
  /**
  * Path for the SP X.509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#certificate_path SsoSettings#certificate_path}
  */
  readonly certificatePath?: string;
  /**
  * The client Id of your OAuth2 app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_id SsoSettings#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret of your OAuth2 app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#client_secret SsoSettings#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Define whether this configuration is enabled for SAML. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#enabled SsoSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The entity ID is a globally unique identifier for the service provider. It is used to identify the service provider to the identity provider. Defaults to the URL of the Grafana instance if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#entity_id SsoSettings#entity_id}
  */
  readonly entityId?: string;
  /**
  * If enabled, Grafana will fetch groups from Microsoft Graph API instead of using the groups claim from the ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#force_use_graph_api SsoSettings#force_use_graph_api}
  */
  readonly forceUseGraphApi?: boolean | cdktf.IResolvable;
  /**
  * Base64-encoded string for the IdP SAML metadata XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#idp_metadata SsoSettings#idp_metadata}
  */
  readonly idpMetadata?: string;
  /**
  * Path for the IdP SAML metadata XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#idp_metadata_path SsoSettings#idp_metadata_path}
  */
  readonly idpMetadataPath?: string;
  /**
  * URL for the IdP SAML metadata XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#idp_metadata_url SsoSettings#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * Duration, since the IdP issued a response and the SP is allowed to process it. For example: 90s, 1h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#max_issue_delay SsoSettings#max_issue_delay}
  */
  readonly maxIssueDelay?: string;
  /**
  * Duration, for how long the SP metadata is valid. For example: 48h, 5d.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#metadata_valid_duration SsoSettings#metadata_valid_duration}
  */
  readonly metadataValidDuration?: string;
  /**
  * Name used to refer to the SAML authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#name SsoSettings#name}
  */
  readonly name?: string;
  /**
  * The Name ID Format to request within the SAML assertion. Defaults to urn:oasis:names:tc:SAML:2.0:nameid-format:transient
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#name_id_format SsoSettings#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * List of comma- or space-separated Organization:OrgId:Role mappings. Organization can be * meaning “All users”. Role is optional and can have the following values: Viewer, Editor or Admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#org_mapping SsoSettings#org_mapping}
  */
  readonly orgMapping?: string;
  /**
  * Base64-encoded string for the SP private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#private_key SsoSettings#private_key}
  */
  readonly privateKey?: string;
  /**
  * Path for the SP private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#private_key_path SsoSettings#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Relay state for IdP-initiated login. Should match relay state configured in IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#relay_state SsoSettings#relay_state}
  */
  readonly relayState?: string;
  /**
  * List of comma- or space-separated roles which will be mapped into the Admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#role_values_admin SsoSettings#role_values_admin}
  */
  readonly roleValuesAdmin?: string;
  /**
  * List of comma- or space-separated roles which will be mapped into the Editor role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#role_values_editor SsoSettings#role_values_editor}
  */
  readonly roleValuesEditor?: string;
  /**
  * List of comma- or space-separated roles which will be mapped into the Grafana Admin (Super Admin) role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#role_values_grafana_admin SsoSettings#role_values_grafana_admin}
  */
  readonly roleValuesGrafanaAdmin?: string;
  /**
  * List of comma- or space-separated roles which will be mapped into the None role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#role_values_none SsoSettings#role_values_none}
  */
  readonly roleValuesNone?: string;
  /**
  * List of comma- or space-separated roles which will be mapped into the Viewer role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#role_values_viewer SsoSettings#role_values_viewer}
  */
  readonly roleValuesViewer?: string;
  /**
  * Signature algorithm used for signing requests to the IdP. Supported values are rsa-sha1, rsa-sha256, rsa-sha512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#signature_algorithm SsoSettings#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Whether SAML Single Logout is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#single_logout SsoSettings#single_logout}
  */
  readonly singleLogout?: boolean | cdktf.IResolvable;
  /**
  * Prevent synchronizing users’ organization roles from your IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#skip_org_role_sync SsoSettings#skip_org_role_sync}
  */
  readonly skipOrgRoleSync?: boolean | cdktf.IResolvable;
  /**
  * The token endpoint of your OAuth2 provider. Required for Azure AD providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#token_url SsoSettings#token_url}
  */
  readonly tokenUrl?: string;
}

export function ssoSettingsSamlSettingsToTerraform(struct?: SsoSettingsSamlSettingsOutputReference | SsoSettingsSamlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_idp_initiated: cdktf.booleanToTerraform(struct!.allowIdpInitiated),
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    allowed_organizations: cdktf.stringToTerraform(struct!.allowedOrganizations),
    assertion_attribute_email: cdktf.stringToTerraform(struct!.assertionAttributeEmail),
    assertion_attribute_external_uid: cdktf.stringToTerraform(struct!.assertionAttributeExternalUid),
    assertion_attribute_groups: cdktf.stringToTerraform(struct!.assertionAttributeGroups),
    assertion_attribute_login: cdktf.stringToTerraform(struct!.assertionAttributeLogin),
    assertion_attribute_name: cdktf.stringToTerraform(struct!.assertionAttributeName),
    assertion_attribute_org: cdktf.stringToTerraform(struct!.assertionAttributeOrg),
    assertion_attribute_role: cdktf.stringToTerraform(struct!.assertionAttributeRole),
    auto_login: cdktf.booleanToTerraform(struct!.autoLogin),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_path: cdktf.stringToTerraform(struct!.certificatePath),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    force_use_graph_api: cdktf.booleanToTerraform(struct!.forceUseGraphApi),
    idp_metadata: cdktf.stringToTerraform(struct!.idpMetadata),
    idp_metadata_path: cdktf.stringToTerraform(struct!.idpMetadataPath),
    idp_metadata_url: cdktf.stringToTerraform(struct!.idpMetadataUrl),
    max_issue_delay: cdktf.stringToTerraform(struct!.maxIssueDelay),
    metadata_valid_duration: cdktf.stringToTerraform(struct!.metadataValidDuration),
    name: cdktf.stringToTerraform(struct!.name),
    name_id_format: cdktf.stringToTerraform(struct!.nameIdFormat),
    org_mapping: cdktf.stringToTerraform(struct!.orgMapping),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    relay_state: cdktf.stringToTerraform(struct!.relayState),
    role_values_admin: cdktf.stringToTerraform(struct!.roleValuesAdmin),
    role_values_editor: cdktf.stringToTerraform(struct!.roleValuesEditor),
    role_values_grafana_admin: cdktf.stringToTerraform(struct!.roleValuesGrafanaAdmin),
    role_values_none: cdktf.stringToTerraform(struct!.roleValuesNone),
    role_values_viewer: cdktf.stringToTerraform(struct!.roleValuesViewer),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    single_logout: cdktf.booleanToTerraform(struct!.singleLogout),
    skip_org_role_sync: cdktf.booleanToTerraform(struct!.skipOrgRoleSync),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function ssoSettingsSamlSettingsToHclTerraform(struct?: SsoSettingsSamlSettingsOutputReference | SsoSettingsSamlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_idp_initiated: {
      value: cdktf.booleanToHclTerraform(struct!.allowIdpInitiated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_organizations: {
      value: cdktf.stringToHclTerraform(struct!.allowedOrganizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attribute_email: {
      value: cdktf.stringToHclTerraform(struct!.assertionAttributeEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attribute_external_uid: {
      value: cdktf.stringToHclTerraform(struct!.assertionAttributeExternalUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attribute_groups: {
      value: cdktf.stringToHclTerraform(struct!.assertionAttributeGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attribute_login: {
      value: cdktf.stringToHclTerraform(struct!.assertionAttributeLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.assertionAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attribute_org: {
      value: cdktf.stringToHclTerraform(struct!.assertionAttributeOrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_attribute_role: {
      value: cdktf.stringToHclTerraform(struct!.assertionAttributeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_login: {
      value: cdktf.booleanToHclTerraform(struct!.autoLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_path: {
      value: cdktf.stringToHclTerraform(struct!.certificatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_use_graph_api: {
      value: cdktf.booleanToHclTerraform(struct!.forceUseGraphApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_metadata: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_metadata_path: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_issue_delay: {
      value: cdktf.stringToHclTerraform(struct!.maxIssueDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_valid_duration: {
      value: cdktf.stringToHclTerraform(struct!.metadataValidDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_mapping: {
      value: cdktf.stringToHclTerraform(struct!.orgMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay_state: {
      value: cdktf.stringToHclTerraform(struct!.relayState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_values_admin: {
      value: cdktf.stringToHclTerraform(struct!.roleValuesAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_values_editor: {
      value: cdktf.stringToHclTerraform(struct!.roleValuesEditor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_values_grafana_admin: {
      value: cdktf.stringToHclTerraform(struct!.roleValuesGrafanaAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_values_none: {
      value: cdktf.stringToHclTerraform(struct!.roleValuesNone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_values_viewer: {
      value: cdktf.stringToHclTerraform(struct!.roleValuesViewer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_logout: {
      value: cdktf.booleanToHclTerraform(struct!.singleLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_org_role_sync: {
      value: cdktf.booleanToHclTerraform(struct!.skipOrgRoleSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoSettingsSamlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoSettingsSamlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIdpInitiated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIdpInitiated = this._allowIdpInitiated;
    }
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._allowedOrganizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrganizations = this._allowedOrganizations;
    }
    if (this._assertionAttributeEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributeEmail = this._assertionAttributeEmail;
    }
    if (this._assertionAttributeExternalUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributeExternalUid = this._assertionAttributeExternalUid;
    }
    if (this._assertionAttributeGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributeGroups = this._assertionAttributeGroups;
    }
    if (this._assertionAttributeLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributeLogin = this._assertionAttributeLogin;
    }
    if (this._assertionAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributeName = this._assertionAttributeName;
    }
    if (this._assertionAttributeOrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributeOrg = this._assertionAttributeOrg;
    }
    if (this._assertionAttributeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributeRole = this._assertionAttributeRole;
    }
    if (this._autoLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogin = this._autoLogin;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePath = this._certificatePath;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._forceUseGraphApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUseGraphApi = this._forceUseGraphApi;
    }
    if (this._idpMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadata = this._idpMetadata;
    }
    if (this._idpMetadataPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataPath = this._idpMetadataPath;
    }
    if (this._idpMetadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataUrl = this._idpMetadataUrl;
    }
    if (this._maxIssueDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIssueDelay = this._maxIssueDelay;
    }
    if (this._metadataValidDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataValidDuration = this._metadataValidDuration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameIdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdFormat = this._nameIdFormat;
    }
    if (this._orgMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgMapping = this._orgMapping;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._relayState !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayState = this._relayState;
    }
    if (this._roleValuesAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleValuesAdmin = this._roleValuesAdmin;
    }
    if (this._roleValuesEditor !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleValuesEditor = this._roleValuesEditor;
    }
    if (this._roleValuesGrafanaAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleValuesGrafanaAdmin = this._roleValuesGrafanaAdmin;
    }
    if (this._roleValuesNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleValuesNone = this._roleValuesNone;
    }
    if (this._roleValuesViewer !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleValuesViewer = this._roleValuesViewer;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._singleLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleLogout = this._singleLogout;
    }
    if (this._skipOrgRoleSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipOrgRoleSync = this._skipOrgRoleSync;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoSettingsSamlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowIdpInitiated = undefined;
      this._allowSignUp = undefined;
      this._allowedOrganizations = undefined;
      this._assertionAttributeEmail = undefined;
      this._assertionAttributeExternalUid = undefined;
      this._assertionAttributeGroups = undefined;
      this._assertionAttributeLogin = undefined;
      this._assertionAttributeName = undefined;
      this._assertionAttributeOrg = undefined;
      this._assertionAttributeRole = undefined;
      this._autoLogin = undefined;
      this._certificate = undefined;
      this._certificatePath = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._enabled = undefined;
      this._entityId = undefined;
      this._forceUseGraphApi = undefined;
      this._idpMetadata = undefined;
      this._idpMetadataPath = undefined;
      this._idpMetadataUrl = undefined;
      this._maxIssueDelay = undefined;
      this._metadataValidDuration = undefined;
      this._name = undefined;
      this._nameIdFormat = undefined;
      this._orgMapping = undefined;
      this._privateKey = undefined;
      this._privateKeyPath = undefined;
      this._relayState = undefined;
      this._roleValuesAdmin = undefined;
      this._roleValuesEditor = undefined;
      this._roleValuesGrafanaAdmin = undefined;
      this._roleValuesNone = undefined;
      this._roleValuesViewer = undefined;
      this._signatureAlgorithm = undefined;
      this._singleLogout = undefined;
      this._skipOrgRoleSync = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowIdpInitiated = value.allowIdpInitiated;
      this._allowSignUp = value.allowSignUp;
      this._allowedOrganizations = value.allowedOrganizations;
      this._assertionAttributeEmail = value.assertionAttributeEmail;
      this._assertionAttributeExternalUid = value.assertionAttributeExternalUid;
      this._assertionAttributeGroups = value.assertionAttributeGroups;
      this._assertionAttributeLogin = value.assertionAttributeLogin;
      this._assertionAttributeName = value.assertionAttributeName;
      this._assertionAttributeOrg = value.assertionAttributeOrg;
      this._assertionAttributeRole = value.assertionAttributeRole;
      this._autoLogin = value.autoLogin;
      this._certificate = value.certificate;
      this._certificatePath = value.certificatePath;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._enabled = value.enabled;
      this._entityId = value.entityId;
      this._forceUseGraphApi = value.forceUseGraphApi;
      this._idpMetadata = value.idpMetadata;
      this._idpMetadataPath = value.idpMetadataPath;
      this._idpMetadataUrl = value.idpMetadataUrl;
      this._maxIssueDelay = value.maxIssueDelay;
      this._metadataValidDuration = value.metadataValidDuration;
      this._name = value.name;
      this._nameIdFormat = value.nameIdFormat;
      this._orgMapping = value.orgMapping;
      this._privateKey = value.privateKey;
      this._privateKeyPath = value.privateKeyPath;
      this._relayState = value.relayState;
      this._roleValuesAdmin = value.roleValuesAdmin;
      this._roleValuesEditor = value.roleValuesEditor;
      this._roleValuesGrafanaAdmin = value.roleValuesGrafanaAdmin;
      this._roleValuesNone = value.roleValuesNone;
      this._roleValuesViewer = value.roleValuesViewer;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._singleLogout = value.singleLogout;
      this._skipOrgRoleSync = value.skipOrgRoleSync;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // allow_idp_initiated - computed: false, optional: true, required: false
  private _allowIdpInitiated?: boolean | cdktf.IResolvable; 
  public get allowIdpInitiated() {
    return this.getBooleanAttribute('allow_idp_initiated');
  }
  public set allowIdpInitiated(value: boolean | cdktf.IResolvable) {
    this._allowIdpInitiated = value;
  }
  public resetAllowIdpInitiated() {
    this._allowIdpInitiated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIdpInitiatedInput() {
    return this._allowIdpInitiated;
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // allowed_organizations - computed: false, optional: true, required: false
  private _allowedOrganizations?: string; 
  public get allowedOrganizations() {
    return this.getStringAttribute('allowed_organizations');
  }
  public set allowedOrganizations(value: string) {
    this._allowedOrganizations = value;
  }
  public resetAllowedOrganizations() {
    this._allowedOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOrganizationsInput() {
    return this._allowedOrganizations;
  }

  // assertion_attribute_email - computed: false, optional: true, required: false
  private _assertionAttributeEmail?: string; 
  public get assertionAttributeEmail() {
    return this.getStringAttribute('assertion_attribute_email');
  }
  public set assertionAttributeEmail(value: string) {
    this._assertionAttributeEmail = value;
  }
  public resetAssertionAttributeEmail() {
    this._assertionAttributeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeEmailInput() {
    return this._assertionAttributeEmail;
  }

  // assertion_attribute_external_uid - computed: false, optional: true, required: false
  private _assertionAttributeExternalUid?: string; 
  public get assertionAttributeExternalUid() {
    return this.getStringAttribute('assertion_attribute_external_uid');
  }
  public set assertionAttributeExternalUid(value: string) {
    this._assertionAttributeExternalUid = value;
  }
  public resetAssertionAttributeExternalUid() {
    this._assertionAttributeExternalUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeExternalUidInput() {
    return this._assertionAttributeExternalUid;
  }

  // assertion_attribute_groups - computed: false, optional: true, required: false
  private _assertionAttributeGroups?: string; 
  public get assertionAttributeGroups() {
    return this.getStringAttribute('assertion_attribute_groups');
  }
  public set assertionAttributeGroups(value: string) {
    this._assertionAttributeGroups = value;
  }
  public resetAssertionAttributeGroups() {
    this._assertionAttributeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeGroupsInput() {
    return this._assertionAttributeGroups;
  }

  // assertion_attribute_login - computed: false, optional: true, required: false
  private _assertionAttributeLogin?: string; 
  public get assertionAttributeLogin() {
    return this.getStringAttribute('assertion_attribute_login');
  }
  public set assertionAttributeLogin(value: string) {
    this._assertionAttributeLogin = value;
  }
  public resetAssertionAttributeLogin() {
    this._assertionAttributeLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeLoginInput() {
    return this._assertionAttributeLogin;
  }

  // assertion_attribute_name - computed: false, optional: true, required: false
  private _assertionAttributeName?: string; 
  public get assertionAttributeName() {
    return this.getStringAttribute('assertion_attribute_name');
  }
  public set assertionAttributeName(value: string) {
    this._assertionAttributeName = value;
  }
  public resetAssertionAttributeName() {
    this._assertionAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeNameInput() {
    return this._assertionAttributeName;
  }

  // assertion_attribute_org - computed: false, optional: true, required: false
  private _assertionAttributeOrg?: string; 
  public get assertionAttributeOrg() {
    return this.getStringAttribute('assertion_attribute_org');
  }
  public set assertionAttributeOrg(value: string) {
    this._assertionAttributeOrg = value;
  }
  public resetAssertionAttributeOrg() {
    this._assertionAttributeOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeOrgInput() {
    return this._assertionAttributeOrg;
  }

  // assertion_attribute_role - computed: false, optional: true, required: false
  private _assertionAttributeRole?: string; 
  public get assertionAttributeRole() {
    return this.getStringAttribute('assertion_attribute_role');
  }
  public set assertionAttributeRole(value: string) {
    this._assertionAttributeRole = value;
  }
  public resetAssertionAttributeRole() {
    this._assertionAttributeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeRoleInput() {
    return this._assertionAttributeRole;
  }

  // auto_login - computed: false, optional: true, required: false
  private _autoLogin?: boolean | cdktf.IResolvable; 
  public get autoLogin() {
    return this.getBooleanAttribute('auto_login');
  }
  public set autoLogin(value: boolean | cdktf.IResolvable) {
    this._autoLogin = value;
  }
  public resetAutoLogin() {
    this._autoLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLoginInput() {
    return this._autoLogin;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_path - computed: false, optional: true, required: false
  private _certificatePath?: string; 
  public get certificatePath() {
    return this.getStringAttribute('certificate_path');
  }
  public set certificatePath(value: string) {
    this._certificatePath = value;
  }
  public resetCertificatePath() {
    this._certificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePathInput() {
    return this._certificatePath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // force_use_graph_api - computed: false, optional: true, required: false
  private _forceUseGraphApi?: boolean | cdktf.IResolvable; 
  public get forceUseGraphApi() {
    return this.getBooleanAttribute('force_use_graph_api');
  }
  public set forceUseGraphApi(value: boolean | cdktf.IResolvable) {
    this._forceUseGraphApi = value;
  }
  public resetForceUseGraphApi() {
    this._forceUseGraphApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUseGraphApiInput() {
    return this._forceUseGraphApi;
  }

  // idp_metadata - computed: false, optional: true, required: false
  private _idpMetadata?: string; 
  public get idpMetadata() {
    return this.getStringAttribute('idp_metadata');
  }
  public set idpMetadata(value: string) {
    this._idpMetadata = value;
  }
  public resetIdpMetadata() {
    this._idpMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataInput() {
    return this._idpMetadata;
  }

  // idp_metadata_path - computed: false, optional: true, required: false
  private _idpMetadataPath?: string; 
  public get idpMetadataPath() {
    return this.getStringAttribute('idp_metadata_path');
  }
  public set idpMetadataPath(value: string) {
    this._idpMetadataPath = value;
  }
  public resetIdpMetadataPath() {
    this._idpMetadataPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataPathInput() {
    return this._idpMetadataPath;
  }

  // idp_metadata_url - computed: false, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // max_issue_delay - computed: false, optional: true, required: false
  private _maxIssueDelay?: string; 
  public get maxIssueDelay() {
    return this.getStringAttribute('max_issue_delay');
  }
  public set maxIssueDelay(value: string) {
    this._maxIssueDelay = value;
  }
  public resetMaxIssueDelay() {
    this._maxIssueDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIssueDelayInput() {
    return this._maxIssueDelay;
  }

  // metadata_valid_duration - computed: false, optional: true, required: false
  private _metadataValidDuration?: string; 
  public get metadataValidDuration() {
    return this.getStringAttribute('metadata_valid_duration');
  }
  public set metadataValidDuration(value: string) {
    this._metadataValidDuration = value;
  }
  public resetMetadataValidDuration() {
    this._metadataValidDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataValidDurationInput() {
    return this._metadataValidDuration;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_id_format - computed: false, optional: true, required: false
  private _nameIdFormat?: string; 
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }
  public set nameIdFormat(value: string) {
    this._nameIdFormat = value;
  }
  public resetNameIdFormat() {
    this._nameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdFormatInput() {
    return this._nameIdFormat;
  }

  // org_mapping - computed: false, optional: true, required: false
  private _orgMapping?: string; 
  public get orgMapping() {
    return this.getStringAttribute('org_mapping');
  }
  public set orgMapping(value: string) {
    this._orgMapping = value;
  }
  public resetOrgMapping() {
    this._orgMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgMappingInput() {
    return this._orgMapping;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // relay_state - computed: false, optional: true, required: false
  private _relayState?: string; 
  public get relayState() {
    return this.getStringAttribute('relay_state');
  }
  public set relayState(value: string) {
    this._relayState = value;
  }
  public resetRelayState() {
    this._relayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateInput() {
    return this._relayState;
  }

  // role_values_admin - computed: false, optional: true, required: false
  private _roleValuesAdmin?: string; 
  public get roleValuesAdmin() {
    return this.getStringAttribute('role_values_admin');
  }
  public set roleValuesAdmin(value: string) {
    this._roleValuesAdmin = value;
  }
  public resetRoleValuesAdmin() {
    this._roleValuesAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleValuesAdminInput() {
    return this._roleValuesAdmin;
  }

  // role_values_editor - computed: false, optional: true, required: false
  private _roleValuesEditor?: string; 
  public get roleValuesEditor() {
    return this.getStringAttribute('role_values_editor');
  }
  public set roleValuesEditor(value: string) {
    this._roleValuesEditor = value;
  }
  public resetRoleValuesEditor() {
    this._roleValuesEditor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleValuesEditorInput() {
    return this._roleValuesEditor;
  }

  // role_values_grafana_admin - computed: false, optional: true, required: false
  private _roleValuesGrafanaAdmin?: string; 
  public get roleValuesGrafanaAdmin() {
    return this.getStringAttribute('role_values_grafana_admin');
  }
  public set roleValuesGrafanaAdmin(value: string) {
    this._roleValuesGrafanaAdmin = value;
  }
  public resetRoleValuesGrafanaAdmin() {
    this._roleValuesGrafanaAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleValuesGrafanaAdminInput() {
    return this._roleValuesGrafanaAdmin;
  }

  // role_values_none - computed: false, optional: true, required: false
  private _roleValuesNone?: string; 
  public get roleValuesNone() {
    return this.getStringAttribute('role_values_none');
  }
  public set roleValuesNone(value: string) {
    this._roleValuesNone = value;
  }
  public resetRoleValuesNone() {
    this._roleValuesNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleValuesNoneInput() {
    return this._roleValuesNone;
  }

  // role_values_viewer - computed: false, optional: true, required: false
  private _roleValuesViewer?: string; 
  public get roleValuesViewer() {
    return this.getStringAttribute('role_values_viewer');
  }
  public set roleValuesViewer(value: string) {
    this._roleValuesViewer = value;
  }
  public resetRoleValuesViewer() {
    this._roleValuesViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleValuesViewerInput() {
    return this._roleValuesViewer;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // single_logout - computed: false, optional: true, required: false
  private _singleLogout?: boolean | cdktf.IResolvable; 
  public get singleLogout() {
    return this.getBooleanAttribute('single_logout');
  }
  public set singleLogout(value: boolean | cdktf.IResolvable) {
    this._singleLogout = value;
  }
  public resetSingleLogout() {
    this._singleLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutInput() {
    return this._singleLogout;
  }

  // skip_org_role_sync - computed: false, optional: true, required: false
  private _skipOrgRoleSync?: boolean | cdktf.IResolvable; 
  public get skipOrgRoleSync() {
    return this.getBooleanAttribute('skip_org_role_sync');
  }
  public set skipOrgRoleSync(value: boolean | cdktf.IResolvable) {
    this._skipOrgRoleSync = value;
  }
  public resetSkipOrgRoleSync() {
    this._skipOrgRoleSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOrgRoleSyncInput() {
    return this._skipOrgRoleSync;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings grafana_sso_settings}
*/
export class SsoSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_sso_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoSettings to import
  * @param importFromId The id of the existing SsoSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_sso_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/sso_settings grafana_sso_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SsoSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_sso_settings',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._providerName = config.providerName;
    this._ldapSettings.internalValue = config.ldapSettings;
    this._oauth2Settings.internalValue = config.oauth2Settings;
    this._samlSettings.internalValue = config.samlSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // ldap_settings - computed: false, optional: true, required: false
  private _ldapSettings = new SsoSettingsLdapSettingsOutputReference(this, "ldap_settings");
  public get ldapSettings() {
    return this._ldapSettings;
  }
  public putLdapSettings(value: SsoSettingsLdapSettings) {
    this._ldapSettings.internalValue = value;
  }
  public resetLdapSettings() {
    this._ldapSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSettingsInput() {
    return this._ldapSettings.internalValue;
  }

  // oauth2_settings - computed: false, optional: true, required: false
  private _oauth2Settings = new SsoSettingsOauth2SettingsOutputReference(this, "oauth2_settings");
  public get oauth2Settings() {
    return this._oauth2Settings;
  }
  public putOauth2Settings(value: SsoSettingsOauth2Settings) {
    this._oauth2Settings.internalValue = value;
  }
  public resetOauth2Settings() {
    this._oauth2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2SettingsInput() {
    return this._oauth2Settings.internalValue;
  }

  // saml_settings - computed: false, optional: true, required: false
  private _samlSettings = new SsoSettingsSamlSettingsOutputReference(this, "saml_settings");
  public get samlSettings() {
    return this._samlSettings;
  }
  public putSamlSettings(value: SsoSettingsSamlSettings) {
    this._samlSettings.internalValue = value;
  }
  public resetSamlSettings() {
    this._samlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSettingsInput() {
    return this._samlSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      provider_name: cdktf.stringToTerraform(this._providerName),
      ldap_settings: ssoSettingsLdapSettingsToTerraform(this._ldapSettings.internalValue),
      oauth2_settings: ssoSettingsOauth2SettingsToTerraform(this._oauth2Settings.internalValue),
      saml_settings: ssoSettingsSamlSettingsToTerraform(this._samlSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_settings: {
        value: ssoSettingsLdapSettingsToHclTerraform(this._ldapSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsoSettingsLdapSettingsList",
      },
      oauth2_settings: {
        value: ssoSettingsOauth2SettingsToHclTerraform(this._oauth2Settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsoSettingsOauth2SettingsList",
      },
      saml_settings: {
        value: ssoSettingsSamlSettingsToHclTerraform(this._samlSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsoSettingsSamlSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
