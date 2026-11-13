// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PamAccountWindowsAdConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to reach the Windows Active Directory target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#connection_details PamAccountWindowsAd#connection_details}
  */
  readonly connectionDetails: PamAccountWindowsAdConnectionDetails;
  /**
  * The credentials of the account. Secrets are never read back, so changes made outside of Terraform, such as rotation, aren't detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#credentials PamAccountWindowsAd#credentials}
  */
  readonly credentials: PamAccountWindowsAdCredentials;
  /**
  * An optional description of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#description PamAccountWindowsAd#description}
  */
  readonly description?: string;
  /**
  * The ID of the folder the account is in. Changing it moves the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#folder_id PamAccountWindowsAd#folder_id}
  */
  readonly folderId: string;
  /**
  * The ID of the gateway to connect through instead of the template's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#gateway_id PamAccountWindowsAd#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * The ID of the gateway pool to connect through instead of the template's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#gateway_pool_id PamAccountWindowsAd#gateway_pool_id}
  */
  readonly gatewayPoolId?: string;
  /**
  * The name of the account, unique in its folder. Must be lowercase letters, numbers and hyphens, at most 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#name PamAccountWindowsAd#name}
  */
  readonly name: string;
  /**
  * The ID of another account of the same type and target that rotates this account's password, or `self` for the account to rotate its own. Rotation is enabled on the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#rotation_account_id PamAccountWindowsAd#rotation_account_id}
  */
  readonly rotationAccountId?: string;
  /**
  * The ID of the account template the account uses, which must be a `windows-ad` template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#template_id PamAccountWindowsAd#template_id}
  */
  readonly templateId: string;
}
export interface PamAccountWindowsAdConnectionDetails {
  /**
  * The hostname or IP address of a domain controller, used for LDAP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#dc_address PamAccountWindowsAd#dc_address}
  */
  readonly dcAddress: string;
  /**
  * The fully qualified domain name of the Active Directory domain, e.g. corp.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#domain PamAccountWindowsAd#domain}
  */
  readonly domain: string;
  /**
  * The hostnames or IP addresses the account may open sessions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#hosts PamAccountWindowsAd#hosts}
  */
  readonly hosts: string[];
  /**
  * The PEM-encoded CA certificate to verify the domain controller with over LDAPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#ldap_ca_cert PamAccountWindowsAd#ldap_ca_cert}
  */
  readonly ldapCaCert?: string;
  /**
  * The LDAP port of the domain controller. Defaults to 389.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#ldap_port PamAccountWindowsAd#ldap_port}
  */
  readonly ldapPort?: number;
  /**
  * Whether to reject a domain controller certificate that isn't trusted. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#ldap_reject_unauthorized PamAccountWindowsAd#ldap_reject_unauthorized}
  */
  readonly ldapRejectUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * The server name to verify the domain controller's certificate against over LDAPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#ldap_tls_server_name PamAccountWindowsAd#ldap_tls_server_name}
  */
  readonly ldapTlsServerName?: string;
  /**
  * The RDP port of the hosts. Defaults to 3389.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#rdp_port PamAccountWindowsAd#rdp_port}
  */
  readonly rdpPort?: number;
  /**
  * Whether to connect to the domain controller over LDAPS. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#use_ldaps PamAccountWindowsAd#use_ldaps}
  */
  readonly useLdaps?: boolean | cdktf.IResolvable;
  /**
  * Whether to use WinRM over HTTPS. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#use_winrm_https PamAccountWindowsAd#use_winrm_https}
  */
  readonly useWinrmHttps?: boolean | cdktf.IResolvable;
  /**
  * The PEM-encoded CA certificate to verify WinRM over HTTPS with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#winrm_ca_cert PamAccountWindowsAd#winrm_ca_cert}
  */
  readonly winrmCaCert?: string;
  /**
  * The WinRM port of the hosts, used for credential rotation. Defaults to 5985.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#winrm_port PamAccountWindowsAd#winrm_port}
  */
  readonly winrmPort?: number;
  /**
  * Whether to reject a WinRM certificate that isn't trusted. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#winrm_reject_unauthorized PamAccountWindowsAd#winrm_reject_unauthorized}
  */
  readonly winrmRejectUnauthorized?: boolean | cdktf.IResolvable;
}

export function pamAccountWindowsAdConnectionDetailsToTerraform(struct?: PamAccountWindowsAdConnectionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dc_address: cdktf.stringToTerraform(struct!.dcAddress),
    domain: cdktf.stringToTerraform(struct!.domain),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    ldap_ca_cert: cdktf.stringToTerraform(struct!.ldapCaCert),
    ldap_port: cdktf.numberToTerraform(struct!.ldapPort),
    ldap_reject_unauthorized: cdktf.booleanToTerraform(struct!.ldapRejectUnauthorized),
    ldap_tls_server_name: cdktf.stringToTerraform(struct!.ldapTlsServerName),
    rdp_port: cdktf.numberToTerraform(struct!.rdpPort),
    use_ldaps: cdktf.booleanToTerraform(struct!.useLdaps),
    use_winrm_https: cdktf.booleanToTerraform(struct!.useWinrmHttps),
    winrm_ca_cert: cdktf.stringToTerraform(struct!.winrmCaCert),
    winrm_port: cdktf.numberToTerraform(struct!.winrmPort),
    winrm_reject_unauthorized: cdktf.booleanToTerraform(struct!.winrmRejectUnauthorized),
  }
}


export function pamAccountWindowsAdConnectionDetailsToHclTerraform(struct?: PamAccountWindowsAdConnectionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dc_address: {
      value: cdktf.stringToHclTerraform(struct!.dcAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ldap_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.ldapCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_port: {
      value: cdktf.numberToHclTerraform(struct!.ldapPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.ldapRejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ldap_tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.ldapTlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdp_port: {
      value: cdktf.numberToHclTerraform(struct!.rdpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_ldaps: {
      value: cdktf.booleanToHclTerraform(struct!.useLdaps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_winrm_https: {
      value: cdktf.booleanToHclTerraform(struct!.useWinrmHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    winrm_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.winrmCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    winrm_port: {
      value: cdktf.numberToHclTerraform(struct!.winrmPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    winrm_reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.winrmRejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountWindowsAdConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountWindowsAdConnectionDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dcAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcAddress = this._dcAddress;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._ldapCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapCaCert = this._ldapCaCert;
    }
    if (this._ldapPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapPort = this._ldapPort;
    }
    if (this._ldapRejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapRejectUnauthorized = this._ldapRejectUnauthorized;
    }
    if (this._ldapTlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapTlsServerName = this._ldapTlsServerName;
    }
    if (this._rdpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdpPort = this._rdpPort;
    }
    if (this._useLdaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLdaps = this._useLdaps;
    }
    if (this._useWinrmHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWinrmHttps = this._useWinrmHttps;
    }
    if (this._winrmCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.winrmCaCert = this._winrmCaCert;
    }
    if (this._winrmPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.winrmPort = this._winrmPort;
    }
    if (this._winrmRejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.winrmRejectUnauthorized = this._winrmRejectUnauthorized;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountWindowsAdConnectionDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dcAddress = undefined;
      this._domain = undefined;
      this._hosts = undefined;
      this._ldapCaCert = undefined;
      this._ldapPort = undefined;
      this._ldapRejectUnauthorized = undefined;
      this._ldapTlsServerName = undefined;
      this._rdpPort = undefined;
      this._useLdaps = undefined;
      this._useWinrmHttps = undefined;
      this._winrmCaCert = undefined;
      this._winrmPort = undefined;
      this._winrmRejectUnauthorized = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dcAddress = value.dcAddress;
      this._domain = value.domain;
      this._hosts = value.hosts;
      this._ldapCaCert = value.ldapCaCert;
      this._ldapPort = value.ldapPort;
      this._ldapRejectUnauthorized = value.ldapRejectUnauthorized;
      this._ldapTlsServerName = value.ldapTlsServerName;
      this._rdpPort = value.rdpPort;
      this._useLdaps = value.useLdaps;
      this._useWinrmHttps = value.useWinrmHttps;
      this._winrmCaCert = value.winrmCaCert;
      this._winrmPort = value.winrmPort;
      this._winrmRejectUnauthorized = value.winrmRejectUnauthorized;
    }
  }

  // dc_address - computed: false, optional: false, required: true
  private _dcAddress?: string; 
  public get dcAddress() {
    return this.getStringAttribute('dc_address');
  }
  public set dcAddress(value: string) {
    this._dcAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcAddressInput() {
    return this._dcAddress;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // ldap_ca_cert - computed: false, optional: true, required: false
  private _ldapCaCert?: string; 
  public get ldapCaCert() {
    return this.getStringAttribute('ldap_ca_cert');
  }
  public set ldapCaCert(value: string) {
    this._ldapCaCert = value;
  }
  public resetLdapCaCert() {
    this._ldapCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapCaCertInput() {
    return this._ldapCaCert;
  }

  // ldap_port - computed: true, optional: true, required: false
  private _ldapPort?: number; 
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }
  public set ldapPort(value: number) {
    this._ldapPort = value;
  }
  public resetLdapPort() {
    this._ldapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPortInput() {
    return this._ldapPort;
  }

  // ldap_reject_unauthorized - computed: true, optional: true, required: false
  private _ldapRejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get ldapRejectUnauthorized() {
    return this.getBooleanAttribute('ldap_reject_unauthorized');
  }
  public set ldapRejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._ldapRejectUnauthorized = value;
  }
  public resetLdapRejectUnauthorized() {
    this._ldapRejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapRejectUnauthorizedInput() {
    return this._ldapRejectUnauthorized;
  }

  // ldap_tls_server_name - computed: false, optional: true, required: false
  private _ldapTlsServerName?: string; 
  public get ldapTlsServerName() {
    return this.getStringAttribute('ldap_tls_server_name');
  }
  public set ldapTlsServerName(value: string) {
    this._ldapTlsServerName = value;
  }
  public resetLdapTlsServerName() {
    this._ldapTlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTlsServerNameInput() {
    return this._ldapTlsServerName;
  }

  // rdp_port - computed: true, optional: true, required: false
  private _rdpPort?: number; 
  public get rdpPort() {
    return this.getNumberAttribute('rdp_port');
  }
  public set rdpPort(value: number) {
    this._rdpPort = value;
  }
  public resetRdpPort() {
    this._rdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpPortInput() {
    return this._rdpPort;
  }

  // use_ldaps - computed: true, optional: true, required: false
  private _useLdaps?: boolean | cdktf.IResolvable; 
  public get useLdaps() {
    return this.getBooleanAttribute('use_ldaps');
  }
  public set useLdaps(value: boolean | cdktf.IResolvable) {
    this._useLdaps = value;
  }
  public resetUseLdaps() {
    this._useLdaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLdapsInput() {
    return this._useLdaps;
  }

  // use_winrm_https - computed: true, optional: true, required: false
  private _useWinrmHttps?: boolean | cdktf.IResolvable; 
  public get useWinrmHttps() {
    return this.getBooleanAttribute('use_winrm_https');
  }
  public set useWinrmHttps(value: boolean | cdktf.IResolvable) {
    this._useWinrmHttps = value;
  }
  public resetUseWinrmHttps() {
    this._useWinrmHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWinrmHttpsInput() {
    return this._useWinrmHttps;
  }

  // winrm_ca_cert - computed: false, optional: true, required: false
  private _winrmCaCert?: string; 
  public get winrmCaCert() {
    return this.getStringAttribute('winrm_ca_cert');
  }
  public set winrmCaCert(value: string) {
    this._winrmCaCert = value;
  }
  public resetWinrmCaCert() {
    this._winrmCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmCaCertInput() {
    return this._winrmCaCert;
  }

  // winrm_port - computed: true, optional: true, required: false
  private _winrmPort?: number; 
  public get winrmPort() {
    return this.getNumberAttribute('winrm_port');
  }
  public set winrmPort(value: number) {
    this._winrmPort = value;
  }
  public resetWinrmPort() {
    this._winrmPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmPortInput() {
    return this._winrmPort;
  }

  // winrm_reject_unauthorized - computed: true, optional: true, required: false
  private _winrmRejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get winrmRejectUnauthorized() {
    return this.getBooleanAttribute('winrm_reject_unauthorized');
  }
  public set winrmRejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._winrmRejectUnauthorized = value;
  }
  public resetWinrmRejectUnauthorized() {
    this._winrmRejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmRejectUnauthorizedInput() {
    return this._winrmRejectUnauthorized;
  }
}
export interface PamAccountWindowsAdCredentials {
  /**
  * The password of the domain user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#password PamAccountWindowsAd#password}
  */
  readonly password?: string;
  /**
  * The domain user, in DOMAIN\username form (e.g. CORP\Administrator).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#username PamAccountWindowsAd#username}
  */
  readonly username: string;
}

export function pamAccountWindowsAdCredentialsToTerraform(struct?: PamAccountWindowsAdCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pamAccountWindowsAdCredentialsToHclTerraform(struct?: PamAccountWindowsAdCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountWindowsAdCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountWindowsAdCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountWindowsAdCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad infisical_pam_account_windows_ad}
*/
export class PamAccountWindowsAd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_pam_account_windows_ad";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PamAccountWindowsAd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PamAccountWindowsAd to import
  * @param importFromId The id of the existing PamAccountWindowsAd that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PamAccountWindowsAd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_pam_account_windows_ad", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_windows_ad infisical_pam_account_windows_ad} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PamAccountWindowsAdConfig
  */
  public constructor(scope: Construct, id: string, config: PamAccountWindowsAdConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_pam_account_windows_ad',
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
    this._connectionDetails.internalValue = config.connectionDetails;
    this._credentials.internalValue = config.credentials;
    this._description = config.description;
    this._folderId = config.folderId;
    this._gatewayId = config.gatewayId;
    this._gatewayPoolId = config.gatewayPoolId;
    this._name = config.name;
    this._rotationAccountId = config.rotationAccountId;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_details - computed: false, optional: false, required: true
  private _connectionDetails = new PamAccountWindowsAdConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: PamAccountWindowsAdConnectionDetails) {
    this._connectionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PamAccountWindowsAdCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PamAccountWindowsAdCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
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

  // folder_id - computed: false, optional: false, required: true
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // gateway_pool_id - computed: false, optional: true, required: false
  private _gatewayPoolId?: string; 
  public get gatewayPoolId() {
    return this.getStringAttribute('gateway_pool_id');
  }
  public set gatewayPoolId(value: string) {
    this._gatewayPoolId = value;
  }
  public resetGatewayPoolId() {
    this._gatewayPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPoolIdInput() {
    return this._gatewayPoolId;
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

  // rotation_account_id - computed: false, optional: true, required: false
  private _rotationAccountId?: string; 
  public get rotationAccountId() {
    return this.getStringAttribute('rotation_account_id');
  }
  public set rotationAccountId(value: string) {
    this._rotationAccountId = value;
  }
  public resetRotationAccountId() {
    this._rotationAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationAccountIdInput() {
    return this._rotationAccountId;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_details: pamAccountWindowsAdConnectionDetailsToTerraform(this._connectionDetails.internalValue),
      credentials: pamAccountWindowsAdCredentialsToTerraform(this._credentials.internalValue),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      gateway_pool_id: cdktf.stringToTerraform(this._gatewayPoolId),
      name: cdktf.stringToTerraform(this._name),
      rotation_account_id: cdktf.stringToTerraform(this._rotationAccountId),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_details: {
        value: pamAccountWindowsAdConnectionDetailsToHclTerraform(this._connectionDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PamAccountWindowsAdConnectionDetails",
      },
      credentials: {
        value: pamAccountWindowsAdCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PamAccountWindowsAdCredentials",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_pool_id: {
        value: cdktf.stringToHclTerraform(this._gatewayPoolId),
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
      rotation_account_id: {
        value: cdktf.stringToHclTerraform(this._rotationAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
