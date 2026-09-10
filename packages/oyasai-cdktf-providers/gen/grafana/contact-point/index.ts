// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContactPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow modifying the contact point from other sources than Terraform or the Grafana API. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_provenance ContactPoint#disable_provenance}
  */
  readonly disableProvenance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#id ContactPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the contact point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#name ContactPoint#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#org_id ContactPoint#org_id}
  */
  readonly orgId?: string;
  /**
  * alertmanager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#alertmanager ContactPoint#alertmanager}
  */
  readonly alertmanager?: ContactPointAlertmanager[] | cdktf.IResolvable;
  /**
  * dingding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#dingding ContactPoint#dingding}
  */
  readonly dingding?: ContactPointDingding[] | cdktf.IResolvable;
  /**
  * discord block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#discord ContactPoint#discord}
  */
  readonly discord?: ContactPointDiscord[] | cdktf.IResolvable;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#email ContactPoint#email}
  */
  readonly email?: ContactPointEmail[] | cdktf.IResolvable;
  /**
  * googlechat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#googlechat ContactPoint#googlechat}
  */
  readonly googlechat?: ContactPointGooglechat[] | cdktf.IResolvable;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#jira ContactPoint#jira}
  */
  readonly jira?: ContactPointJira[] | cdktf.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#kafka ContactPoint#kafka}
  */
  readonly kafka?: ContactPointKafka[] | cdktf.IResolvable;
  /**
  * line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#line ContactPoint#line}
  */
  readonly line?: ContactPointLine[] | cdktf.IResolvable;
  /**
  * oncall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#oncall ContactPoint#oncall}
  */
  readonly oncall?: ContactPointOncall[] | cdktf.IResolvable;
  /**
  * opsgenie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#opsgenie ContactPoint#opsgenie}
  */
  readonly opsgenie?: ContactPointOpsgenie[] | cdktf.IResolvable;
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#pagerduty ContactPoint#pagerduty}
  */
  readonly pagerduty?: ContactPointPagerduty[] | cdktf.IResolvable;
  /**
  * pushover block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#pushover ContactPoint#pushover}
  */
  readonly pushover?: ContactPointPushover[] | cdktf.IResolvable;
  /**
  * sensugo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#sensugo ContactPoint#sensugo}
  */
  readonly sensugo?: ContactPointSensugo[] | cdktf.IResolvable;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#slack ContactPoint#slack}
  */
  readonly slack?: ContactPointSlack[] | cdktf.IResolvable;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#sns ContactPoint#sns}
  */
  readonly sns?: ContactPointSns[] | cdktf.IResolvable;
  /**
  * teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#teams ContactPoint#teams}
  */
  readonly teams?: ContactPointTeams[] | cdktf.IResolvable;
  /**
  * telegram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#telegram ContactPoint#telegram}
  */
  readonly telegram?: ContactPointTelegram[] | cdktf.IResolvable;
  /**
  * threema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#threema ContactPoint#threema}
  */
  readonly threema?: ContactPointThreema[] | cdktf.IResolvable;
  /**
  * victorops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#victorops ContactPoint#victorops}
  */
  readonly victorops?: ContactPointVictorops[] | cdktf.IResolvable;
  /**
  * webex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#webex ContactPoint#webex}
  */
  readonly webex?: ContactPointWebex[] | cdktf.IResolvable;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#webhook ContactPoint#webhook}
  */
  readonly webhook?: ContactPointWebhook[] | cdktf.IResolvable;
  /**
  * wecom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#wecom ContactPoint#wecom}
  */
  readonly wecom?: ContactPointWecom[] | cdktf.IResolvable;
}
export interface ContactPointAlertmanager {
  /**
  * The password component of the basic auth credentials to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#basic_auth_password ContactPoint#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * The username component of the basic auth credentials to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#basic_auth_user ContactPoint#basic_auth_user}
  */
  readonly basicAuthUser?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The URL of the Alertmanager instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
}

export function contactPointAlertmanagerToTerraform(struct?: ContactPointAlertmanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_user: cdktf.stringToTerraform(struct!.basicAuthUser),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointAlertmanagerToHclTerraform(struct?: ContactPointAlertmanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_user: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointAlertmanagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointAlertmanager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUser = this._basicAuthUser;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointAlertmanager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuthPassword = undefined;
      this._basicAuthUser = undefined;
      this._disableResolveMessage = undefined;
      this._settings = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUser = value.basicAuthUser;
      this._disableResolveMessage = value.disableResolveMessage;
      this._settings = value.settings;
      this._url = value.url;
    }
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_user - computed: false, optional: true, required: false
  private _basicAuthUser?: string; 
  public get basicAuthUser() {
    return this.getStringAttribute('basic_auth_user');
  }
  public set basicAuthUser(value: string) {
    this._basicAuthUser = value;
  }
  public resetBasicAuthUser() {
    this._basicAuthUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUserInput() {
    return this._basicAuthUser;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointAlertmanagerList extends cdktf.ComplexList {
  public internalValue? : ContactPointAlertmanager[] | cdktf.IResolvable

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
  public get(index: number): ContactPointAlertmanagerOutputReference {
    return new ContactPointAlertmanagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointDingding {
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The templated content of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * The format of message to send - either 'link' or 'actionCard'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message_type ContactPoint#message_type}
  */
  readonly messageType?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * The DingDing webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
}

export function contactPointDingdingToTerraform(struct?: ContactPointDingding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointDingdingToHclTerraform(struct?: ContactPointDingding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointDingdingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointDingding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointDingding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._messageType = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._messageType = value.messageType;
      this._settings = value.settings;
      this._title = value.title;
      this._url = value.url;
    }
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointDingdingList extends cdktf.ComplexList {
  public internalValue? : ContactPointDingding[] | cdktf.IResolvable

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
  public get(index: number): ContactPointDingdingOutputReference {
    return new ContactPointDingdingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointDiscord {
  /**
  * The URL of a custom avatar image to use. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#avatar_url ContactPoint#avatar_url}
  */
  readonly avatarUrl?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The templated content of the message. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated content of the title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * The discord webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
  /**
  * Whether to use the bot account's plain username instead of "Grafana." Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#use_discord_username ContactPoint#use_discord_username}
  */
  readonly useDiscordUsername?: boolean | cdktf.IResolvable;
}

export function contactPointDiscordToTerraform(struct?: ContactPointDiscord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avatar_url: cdktf.stringToTerraform(struct!.avatarUrl),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
    use_discord_username: cdktf.booleanToTerraform(struct!.useDiscordUsername),
  }
}


export function contactPointDiscordToHclTerraform(struct?: ContactPointDiscord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avatar_url: {
      value: cdktf.stringToHclTerraform(struct!.avatarUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_discord_username: {
      value: cdktf.booleanToHclTerraform(struct!.useDiscordUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointDiscordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointDiscord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avatarUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.avatarUrl = this._avatarUrl;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useDiscordUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDiscordUsername = this._useDiscordUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointDiscord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avatarUrl = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._url = undefined;
      this._useDiscordUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avatarUrl = value.avatarUrl;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._settings = value.settings;
      this._title = value.title;
      this._url = value.url;
      this._useDiscordUsername = value.useDiscordUsername;
    }
  }

  // avatar_url - computed: false, optional: true, required: false
  private _avatarUrl?: string; 
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }
  public set avatarUrl(value: string) {
    this._avatarUrl = value;
  }
  public resetAvatarUrl() {
    this._avatarUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUrlInput() {
    return this._avatarUrl;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_discord_username - computed: false, optional: true, required: false
  private _useDiscordUsername?: boolean | cdktf.IResolvable; 
  public get useDiscordUsername() {
    return this.getBooleanAttribute('use_discord_username');
  }
  public set useDiscordUsername(value: boolean | cdktf.IResolvable) {
    this._useDiscordUsername = value;
  }
  public resetUseDiscordUsername() {
    this._useDiscordUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDiscordUsernameInput() {
    return this._useDiscordUsername;
  }
}

export class ContactPointDiscordList extends cdktf.ComplexList {
  public internalValue? : ContactPointDiscord[] | cdktf.IResolvable

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
  public get(index: number): ContactPointDiscordOutputReference {
    return new ContactPointDiscordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointEmail {
  /**
  * The addresses to send emails to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#addresses ContactPoint#addresses}
  */
  readonly addresses: string[];
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The templated content of the email. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Whether to send a single email CC'ing all addresses, rather than a separate email to each address. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#single_email ContactPoint#single_email}
  */
  readonly singleEmail?: boolean | cdktf.IResolvable;
  /**
  * The templated subject line of the email. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#subject ContactPoint#subject}
  */
  readonly subject?: string;
}

export function contactPointEmailToTerraform(struct?: ContactPointEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    single_email: cdktf.booleanToTerraform(struct!.singleEmail),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function contactPointEmailToHclTerraform(struct?: ContactPointEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    single_email: {
      value: cdktf.booleanToHclTerraform(struct!.singleEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._singleEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleEmail = this._singleEmail;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._singleEmail = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._settings = value.settings;
      this._singleEmail = value.singleEmail;
      this._subject = value.subject;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // single_email - computed: false, optional: true, required: false
  private _singleEmail?: boolean | cdktf.IResolvable; 
  public get singleEmail() {
    return this.getBooleanAttribute('single_email');
  }
  public set singleEmail(value: boolean | cdktf.IResolvable) {
    this._singleEmail = value;
  }
  public resetSingleEmail() {
    this._singleEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleEmailInput() {
    return this._singleEmail;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ContactPointEmailList extends cdktf.ComplexList {
  public internalValue? : ContactPointEmail[] | cdktf.IResolvable

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
  public get(index: number): ContactPointEmailOutputReference {
    return new ContactPointEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointGooglechat {
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Whether to hide the Open URL button in the message. This feature requires Grafana 12.4.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#hide_open_button ContactPoint#hide_open_button}
  */
  readonly hideOpenButton?: boolean | cdktf.IResolvable;
  /**
  * Whether to hide the version info in the message. This feature requires Grafana 12.4.0 or later. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#hide_version_info ContactPoint#hide_version_info}
  */
  readonly hideVersionInfo?: boolean | cdktf.IResolvable;
  /**
  * The templated content of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated content of the title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * The Google Chat webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
}

export function contactPointGooglechatToTerraform(struct?: ContactPointGooglechat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    hide_open_button: cdktf.booleanToTerraform(struct!.hideOpenButton),
    hide_version_info: cdktf.booleanToTerraform(struct!.hideVersionInfo),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointGooglechatToHclTerraform(struct?: ContactPointGooglechat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_open_button: {
      value: cdktf.booleanToHclTerraform(struct!.hideOpenButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_version_info: {
      value: cdktf.booleanToHclTerraform(struct!.hideVersionInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointGooglechatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointGooglechat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._hideOpenButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOpenButton = this._hideOpenButton;
    }
    if (this._hideVersionInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideVersionInfo = this._hideVersionInfo;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointGooglechat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableResolveMessage = undefined;
      this._hideOpenButton = undefined;
      this._hideVersionInfo = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableResolveMessage = value.disableResolveMessage;
      this._hideOpenButton = value.hideOpenButton;
      this._hideVersionInfo = value.hideVersionInfo;
      this._message = value.message;
      this._settings = value.settings;
      this._title = value.title;
      this._url = value.url;
    }
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // hide_open_button - computed: false, optional: true, required: false
  private _hideOpenButton?: boolean | cdktf.IResolvable; 
  public get hideOpenButton() {
    return this.getBooleanAttribute('hide_open_button');
  }
  public set hideOpenButton(value: boolean | cdktf.IResolvable) {
    this._hideOpenButton = value;
  }
  public resetHideOpenButton() {
    this._hideOpenButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOpenButtonInput() {
    return this._hideOpenButton;
  }

  // hide_version_info - computed: false, optional: true, required: false
  private _hideVersionInfo?: boolean | cdktf.IResolvable; 
  public get hideVersionInfo() {
    return this.getBooleanAttribute('hide_version_info');
  }
  public set hideVersionInfo(value: boolean | cdktf.IResolvable) {
    this._hideVersionInfo = value;
  }
  public resetHideVersionInfo() {
    this._hideVersionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideVersionInfoInput() {
    return this._hideVersionInfo;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointGooglechatList extends cdktf.ComplexList {
  public internalValue? : ContactPointGooglechat[] | cdktf.IResolvable

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
  public get(index: number): ContactPointGooglechatOutputReference {
    return new ContactPointGooglechatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointJira {
  /**
  * Personal Access Token that is used as a bearer authorization header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_token ContactPoint#api_token}
  */
  readonly apiToken?: string;
  /**
  * The URL of the Jira REST API (v2 or v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_url ContactPoint#api_url}
  */
  readonly apiUrl: string;
  /**
  * Custom field ID for storing deduplication keys. Must be numeric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#dedup_key_field ContactPoint#dedup_key_field}
  */
  readonly dedupKeyField?: string;
  /**
  * The templated description of the Jira issue. Maximum length is 32767 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#description ContactPoint#description}
  */
  readonly description?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Custom Jira issue fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#fields ContactPoint#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * The type of issue to create (e.g., Bug, Task, Story).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#issue_type ContactPoint#issue_type}
  */
  readonly issueType: string;
  /**
  * Labels to assign to the Jira issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#labels ContactPoint#labels}
  */
  readonly labels?: string[];
  /**
  * Password to use for Jira authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#password ContactPoint#password}
  */
  readonly password?: string;
  /**
  * The priority level of the issue (e.g., High, Medium, Low).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#priority ContactPoint#priority}
  */
  readonly priority?: string;
  /**
  * The project key in Jira.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#project ContactPoint#project}
  */
  readonly project: string;
  /**
  * Duration to consider reopening issues (e.g., '10m').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#reopen_duration ContactPoint#reopen_duration}
  */
  readonly reopenDuration?: string;
  /**
  * The name of the workflow transition to reopen an issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#reopen_transition ContactPoint#reopen_transition}
  */
  readonly reopenTransition?: string;
  /**
  * The name of the workflow transition to resolve an issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#resolve_transition ContactPoint#resolve_transition}
  */
  readonly resolveTransition?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated summary of the Jira issue. Maximum length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#summary ContactPoint#summary}
  */
  readonly summary?: string;
  /**
  * Username to use for Jira authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#user ContactPoint#user}
  */
  readonly user?: string;
  /**
  * Resolution status to exclude from reopening/updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#wont_fix_resolution ContactPoint#wont_fix_resolution}
  */
  readonly wontFixResolution?: string;
}

export function contactPointJiraToTerraform(struct?: ContactPointJira | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    dedup_key_field: cdktf.stringToTerraform(struct!.dedupKeyField),
    description: cdktf.stringToTerraform(struct!.description),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    password: cdktf.stringToTerraform(struct!.password),
    priority: cdktf.stringToTerraform(struct!.priority),
    project: cdktf.stringToTerraform(struct!.project),
    reopen_duration: cdktf.stringToTerraform(struct!.reopenDuration),
    reopen_transition: cdktf.stringToTerraform(struct!.reopenTransition),
    resolve_transition: cdktf.stringToTerraform(struct!.resolveTransition),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    summary: cdktf.stringToTerraform(struct!.summary),
    user: cdktf.stringToTerraform(struct!.user),
    wont_fix_resolution: cdktf.stringToTerraform(struct!.wontFixResolution),
  }
}


export function contactPointJiraToHclTerraform(struct?: ContactPointJira | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
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
    dedup_key_field: {
      value: cdktf.stringToHclTerraform(struct!.dedupKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reopen_duration: {
      value: cdktf.stringToHclTerraform(struct!.reopenDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reopen_transition: {
      value: cdktf.stringToHclTerraform(struct!.reopenTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_transition: {
      value: cdktf.stringToHclTerraform(struct!.resolveTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wont_fix_resolution: {
      value: cdktf.stringToHclTerraform(struct!.wontFixResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointJiraOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointJira | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._dedupKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupKeyField = this._dedupKeyField;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._reopenDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.reopenDuration = this._reopenDuration;
    }
    if (this._reopenTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.reopenTransition = this._reopenTransition;
    }
    if (this._resolveTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveTransition = this._resolveTransition;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._wontFixResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.wontFixResolution = this._wontFixResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointJira | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiUrl = undefined;
      this._dedupKeyField = undefined;
      this._description = undefined;
      this._disableResolveMessage = undefined;
      this._fields = undefined;
      this._issueType = undefined;
      this._labels = undefined;
      this._password = undefined;
      this._priority = undefined;
      this._project = undefined;
      this._reopenDuration = undefined;
      this._reopenTransition = undefined;
      this._resolveTransition = undefined;
      this._settings = undefined;
      this._summary = undefined;
      this._user = undefined;
      this._wontFixResolution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiUrl = value.apiUrl;
      this._dedupKeyField = value.dedupKeyField;
      this._description = value.description;
      this._disableResolveMessage = value.disableResolveMessage;
      this._fields = value.fields;
      this._issueType = value.issueType;
      this._labels = value.labels;
      this._password = value.password;
      this._priority = value.priority;
      this._project = value.project;
      this._reopenDuration = value.reopenDuration;
      this._reopenTransition = value.reopenTransition;
      this._resolveTransition = value.resolveTransition;
      this._settings = value.settings;
      this._summary = value.summary;
      this._user = value.user;
      this._wontFixResolution = value.wontFixResolution;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // dedup_key_field - computed: false, optional: true, required: false
  private _dedupKeyField?: string; 
  public get dedupKeyField() {
    return this.getStringAttribute('dedup_key_field');
  }
  public set dedupKeyField(value: string) {
    this._dedupKeyField = value;
  }
  public resetDedupKeyField() {
    this._dedupKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupKeyFieldInput() {
    return this._dedupKeyField;
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

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // reopen_duration - computed: false, optional: true, required: false
  private _reopenDuration?: string; 
  public get reopenDuration() {
    return this.getStringAttribute('reopen_duration');
  }
  public set reopenDuration(value: string) {
    this._reopenDuration = value;
  }
  public resetReopenDuration() {
    this._reopenDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reopenDurationInput() {
    return this._reopenDuration;
  }

  // reopen_transition - computed: false, optional: true, required: false
  private _reopenTransition?: string; 
  public get reopenTransition() {
    return this.getStringAttribute('reopen_transition');
  }
  public set reopenTransition(value: string) {
    this._reopenTransition = value;
  }
  public resetReopenTransition() {
    this._reopenTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reopenTransitionInput() {
    return this._reopenTransition;
  }

  // resolve_transition - computed: false, optional: true, required: false
  private _resolveTransition?: string; 
  public get resolveTransition() {
    return this.getStringAttribute('resolve_transition');
  }
  public set resolveTransition(value: string) {
    this._resolveTransition = value;
  }
  public resetResolveTransition() {
    this._resolveTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveTransitionInput() {
    return this._resolveTransition;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // wont_fix_resolution - computed: false, optional: true, required: false
  private _wontFixResolution?: string; 
  public get wontFixResolution() {
    return this.getStringAttribute('wont_fix_resolution');
  }
  public set wontFixResolution(value: string) {
    this._wontFixResolution = value;
  }
  public resetWontFixResolution() {
    this._wontFixResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wontFixResolutionInput() {
    return this._wontFixResolution;
  }
}

export class ContactPointJiraList extends cdktf.ComplexList {
  public internalValue? : ContactPointJira[] | cdktf.IResolvable

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
  public get(index: number): ContactPointJiraOutputReference {
    return new ContactPointJiraOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointKafka {
  /**
  * The API version to use when contacting the Kafka REST Server. Supported: v2 (default) and v3. Defaults to `v2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_version ContactPoint#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The Id of cluster to use when contacting the Kafka REST Server. Required api_version to be 'v3'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#cluster_id ContactPoint#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The templated description of the Kafka message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#description ContactPoint#description}
  */
  readonly description?: string;
  /**
  * The templated details to include with the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#details ContactPoint#details}
  */
  readonly details?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The password to use when making a call to the Kafka REST Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#password ContactPoint#password}
  */
  readonly password?: string;
  /**
  * The URL of the Kafka REST proxy to send requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#rest_proxy_url ContactPoint#rest_proxy_url}
  */
  readonly restProxyUrl: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The name of the Kafka topic to publish to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#topic ContactPoint#topic}
  */
  readonly topic: string;
  /**
  * The user name to use when making a call to the Kafka REST Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#username ContactPoint#username}
  */
  readonly username?: string;
}

export function contactPointKafkaToTerraform(struct?: ContactPointKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    description: cdktf.stringToTerraform(struct!.description),
    details: cdktf.stringToTerraform(struct!.details),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    password: cdktf.stringToTerraform(struct!.password),
    rest_proxy_url: cdktf.stringToTerraform(struct!.restProxyUrl),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    topic: cdktf.stringToTerraform(struct!.topic),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function contactPointKafkaToHclTerraform(struct?: ContactPointKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cdktf.stringToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rest_proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.restProxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
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

export class ContactPointKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._restProxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.restProxyUrl = this._restProxyUrl;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._clusterId = undefined;
      this._description = undefined;
      this._details = undefined;
      this._disableResolveMessage = undefined;
      this._password = undefined;
      this._restProxyUrl = undefined;
      this._settings = undefined;
      this._topic = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._clusterId = value.clusterId;
      this._description = value.description;
      this._details = value.details;
      this._disableResolveMessage = value.disableResolveMessage;
      this._password = value.password;
      this._restProxyUrl = value.restProxyUrl;
      this._settings = value.settings;
      this._topic = value.topic;
      this._username = value.username;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
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

  // rest_proxy_url - computed: false, optional: false, required: true
  private _restProxyUrl?: string; 
  public get restProxyUrl() {
    return this.getStringAttribute('rest_proxy_url');
  }
  public set restProxyUrl(value: string) {
    this._restProxyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restProxyUrlInput() {
    return this._restProxyUrl;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContactPointKafkaList extends cdktf.ComplexList {
  public internalValue? : ContactPointKafka[] | cdktf.IResolvable

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
  public get(index: number): ContactPointKafkaOutputReference {
    return new ContactPointKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointLine {
  /**
  * The templated description of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#description ContactPoint#description}
  */
  readonly description?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * The bearer token used to authorize the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#token ContactPoint#token}
  */
  readonly token: string;
}

export function contactPointLineToTerraform(struct?: ContactPointLine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function contactPointLineToHclTerraform(struct?: ContactPointLine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointLineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointLine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointLine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disableResolveMessage = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disableResolveMessage = value.disableResolveMessage;
      this._settings = value.settings;
      this._title = value.title;
      this._token = value.token;
    }
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

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ContactPointLineList extends cdktf.ComplexList {
  public internalValue? : ContactPointLine[] | cdktf.IResolvable

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
  public get(index: number): ContactPointLineOutputReference {
    return new ContactPointLineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointOncall {
  /**
  * Allows a custom authorization scheme - attaches an auth header with this value. Do not use in conjunction with basic auth parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#authorization_credentials ContactPoint#authorization_credentials}
  */
  readonly authorizationCredentials?: string;
  /**
  * Allows a custom authorization scheme - attaches an auth header with this name. Do not use in conjunction with basic auth parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#authorization_scheme ContactPoint#authorization_scheme}
  */
  readonly authorizationScheme?: string;
  /**
  * The username to use in basic auth headers attached to the request. If omitted, basic auth will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#basic_auth_password ContactPoint#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * The username to use in basic auth headers attached to the request. If omitted, basic auth will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#basic_auth_user ContactPoint#basic_auth_user}
  */
  readonly basicAuthUser?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The HTTP method to use in the request. Defaults to `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#http_method ContactPoint#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The maximum number of alerts to send in a single request. This can be helpful in limiting the size of the request body. The default is 0, which indicates no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#max_alerts ContactPoint#max_alerts}
  */
  readonly maxAlerts?: number;
  /**
  * Custom message. You can use template variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * The URL to send webhook requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
}

export function contactPointOncallToTerraform(struct?: ContactPointOncall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_credentials: cdktf.stringToTerraform(struct!.authorizationCredentials),
    authorization_scheme: cdktf.stringToTerraform(struct!.authorizationScheme),
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_user: cdktf.stringToTerraform(struct!.basicAuthUser),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    max_alerts: cdktf.numberToTerraform(struct!.maxAlerts),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointOncallToHclTerraform(struct?: ContactPointOncall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_credentials: {
      value: cdktf.stringToHclTerraform(struct!.authorizationCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_scheme: {
      value: cdktf.stringToHclTerraform(struct!.authorizationScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_user: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_alerts: {
      value: cdktf.numberToHclTerraform(struct!.maxAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointOncallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointOncall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCredentials = this._authorizationCredentials;
    }
    if (this._authorizationScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationScheme = this._authorizationScheme;
    }
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUser = this._basicAuthUser;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._maxAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAlerts = this._maxAlerts;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointOncall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationCredentials = undefined;
      this._authorizationScheme = undefined;
      this._basicAuthPassword = undefined;
      this._basicAuthUser = undefined;
      this._disableResolveMessage = undefined;
      this._httpMethod = undefined;
      this._maxAlerts = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationCredentials = value.authorizationCredentials;
      this._authorizationScheme = value.authorizationScheme;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUser = value.basicAuthUser;
      this._disableResolveMessage = value.disableResolveMessage;
      this._httpMethod = value.httpMethod;
      this._maxAlerts = value.maxAlerts;
      this._message = value.message;
      this._settings = value.settings;
      this._title = value.title;
      this._url = value.url;
    }
  }

  // authorization_credentials - computed: false, optional: true, required: false
  private _authorizationCredentials?: string; 
  public get authorizationCredentials() {
    return this.getStringAttribute('authorization_credentials');
  }
  public set authorizationCredentials(value: string) {
    this._authorizationCredentials = value;
  }
  public resetAuthorizationCredentials() {
    this._authorizationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCredentialsInput() {
    return this._authorizationCredentials;
  }

  // authorization_scheme - computed: false, optional: true, required: false
  private _authorizationScheme?: string; 
  public get authorizationScheme() {
    return this.getStringAttribute('authorization_scheme');
  }
  public set authorizationScheme(value: string) {
    this._authorizationScheme = value;
  }
  public resetAuthorizationScheme() {
    this._authorizationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSchemeInput() {
    return this._authorizationScheme;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_user - computed: false, optional: true, required: false
  private _basicAuthUser?: string; 
  public get basicAuthUser() {
    return this.getStringAttribute('basic_auth_user');
  }
  public set basicAuthUser(value: string) {
    this._basicAuthUser = value;
  }
  public resetBasicAuthUser() {
    this._basicAuthUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUserInput() {
    return this._basicAuthUser;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // max_alerts - computed: false, optional: true, required: false
  private _maxAlerts?: number; 
  public get maxAlerts() {
    return this.getNumberAttribute('max_alerts');
  }
  public set maxAlerts(value: number) {
    this._maxAlerts = value;
  }
  public resetMaxAlerts() {
    this._maxAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlertsInput() {
    return this._maxAlerts;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointOncallList extends cdktf.ComplexList {
  public internalValue? : ContactPointOncall[] | cdktf.IResolvable

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
  public get(index: number): ContactPointOncallOutputReference {
    return new ContactPointOncallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointOpsgenieResponders {
  /**
  * ID of the responder. Must be specified if name and username are empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#id ContactPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the responder. Must be specified if username and id are empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#name ContactPoint#name}
  */
  readonly name?: string;
  /**
  * Type of the responder. Supported: team, teams, user, escalation, schedule or a template that is expanded to one of these values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#type ContactPoint#type}
  */
  readonly type: string;
  /**
  * User name of the responder. Must be specified if name and id are empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#username ContactPoint#username}
  */
  readonly username?: string;
}

export function contactPointOpsgenieRespondersToTerraform(struct?: ContactPointOpsgenieResponders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function contactPointOpsgenieRespondersToHclTerraform(struct?: ContactPointOpsgenieResponders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ContactPointOpsgenieRespondersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointOpsgenieResponders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointOpsgenieResponders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContactPointOpsgenieRespondersList extends cdktf.ComplexList {
  public internalValue? : ContactPointOpsgenieResponders[] | cdktf.IResolvable

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
  public get(index: number): ContactPointOpsgenieRespondersOutputReference {
    return new ContactPointOpsgenieRespondersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointOpsgenie {
  /**
  * The OpsGenie API key to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_key ContactPoint#api_key}
  */
  readonly apiKey: string;
  /**
  * Whether to auto-close alerts in OpsGenie when they resolve in the Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#auto_close ContactPoint#auto_close}
  */
  readonly autoClose?: boolean | cdktf.IResolvable;
  /**
  * A templated high-level description to use for the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#description ContactPoint#description}
  */
  readonly description?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The templated content of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * Whether to allow the alert priority to be configured via the value of the `og_priority` annotation on the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#override_priority ContactPoint#override_priority}
  */
  readonly overridePriority?: boolean | cdktf.IResolvable;
  /**
  * Whether to send annotations to OpsGenie as Tags, Details, or both. Supported values are `tags`, `details`, `both`, or empty to use the default behavior of Tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#send_tags_as ContactPoint#send_tags_as}
  */
  readonly sendTagsAs?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Allows customization of the OpsGenie API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url?: string;
  /**
  * responders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#responders ContactPoint#responders}
  */
  readonly responders?: ContactPointOpsgenieResponders[] | cdktf.IResolvable;
}

export function contactPointOpsgenieToTerraform(struct?: ContactPointOpsgenie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    auto_close: cdktf.booleanToTerraform(struct!.autoClose),
    description: cdktf.stringToTerraform(struct!.description),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    override_priority: cdktf.booleanToTerraform(struct!.overridePriority),
    send_tags_as: cdktf.stringToTerraform(struct!.sendTagsAs),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    url: cdktf.stringToTerraform(struct!.url),
    responders: cdktf.listMapper(contactPointOpsgenieRespondersToTerraform, true)(struct!.responders),
  }
}


export function contactPointOpsgenieToHclTerraform(struct?: ContactPointOpsgenie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_close: {
      value: cdktf.booleanToHclTerraform(struct!.autoClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_priority: {
      value: cdktf.booleanToHclTerraform(struct!.overridePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_tags_as: {
      value: cdktf.stringToHclTerraform(struct!.sendTagsAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responders: {
      value: cdktf.listMapperHcl(contactPointOpsgenieRespondersToHclTerraform, true)(struct!.responders),
      isBlock: true,
      type: "list",
      storageClassType: "ContactPointOpsgenieRespondersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointOpsgenieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointOpsgenie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._autoClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoClose = this._autoClose;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._overridePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePriority = this._overridePriority;
    }
    if (this._sendTagsAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTagsAs = this._sendTagsAs;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._responders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responders = this._responders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointOpsgenie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._autoClose = undefined;
      this._description = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._overridePriority = undefined;
      this._sendTagsAs = undefined;
      this._settings = undefined;
      this._url = undefined;
      this._responders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._autoClose = value.autoClose;
      this._description = value.description;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._overridePriority = value.overridePriority;
      this._sendTagsAs = value.sendTagsAs;
      this._settings = value.settings;
      this._url = value.url;
      this._responders.internalValue = value.responders;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // auto_close - computed: false, optional: true, required: false
  private _autoClose?: boolean | cdktf.IResolvable; 
  public get autoClose() {
    return this.getBooleanAttribute('auto_close');
  }
  public set autoClose(value: boolean | cdktf.IResolvable) {
    this._autoClose = value;
  }
  public resetAutoClose() {
    this._autoClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloseInput() {
    return this._autoClose;
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

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // override_priority - computed: false, optional: true, required: false
  private _overridePriority?: boolean | cdktf.IResolvable; 
  public get overridePriority() {
    return this.getBooleanAttribute('override_priority');
  }
  public set overridePriority(value: boolean | cdktf.IResolvable) {
    this._overridePriority = value;
  }
  public resetOverridePriority() {
    this._overridePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePriorityInput() {
    return this._overridePriority;
  }

  // send_tags_as - computed: false, optional: true, required: false
  private _sendTagsAs?: string; 
  public get sendTagsAs() {
    return this.getStringAttribute('send_tags_as');
  }
  public set sendTagsAs(value: string) {
    this._sendTagsAs = value;
  }
  public resetSendTagsAs() {
    this._sendTagsAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTagsAsInput() {
    return this._sendTagsAs;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // responders - computed: false, optional: true, required: false
  private _responders = new ContactPointOpsgenieRespondersList(this, "responders", false);
  public get responders() {
    return this._responders;
  }
  public putResponders(value: ContactPointOpsgenieResponders[] | cdktf.IResolvable) {
    this._responders.internalValue = value;
  }
  public resetResponders() {
    this._responders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondersInput() {
    return this._responders.internalValue;
  }
}

export class ContactPointOpsgenieList extends cdktf.ComplexList {
  public internalValue? : ContactPointOpsgenie[] | cdktf.IResolvable

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
  public get(index: number): ContactPointOpsgenieOutputReference {
    return new ContactPointOpsgenieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointPagerduty {
  /**
  * The class or type of event, for example `ping failure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#class ContactPoint#class}
  */
  readonly class?: string;
  /**
  * The name of the monitoring client that is triggering this event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#client ContactPoint#client}
  */
  readonly client?: string;
  /**
  * The URL of the monitoring client that is triggering this event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#client_url ContactPoint#client_url}
  */
  readonly clientUrl?: string;
  /**
  * The component being affected by the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#component ContactPoint#component}
  */
  readonly component?: string;
  /**
  * A set of arbitrary key/value pairs that provide further detail about the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#details ContactPoint#details}
  */
  readonly details?: { [key: string]: string };
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The group to which the provided component belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#group ContactPoint#group}
  */
  readonly group?: string;
  /**
  * The PagerDuty API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#integration_key ContactPoint#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The PagerDuty event severity level. Default is `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#severity ContactPoint#severity}
  */
  readonly severity?: string;
  /**
  * The unique location of the affected system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#source ContactPoint#source}
  */
  readonly source?: string;
  /**
  * The templated summary message of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#summary ContactPoint#summary}
  */
  readonly summary?: string;
  /**
  * The URL to send API requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url?: string;
}

export function contactPointPagerdutyToTerraform(struct?: ContactPointPagerduty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    client: cdktf.stringToTerraform(struct!.client),
    client_url: cdktf.stringToTerraform(struct!.clientUrl),
    component: cdktf.stringToTerraform(struct!.component),
    details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.details),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    group: cdktf.stringToTerraform(struct!.group),
    integration_key: cdktf.stringToTerraform(struct!.integrationKey),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    severity: cdktf.stringToTerraform(struct!.severity),
    source: cdktf.stringToTerraform(struct!.source),
    summary: cdktf.stringToTerraform(struct!.summary),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointPagerdutyToHclTerraform(struct?: ContactPointPagerduty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_url: {
      value: cdktf.stringToHclTerraform(struct!.clientUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.details),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_key: {
      value: cdktf.stringToHclTerraform(struct!.integrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointPagerdutyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointPagerduty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._clientUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientUrl = this._clientUrl;
    }
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._integrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKey = this._integrationKey;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointPagerduty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._client = undefined;
      this._clientUrl = undefined;
      this._component = undefined;
      this._details = undefined;
      this._disableResolveMessage = undefined;
      this._group = undefined;
      this._integrationKey = undefined;
      this._settings = undefined;
      this._severity = undefined;
      this._source = undefined;
      this._summary = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._client = value.client;
      this._clientUrl = value.clientUrl;
      this._component = value.component;
      this._details = value.details;
      this._disableResolveMessage = value.disableResolveMessage;
      this._group = value.group;
      this._integrationKey = value.integrationKey;
      this._settings = value.settings;
      this._severity = value.severity;
      this._source = value.source;
      this._summary = value.summary;
      this._url = value.url;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // client_url - computed: false, optional: true, required: false
  private _clientUrl?: string; 
  public get clientUrl() {
    return this.getStringAttribute('client_url');
  }
  public set clientUrl(value: string) {
    this._clientUrl = value;
  }
  public resetClientUrl() {
    this._clientUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUrlInput() {
    return this._clientUrl;
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // details - computed: false, optional: true, required: false
  private _details?: { [key: string]: string }; 
  public get details() {
    return this.getStringMapAttribute('details');
  }
  public set details(value: { [key: string]: string }) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
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

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointPagerdutyList extends cdktf.ComplexList {
  public internalValue? : ContactPointPagerduty[] | cdktf.IResolvable

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
  public get(index: number): ContactPointPagerdutyOutputReference {
    return new ContactPointPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointPushover {
  /**
  * The Pushover API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_token ContactPoint#api_token}
  */
  readonly apiToken: string;
  /**
  * Comma-separated list of devices to which the event is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#device ContactPoint#device}
  */
  readonly device?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * How many seconds for which the notification will continue to be retried by Pushover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#expire ContactPoint#expire}
  */
  readonly expire?: number;
  /**
  * The templated notification message content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * The priority level of the resolved event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#ok_priority ContactPoint#ok_priority}
  */
  readonly okPriority?: number;
  /**
  * The sound associated with the resolved notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#ok_sound ContactPoint#ok_sound}
  */
  readonly okSound?: string;
  /**
  * The priority level of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#priority ContactPoint#priority}
  */
  readonly priority?: number;
  /**
  * How often, in seconds, the Pushover servers will send the same notification to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#retry ContactPoint#retry}
  */
  readonly retry?: number;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The sound associated with the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#sound ContactPoint#sound}
  */
  readonly sound?: string;
  /**
  * The templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * Whether to send images in the notification or not. Default is true. Requires Grafana to be configured to send images in notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#upload_image ContactPoint#upload_image}
  */
  readonly uploadImage?: boolean | cdktf.IResolvable;
  /**
  * The Pushover user key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#user_key ContactPoint#user_key}
  */
  readonly userKey: string;
}

export function contactPointPushoverToTerraform(struct?: ContactPointPushover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    device: cdktf.stringToTerraform(struct!.device),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    expire: cdktf.numberToTerraform(struct!.expire),
    message: cdktf.stringToTerraform(struct!.message),
    ok_priority: cdktf.numberToTerraform(struct!.okPriority),
    ok_sound: cdktf.stringToTerraform(struct!.okSound),
    priority: cdktf.numberToTerraform(struct!.priority),
    retry: cdktf.numberToTerraform(struct!.retry),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    sound: cdktf.stringToTerraform(struct!.sound),
    title: cdktf.stringToTerraform(struct!.title),
    upload_image: cdktf.booleanToTerraform(struct!.uploadImage),
    user_key: cdktf.stringToTerraform(struct!.userKey),
  }
}


export function contactPointPushoverToHclTerraform(struct?: ContactPointPushover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ok_priority: {
      value: cdktf.numberToHclTerraform(struct!.okPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ok_sound: {
      value: cdktf.stringToHclTerraform(struct!.okSound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sound: {
      value: cdktf.stringToHclTerraform(struct!.sound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_image: {
      value: cdktf.booleanToHclTerraform(struct!.uploadImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_key: {
      value: cdktf.stringToHclTerraform(struct!.userKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointPushoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointPushover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._okPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.okPriority = this._okPriority;
    }
    if (this._okSound !== undefined) {
      hasAnyValues = true;
      internalValueResult.okSound = this._okSound;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._sound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sound = this._sound;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._uploadImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadImage = this._uploadImage;
    }
    if (this._userKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.userKey = this._userKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointPushover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._device = undefined;
      this._disableResolveMessage = undefined;
      this._expire = undefined;
      this._message = undefined;
      this._okPriority = undefined;
      this._okSound = undefined;
      this._priority = undefined;
      this._retry = undefined;
      this._settings = undefined;
      this._sound = undefined;
      this._title = undefined;
      this._uploadImage = undefined;
      this._userKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._device = value.device;
      this._disableResolveMessage = value.disableResolveMessage;
      this._expire = value.expire;
      this._message = value.message;
      this._okPriority = value.okPriority;
      this._okSound = value.okSound;
      this._priority = value.priority;
      this._retry = value.retry;
      this._settings = value.settings;
      this._sound = value.sound;
      this._title = value.title;
      this._uploadImage = value.uploadImage;
      this._userKey = value.userKey;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // ok_priority - computed: false, optional: true, required: false
  private _okPriority?: number; 
  public get okPriority() {
    return this.getNumberAttribute('ok_priority');
  }
  public set okPriority(value: number) {
    this._okPriority = value;
  }
  public resetOkPriority() {
    this._okPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okPriorityInput() {
    return this._okPriority;
  }

  // ok_sound - computed: false, optional: true, required: false
  private _okSound?: string; 
  public get okSound() {
    return this.getStringAttribute('ok_sound');
  }
  public set okSound(value: string) {
    this._okSound = value;
  }
  public resetOkSound() {
    this._okSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okSoundInput() {
    return this._okSound;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // sound - computed: false, optional: true, required: false
  private _sound?: string; 
  public get sound() {
    return this.getStringAttribute('sound');
  }
  public set sound(value: string) {
    this._sound = value;
  }
  public resetSound() {
    this._sound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soundInput() {
    return this._sound;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // upload_image - computed: false, optional: true, required: false
  private _uploadImage?: boolean | cdktf.IResolvable; 
  public get uploadImage() {
    return this.getBooleanAttribute('upload_image');
  }
  public set uploadImage(value: boolean | cdktf.IResolvable) {
    this._uploadImage = value;
  }
  public resetUploadImage() {
    this._uploadImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadImageInput() {
    return this._uploadImage;
  }

  // user_key - computed: false, optional: false, required: true
  private _userKey?: string; 
  public get userKey() {
    return this.getStringAttribute('user_key');
  }
  public set userKey(value: string) {
    this._userKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userKeyInput() {
    return this._userKey;
  }
}

export class ContactPointPushoverList extends cdktf.ComplexList {
  public internalValue? : ContactPointPushover[] | cdktf.IResolvable

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
  public get(index: number): ContactPointPushoverOutputReference {
    return new ContactPointPushoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointSensugo {
  /**
  * The SensuGo API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_key ContactPoint#api_key}
  */
  readonly apiKey: string;
  /**
  * The SensuGo check to which the event should be routed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#check ContactPoint#check}
  */
  readonly check?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The entity being monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#entity ContactPoint#entity}
  */
  readonly entity?: string;
  /**
  * A custom handler to execute in addition to the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#handler ContactPoint#handler}
  */
  readonly handler?: string;
  /**
  * Templated message content describing the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * The namespace in which the check resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#namespace ContactPoint#namespace}
  */
  readonly namespace?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The SensuGo URL to send requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
}

export function contactPointSensugoToTerraform(struct?: ContactPointSensugo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    check: cdktf.stringToTerraform(struct!.check),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    entity: cdktf.stringToTerraform(struct!.entity),
    handler: cdktf.stringToTerraform(struct!.handler),
    message: cdktf.stringToTerraform(struct!.message),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointSensugoToHclTerraform(struct?: ContactPointSensugo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check: {
      value: cdktf.stringToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity: {
      value: cdktf.stringToHclTerraform(struct!.entity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handler: {
      value: cdktf.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointSensugoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointSensugo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._entity !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity;
    }
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointSensugo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._check = undefined;
      this._disableResolveMessage = undefined;
      this._entity = undefined;
      this._handler = undefined;
      this._message = undefined;
      this._namespace = undefined;
      this._settings = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._check = value.check;
      this._disableResolveMessage = value.disableResolveMessage;
      this._entity = value.entity;
      this._handler = value.handler;
      this._message = value.message;
      this._namespace = value.namespace;
      this._settings = value.settings;
      this._url = value.url;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // check - computed: false, optional: true, required: false
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // entity - computed: false, optional: true, required: false
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  public resetEntity() {
    this._entity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointSensugoList extends cdktf.ComplexList {
  public internalValue? : ContactPointSensugo[] | cdktf.IResolvable

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
  public get(index: number): ContactPointSensugoOutputReference {
    return new ContactPointSensugoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointSlack {
  /**
  * Templated color of the slack message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#color ContactPoint#color}
  */
  readonly color?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Use this to override the Slack API endpoint URL to send requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#endpoint_url ContactPoint#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * The name of a Slack workspace emoji to use as the bot icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#icon_emoji ContactPoint#icon_emoji}
  */
  readonly iconEmoji?: string;
  /**
  * A URL of an image to use as the bot icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#icon_url ContactPoint#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Describes how to ping the slack channel that messages are being sent to. Options are `here` for an @here ping, `channel` for @channel, or empty for no ping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#mention_channel ContactPoint#mention_channel}
  */
  readonly mentionChannel?: string;
  /**
  * Comma-separated list of groups to mention in the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#mention_groups ContactPoint#mention_groups}
  */
  readonly mentionGroups?: string;
  /**
  * Comma-separated list of users to mention in the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#mention_users ContactPoint#mention_users}
  */
  readonly mentionUsers?: string;
  /**
  * Channel, private group, or IM channel (can be an encoded ID or a name) to send messages to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#recipient ContactPoint#recipient}
  */
  readonly recipient?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Templated content of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#text ContactPoint#text}
  */
  readonly text?: string;
  /**
  * Templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * A Slack API token,for sending messages directly without the webhook method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#token ContactPoint#token}
  */
  readonly token?: string;
  /**
  * A Slack webhook URL,for sending messages via the webhook method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url?: string;
  /**
  * Username for the bot to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#username ContactPoint#username}
  */
  readonly username?: string;
}

export function contactPointSlackToTerraform(struct?: ContactPointSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    icon_emoji: cdktf.stringToTerraform(struct!.iconEmoji),
    icon_url: cdktf.stringToTerraform(struct!.iconUrl),
    mention_channel: cdktf.stringToTerraform(struct!.mentionChannel),
    mention_groups: cdktf.stringToTerraform(struct!.mentionGroups),
    mention_users: cdktf.stringToTerraform(struct!.mentionUsers),
    recipient: cdktf.stringToTerraform(struct!.recipient),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function contactPointSlackToHclTerraform(struct?: ContactPointSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_emoji: {
      value: cdktf.stringToHclTerraform(struct!.iconEmoji),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_url: {
      value: cdktf.stringToHclTerraform(struct!.iconUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mention_channel: {
      value: cdktf.stringToHclTerraform(struct!.mentionChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mention_groups: {
      value: cdktf.stringToHclTerraform(struct!.mentionGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mention_users: {
      value: cdktf.stringToHclTerraform(struct!.mentionUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient: {
      value: cdktf.stringToHclTerraform(struct!.recipient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class ContactPointSlackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointSlack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._iconEmoji !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconEmoji = this._iconEmoji;
    }
    if (this._iconUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUrl = this._iconUrl;
    }
    if (this._mentionChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mentionChannel = this._mentionChannel;
    }
    if (this._mentionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.mentionGroups = this._mentionGroups;
    }
    if (this._mentionUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.mentionUsers = this._mentionUsers;
    }
    if (this._recipient !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipient = this._recipient;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointSlack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._disableResolveMessage = undefined;
      this._endpointUrl = undefined;
      this._iconEmoji = undefined;
      this._iconUrl = undefined;
      this._mentionChannel = undefined;
      this._mentionGroups = undefined;
      this._mentionUsers = undefined;
      this._recipient = undefined;
      this._settings = undefined;
      this._text = undefined;
      this._title = undefined;
      this._token = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._disableResolveMessage = value.disableResolveMessage;
      this._endpointUrl = value.endpointUrl;
      this._iconEmoji = value.iconEmoji;
      this._iconUrl = value.iconUrl;
      this._mentionChannel = value.mentionChannel;
      this._mentionGroups = value.mentionGroups;
      this._mentionUsers = value.mentionUsers;
      this._recipient = value.recipient;
      this._settings = value.settings;
      this._text = value.text;
      this._title = value.title;
      this._token = value.token;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // icon_emoji - computed: false, optional: true, required: false
  private _iconEmoji?: string; 
  public get iconEmoji() {
    return this.getStringAttribute('icon_emoji');
  }
  public set iconEmoji(value: string) {
    this._iconEmoji = value;
  }
  public resetIconEmoji() {
    this._iconEmoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconEmojiInput() {
    return this._iconEmoji;
  }

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // mention_channel - computed: false, optional: true, required: false
  private _mentionChannel?: string; 
  public get mentionChannel() {
    return this.getStringAttribute('mention_channel');
  }
  public set mentionChannel(value: string) {
    this._mentionChannel = value;
  }
  public resetMentionChannel() {
    this._mentionChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionChannelInput() {
    return this._mentionChannel;
  }

  // mention_groups - computed: false, optional: true, required: false
  private _mentionGroups?: string; 
  public get mentionGroups() {
    return this.getStringAttribute('mention_groups');
  }
  public set mentionGroups(value: string) {
    this._mentionGroups = value;
  }
  public resetMentionGroups() {
    this._mentionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionGroupsInput() {
    return this._mentionGroups;
  }

  // mention_users - computed: false, optional: true, required: false
  private _mentionUsers?: string; 
  public get mentionUsers() {
    return this.getStringAttribute('mention_users');
  }
  public set mentionUsers(value: string) {
    this._mentionUsers = value;
  }
  public resetMentionUsers() {
    this._mentionUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionUsersInput() {
    return this._mentionUsers;
  }

  // recipient - computed: false, optional: true, required: false
  private _recipient?: string; 
  public get recipient() {
    return this.getStringAttribute('recipient');
  }
  public set recipient(value: string) {
    this._recipient = value;
  }
  public resetRecipient() {
    this._recipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContactPointSlackList extends cdktf.ComplexList {
  public internalValue? : ContactPointSlack[] | cdktf.IResolvable

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
  public get(index: number): ContactPointSlackOutputReference {
    return new ContactPointSlackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointSns {
  /**
  * AWS access key ID used to authenticate with Amazon SNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#access_key ContactPoint#access_key}
  */
  readonly accessKey?: string;
  /**
  * The Amazon Resource Name (ARN) of the role to assume to send notifications to Amazon SNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#assume_role_arn ContactPoint#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * The authentication provider to use. Valid values are `default`, `arn` and `keys`. Default is `default`. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#auth_provider ContactPoint#auth_provider}
  */
  readonly authProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#body ContactPoint#body}
  */
  readonly body?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The external ID to use when assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#external_id ContactPoint#external_id}
  */
  readonly externalId?: string;
  /**
  * The format of the message to send. Valid values are `text`, `body` and `json`. Default is `text`. Defaults to `text`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message_format ContactPoint#message_format}
  */
  readonly messageFormat?: string;
  /**
  * AWS secret access key used to authenticate with Amazon SNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#secret_key ContactPoint#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#subject ContactPoint#subject}
  */
  readonly subject?: string;
  /**
  * The Amazon SNS topic to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#topic ContactPoint#topic}
  */
  readonly topic: string;
}

export function contactPointSnsToTerraform(struct?: ContactPointSns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    assume_role_arn: cdktf.stringToTerraform(struct!.assumeRoleArn),
    auth_provider: cdktf.stringToTerraform(struct!.authProvider),
    body: cdktf.stringToTerraform(struct!.body),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    subject: cdktf.stringToTerraform(struct!.subject),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function contactPointSnsToHclTerraform(struct?: ContactPointSns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_provider: {
      value: cdktf.stringToHclTerraform(struct!.authProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointSnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointSns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._assumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleArn = this._assumeRoleArn;
    }
    if (this._authProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProvider = this._authProvider;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointSns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._assumeRoleArn = undefined;
      this._authProvider = undefined;
      this._body = undefined;
      this._disableResolveMessage = undefined;
      this._externalId = undefined;
      this._messageFormat = undefined;
      this._secretKey = undefined;
      this._settings = undefined;
      this._subject = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._assumeRoleArn = value.assumeRoleArn;
      this._authProvider = value.authProvider;
      this._body = value.body;
      this._disableResolveMessage = value.disableResolveMessage;
      this._externalId = value.externalId;
      this._messageFormat = value.messageFormat;
      this._secretKey = value.secretKey;
      this._settings = value.settings;
      this._subject = value.subject;
      this._topic = value.topic;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // assume_role_arn - computed: false, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // auth_provider - computed: false, optional: true, required: false
  private _authProvider?: string; 
  public get authProvider() {
    return this.getStringAttribute('auth_provider');
  }
  public set authProvider(value: string) {
    this._authProvider = value;
  }
  public resetAuthProvider() {
    this._authProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderInput() {
    return this._authProvider;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ContactPointSnsList extends cdktf.ComplexList {
  public internalValue? : ContactPointSns[] | cdktf.IResolvable

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
  public get(index: number): ContactPointSnsOutputReference {
    return new ContactPointSnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointTeams {
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The templated message content to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * The templated subtitle for each message section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#section_title ContactPoint#section_title}
  */
  readonly sectionTitle?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * A Teams webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
}

export function contactPointTeamsToTerraform(struct?: ContactPointTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    section_title: cdktf.stringToTerraform(struct!.sectionTitle),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointTeamsToHclTerraform(struct?: ContactPointTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    section_title: {
      value: cdktf.stringToHclTerraform(struct!.sectionTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointTeamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointTeams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._sectionTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionTitle = this._sectionTitle;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointTeams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._sectionTitle = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._sectionTitle = value.sectionTitle;
      this._settings = value.settings;
      this._title = value.title;
      this._url = value.url;
    }
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // section_title - computed: false, optional: true, required: false
  private _sectionTitle?: string; 
  public get sectionTitle() {
    return this.getStringAttribute('section_title');
  }
  public set sectionTitle(value: string) {
    this._sectionTitle = value;
  }
  public resetSectionTitle() {
    this._sectionTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionTitleInput() {
    return this._sectionTitle;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointTeamsList extends cdktf.ComplexList {
  public internalValue? : ContactPointTeams[] | cdktf.IResolvable

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
  public get(index: number): ContactPointTeamsOutputReference {
    return new ContactPointTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointTelegram {
  /**
  * The chat ID to send messages to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#chat_id ContactPoint#chat_id}
  */
  readonly chatId: string;
  /**
  * When set users will receive a notification with no sound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_notifications ContactPoint#disable_notifications}
  */
  readonly disableNotifications?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * When set it disables link previews for links in the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_web_page_preview ContactPoint#disable_web_page_preview}
  */
  readonly disableWebPagePreview?: boolean | cdktf.IResolvable;
  /**
  * The templated content of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * The ID of the message thread to send the message to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message_thread_id ContactPoint#message_thread_id}
  */
  readonly messageThreadId?: string;
  /**
  * Mode for parsing entities in the message text. Supported: None, Markdown, MarkdownV2, and HTML. HTML is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#parse_mode ContactPoint#parse_mode}
  */
  readonly parseMode?: string;
  /**
  * When set it protects the contents of the message from forwarding and saving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#protect_content ContactPoint#protect_content}
  */
  readonly protectContent?: boolean | cdktf.IResolvable;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The Telegram bot token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#token ContactPoint#token}
  */
  readonly token: string;
}

export function contactPointTelegramToTerraform(struct?: ContactPointTelegram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chat_id: cdktf.stringToTerraform(struct!.chatId),
    disable_notifications: cdktf.booleanToTerraform(struct!.disableNotifications),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    disable_web_page_preview: cdktf.booleanToTerraform(struct!.disableWebPagePreview),
    message: cdktf.stringToTerraform(struct!.message),
    message_thread_id: cdktf.stringToTerraform(struct!.messageThreadId),
    parse_mode: cdktf.stringToTerraform(struct!.parseMode),
    protect_content: cdktf.booleanToTerraform(struct!.protectContent),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function contactPointTelegramToHclTerraform(struct?: ContactPointTelegram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chat_id: {
      value: cdktf.stringToHclTerraform(struct!.chatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.disableNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_web_page_preview: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebPagePreview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_thread_id: {
      value: cdktf.stringToHclTerraform(struct!.messageThreadId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse_mode: {
      value: cdktf.stringToHclTerraform(struct!.parseMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_content: {
      value: cdktf.booleanToHclTerraform(struct!.protectContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointTelegramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointTelegram | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatId = this._chatId;
    }
    if (this._disableNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNotifications = this._disableNotifications;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._disableWebPagePreview !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebPagePreview = this._disableWebPagePreview;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageThreadId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageThreadId = this._messageThreadId;
    }
    if (this._parseMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseMode = this._parseMode;
    }
    if (this._protectContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectContent = this._protectContent;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointTelegram | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chatId = undefined;
      this._disableNotifications = undefined;
      this._disableResolveMessage = undefined;
      this._disableWebPagePreview = undefined;
      this._message = undefined;
      this._messageThreadId = undefined;
      this._parseMode = undefined;
      this._protectContent = undefined;
      this._settings = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chatId = value.chatId;
      this._disableNotifications = value.disableNotifications;
      this._disableResolveMessage = value.disableResolveMessage;
      this._disableWebPagePreview = value.disableWebPagePreview;
      this._message = value.message;
      this._messageThreadId = value.messageThreadId;
      this._parseMode = value.parseMode;
      this._protectContent = value.protectContent;
      this._settings = value.settings;
      this._token = value.token;
    }
  }

  // chat_id - computed: false, optional: false, required: true
  private _chatId?: string; 
  public get chatId() {
    return this.getStringAttribute('chat_id');
  }
  public set chatId(value: string) {
    this._chatId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chatIdInput() {
    return this._chatId;
  }

  // disable_notifications - computed: false, optional: true, required: false
  private _disableNotifications?: boolean | cdktf.IResolvable; 
  public get disableNotifications() {
    return this.getBooleanAttribute('disable_notifications');
  }
  public set disableNotifications(value: boolean | cdktf.IResolvable) {
    this._disableNotifications = value;
  }
  public resetDisableNotifications() {
    this._disableNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNotificationsInput() {
    return this._disableNotifications;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // disable_web_page_preview - computed: false, optional: true, required: false
  private _disableWebPagePreview?: boolean | cdktf.IResolvable; 
  public get disableWebPagePreview() {
    return this.getBooleanAttribute('disable_web_page_preview');
  }
  public set disableWebPagePreview(value: boolean | cdktf.IResolvable) {
    this._disableWebPagePreview = value;
  }
  public resetDisableWebPagePreview() {
    this._disableWebPagePreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebPagePreviewInput() {
    return this._disableWebPagePreview;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_thread_id - computed: false, optional: true, required: false
  private _messageThreadId?: string; 
  public get messageThreadId() {
    return this.getStringAttribute('message_thread_id');
  }
  public set messageThreadId(value: string) {
    this._messageThreadId = value;
  }
  public resetMessageThreadId() {
    this._messageThreadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageThreadIdInput() {
    return this._messageThreadId;
  }

  // parse_mode - computed: false, optional: true, required: false
  private _parseMode?: string; 
  public get parseMode() {
    return this.getStringAttribute('parse_mode');
  }
  public set parseMode(value: string) {
    this._parseMode = value;
  }
  public resetParseMode() {
    this._parseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseModeInput() {
    return this._parseMode;
  }

  // protect_content - computed: false, optional: true, required: false
  private _protectContent?: boolean | cdktf.IResolvable; 
  public get protectContent() {
    return this.getBooleanAttribute('protect_content');
  }
  public set protectContent(value: boolean | cdktf.IResolvable) {
    this._protectContent = value;
  }
  public resetProtectContent() {
    this._protectContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectContentInput() {
    return this._protectContent;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ContactPointTelegramList extends cdktf.ComplexList {
  public internalValue? : ContactPointTelegram[] | cdktf.IResolvable

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
  public get(index: number): ContactPointTelegramOutputReference {
    return new ContactPointTelegramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointThreema {
  /**
  * The Threema API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_secret ContactPoint#api_secret}
  */
  readonly apiSecret: string;
  /**
  * The templated description of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#description ContactPoint#description}
  */
  readonly description?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The Threema gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#gateway_id ContactPoint#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * The ID of the recipient of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#recipient_id ContactPoint#recipient_id}
  */
  readonly recipientId: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
}

export function contactPointThreemaToTerraform(struct?: ContactPointThreema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_secret: cdktf.stringToTerraform(struct!.apiSecret),
    description: cdktf.stringToTerraform(struct!.description),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    recipient_id: cdktf.stringToTerraform(struct!.recipientId),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function contactPointThreemaToHclTerraform(struct?: ContactPointThreema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_secret: {
      value: cdktf.stringToHclTerraform(struct!.apiSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient_id: {
      value: cdktf.stringToHclTerraform(struct!.recipientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointThreemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointThreema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecret = this._apiSecret;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._gatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayId = this._gatewayId;
    }
    if (this._recipientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientId = this._recipientId;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointThreema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSecret = undefined;
      this._description = undefined;
      this._disableResolveMessage = undefined;
      this._gatewayId = undefined;
      this._recipientId = undefined;
      this._settings = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSecret = value.apiSecret;
      this._description = value.description;
      this._disableResolveMessage = value.disableResolveMessage;
      this._gatewayId = value.gatewayId;
      this._recipientId = value.recipientId;
      this._settings = value.settings;
      this._title = value.title;
    }
  }

  // api_secret - computed: false, optional: false, required: true
  private _apiSecret?: string; 
  public get apiSecret() {
    return this.getStringAttribute('api_secret');
  }
  public set apiSecret(value: string) {
    this._apiSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
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

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // recipient_id - computed: false, optional: false, required: true
  private _recipientId?: string; 
  public get recipientId() {
    return this.getStringAttribute('recipient_id');
  }
  public set recipientId(value: string) {
    this._recipientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientIdInput() {
    return this._recipientId;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ContactPointThreemaList extends cdktf.ComplexList {
  public internalValue? : ContactPointThreema[] | cdktf.IResolvable

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
  public get(index: number): ContactPointThreemaOutputReference {
    return new ContactPointThreemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointVictorops {
  /**
  * Templated description of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#description ContactPoint#description}
  */
  readonly description?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The VictorOps alert state - typically either `CRITICAL` or `RECOVERY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message_type ContactPoint#message_type}
  */
  readonly messageType?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Templated title to display.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * The VictorOps webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
}

export function contactPointVictoropsToTerraform(struct?: ContactPointVictorops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointVictoropsToHclTerraform(struct?: ContactPointVictorops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointVictoropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointVictorops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointVictorops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disableResolveMessage = undefined;
      this._messageType = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disableResolveMessage = value.disableResolveMessage;
      this._messageType = value.messageType;
      this._settings = value.settings;
      this._title = value.title;
      this._url = value.url;
    }
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

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointVictoropsList extends cdktf.ComplexList {
  public internalValue? : ContactPointVictorops[] | cdktf.IResolvable

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
  public get(index: number): ContactPointVictoropsOutputReference {
    return new ContactPointVictoropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointWebex {
  /**
  * The URL to send webhook requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#api_url ContactPoint#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The templated title of the message to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * ID of the Webex Teams room where to send the messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#room_id ContactPoint#room_id}
  */
  readonly roomId: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The bearer token used to authorize the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#token ContactPoint#token}
  */
  readonly token: string;
}

export function contactPointWebexToTerraform(struct?: ContactPointWebex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    room_id: cdktf.stringToTerraform(struct!.roomId),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function contactPointWebexToHclTerraform(struct?: ContactPointWebex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    room_id: {
      value: cdktf.stringToHclTerraform(struct!.roomId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointWebex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._roomId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roomId = this._roomId;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiUrl = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._roomId = undefined;
      this._settings = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiUrl = value.apiUrl;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._roomId = value.roomId;
      this._settings = value.settings;
      this._token = value.token;
    }
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

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // room_id - computed: false, optional: false, required: true
  private _roomId?: string; 
  public get roomId() {
    return this.getStringAttribute('room_id');
  }
  public set roomId(value: string) {
    this._roomId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roomIdInput() {
    return this._roomId;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ContactPointWebexList extends cdktf.ComplexList {
  public internalValue? : ContactPointWebex[] | cdktf.IResolvable

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
  public get(index: number): ContactPointWebexOutputReference {
    return new ContactPointWebexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointWebhookHmacConfig {
  /**
  * The header in which the HMAC signature will be included. Defaults to `X-Grafana-Alerting-Signature`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#header ContactPoint#header}
  */
  readonly header?: string;
  /**
  * The secret key used to generate the HMAC signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#secret ContactPoint#secret}
  */
  readonly secret: string;
  /**
  * If set, the timestamp will be included in the HMAC signature. The value should be the name of the header to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#timestamp_header ContactPoint#timestamp_header}
  */
  readonly timestampHeader?: string;
}

export function contactPointWebhookHmacConfigToTerraform(struct?: ContactPointWebhookHmacConfigOutputReference | ContactPointWebhookHmacConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    secret: cdktf.stringToTerraform(struct!.secret),
    timestamp_header: cdktf.stringToTerraform(struct!.timestampHeader),
  }
}


export function contactPointWebhookHmacConfigToHclTerraform(struct?: ContactPointWebhookHmacConfigOutputReference | ContactPointWebhookHmacConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_header: {
      value: cdktf.stringToHclTerraform(struct!.timestampHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebhookHmacConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactPointWebhookHmacConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._timestampHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampHeader = this._timestampHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebhookHmacConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header = undefined;
      this._secret = undefined;
      this._timestampHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header = value.header;
      this._secret = value.secret;
      this._timestampHeader = value.timestampHeader;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // timestamp_header - computed: false, optional: true, required: false
  private _timestampHeader?: string; 
  public get timestampHeader() {
    return this.getStringAttribute('timestamp_header');
  }
  public set timestampHeader(value: string) {
    this._timestampHeader = value;
  }
  public resetTimestampHeader() {
    this._timestampHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampHeaderInput() {
    return this._timestampHeader;
  }
}
export interface ContactPointWebhookHttpConfigOauth2ProxyConfig {
  /**
  * Comma-separated list of addresses that should not use a proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#no_proxy ContactPoint#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Optional headers to send to proxies during CONNECT requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#proxy_connect_header ContactPoint#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Use environment HTTP_PROXY, HTTPS_PROXY and NO_PROXY to determine proxies. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#proxy_from_environment ContactPoint#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * HTTP proxy server to use to connect to the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#proxy_url ContactPoint#proxy_url}
  */
  readonly proxyUrl?: string;
}

export function contactPointWebhookHttpConfigOauth2ProxyConfigToTerraform(struct?: ContactPointWebhookHttpConfigOauth2ProxyConfigOutputReference | ContactPointWebhookHttpConfigOauth2ProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
  }
}


export function contactPointWebhookHttpConfigOauth2ProxyConfigToHclTerraform(struct?: ContactPointWebhookHttpConfigOauth2ProxyConfigOutputReference | ContactPointWebhookHttpConfigOauth2ProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_connect_header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyConnectHeader),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy_from_environment: {
      value: cdktf.booleanToHclTerraform(struct!.proxyFromEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebhookHttpConfigOauth2ProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactPointWebhookHttpConfigOauth2ProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._proxyConnectHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectHeader = this._proxyConnectHeader;
    }
    if (this._proxyFromEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyFromEnvironment = this._proxyFromEnvironment;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebhookHttpConfigOauth2ProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noProxy = undefined;
      this._proxyConnectHeader = undefined;
      this._proxyFromEnvironment = undefined;
      this._proxyUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noProxy = value.noProxy;
      this._proxyConnectHeader = value.proxyConnectHeader;
      this._proxyFromEnvironment = value.proxyFromEnvironment;
      this._proxyUrl = value.proxyUrl;
    }
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // proxy_connect_header - computed: false, optional: true, required: false
  private _proxyConnectHeader?: { [key: string]: string }; 
  public get proxyConnectHeader() {
    return this.getStringMapAttribute('proxy_connect_header');
  }
  public set proxyConnectHeader(value: { [key: string]: string }) {
    this._proxyConnectHeader = value;
  }
  public resetProxyConnectHeader() {
    this._proxyConnectHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectHeaderInput() {
    return this._proxyConnectHeader;
  }

  // proxy_from_environment - computed: false, optional: true, required: false
  private _proxyFromEnvironment?: boolean | cdktf.IResolvable; 
  public get proxyFromEnvironment() {
    return this.getBooleanAttribute('proxy_from_environment');
  }
  public set proxyFromEnvironment(value: boolean | cdktf.IResolvable) {
    this._proxyFromEnvironment = value;
  }
  public resetProxyFromEnvironment() {
    this._proxyFromEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFromEnvironmentInput() {
    return this._proxyFromEnvironment;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }
}
export interface ContactPointWebhookHttpConfigOauth2TlsConfig {
  /**
  * Certificate in PEM format to use when verifying the server's certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#ca_certificate ContactPoint#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Client certificate in PEM format to use when connecting to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#client_certificate ContactPoint#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Client key in PEM format to use when connecting to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#client_key ContactPoint#client_key}
  */
  readonly clientKey?: string;
  /**
  * Do not verify the server's certificate chain and host name. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#insecure_skip_verify ContactPoint#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
}

export function contactPointWebhookHttpConfigOauth2TlsConfigToTerraform(struct?: ContactPointWebhookHttpConfigOauth2TlsConfigOutputReference | ContactPointWebhookHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
  }
}


export function contactPointWebhookHttpConfigOauth2TlsConfigToHclTerraform(struct?: ContactPointWebhookHttpConfigOauth2TlsConfigOutputReference | ContactPointWebhookHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
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
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebhookHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactPointWebhookHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebhookHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._insecureSkipVerify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._insecureSkipVerify = value.insecureSkipVerify;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
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

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }
}
export interface ContactPointWebhookHttpConfigOauth2 {
  /**
  * Client ID to use when authenticating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#client_id ContactPoint#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret to use when authenticating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#client_secret ContactPoint#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Optional parameters to append to the access token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#endpoint_params ContactPoint#endpoint_params}
  */
  readonly endpointParams?: { [key: string]: string };
  /**
  * Optional scopes to request when obtaining an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#scopes ContactPoint#scopes}
  */
  readonly scopes?: string[];
  /**
  * URL for the access token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#token_url ContactPoint#token_url}
  */
  readonly tokenUrl: string;
  /**
  * proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#proxy_config ContactPoint#proxy_config}
  */
  readonly proxyConfig?: ContactPointWebhookHttpConfigOauth2ProxyConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#tls_config ContactPoint#tls_config}
  */
  readonly tlsConfig?: ContactPointWebhookHttpConfigOauth2TlsConfig;
}

export function contactPointWebhookHttpConfigOauth2ToTerraform(struct?: ContactPointWebhookHttpConfigOauth2OutputReference | ContactPointWebhookHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    endpoint_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointParams),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    proxy_config: contactPointWebhookHttpConfigOauth2ProxyConfigToTerraform(struct!.proxyConfig),
    tls_config: contactPointWebhookHttpConfigOauth2TlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function contactPointWebhookHttpConfigOauth2ToHclTerraform(struct?: ContactPointWebhookHttpConfigOauth2OutputReference | ContactPointWebhookHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    endpoint_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_config: {
      value: contactPointWebhookHttpConfigOauth2ProxyConfigToHclTerraform(struct!.proxyConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ContactPointWebhookHttpConfigOauth2ProxyConfigList",
    },
    tls_config: {
      value: contactPointWebhookHttpConfigOauth2TlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ContactPointWebhookHttpConfigOauth2TlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebhookHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactPointWebhookHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._endpointParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointParams = this._endpointParams;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._proxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfig = this._proxyConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebhookHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._endpointParams = undefined;
      this._scopes = undefined;
      this._tokenUrl = undefined;
      this._proxyConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._endpointParams = value.endpointParams;
      this._scopes = value.scopes;
      this._tokenUrl = value.tokenUrl;
      this._proxyConfig.internalValue = value.proxyConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // endpoint_params - computed: false, optional: true, required: false
  private _endpointParams?: { [key: string]: string }; 
  public get endpointParams() {
    return this.getStringMapAttribute('endpoint_params');
  }
  public set endpointParams(value: { [key: string]: string }) {
    this._endpointParams = value;
  }
  public resetEndpointParams() {
    this._endpointParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointParamsInput() {
    return this._endpointParams;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new ContactPointWebhookHttpConfigOauth2ProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: ContactPointWebhookHttpConfigOauth2ProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new ContactPointWebhookHttpConfigOauth2TlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: ContactPointWebhookHttpConfigOauth2TlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface ContactPointWebhookHttpConfig {
  /**
  * oauth2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#oauth2 ContactPoint#oauth2}
  */
  readonly oauth2?: ContactPointWebhookHttpConfigOauth2;
}

export function contactPointWebhookHttpConfigToTerraform(struct?: ContactPointWebhookHttpConfigOutputReference | ContactPointWebhookHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2: contactPointWebhookHttpConfigOauth2ToTerraform(struct!.oauth2),
  }
}


export function contactPointWebhookHttpConfigToHclTerraform(struct?: ContactPointWebhookHttpConfigOutputReference | ContactPointWebhookHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth2: {
      value: contactPointWebhookHttpConfigOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "set",
      storageClassType: "ContactPointWebhookHttpConfigOauth2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebhookHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactPointWebhookHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebhookHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauth2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauth2.internalValue = value.oauth2;
    }
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new ContactPointWebhookHttpConfigOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: ContactPointWebhookHttpConfigOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }
}
export interface ContactPointWebhookPayload {
  /**
  * Custom payload template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#template ContactPoint#template}
  */
  readonly template: string;
  /**
  * Optionally provide a variables to be used in the payload template. They will be available in the template as `.Vars.<variable_name>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#vars ContactPoint#vars}
  */
  readonly vars?: { [key: string]: string };
}

export function contactPointWebhookPayloadToTerraform(struct?: ContactPointWebhookPayloadOutputReference | ContactPointWebhookPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vars),
  }
}


export function contactPointWebhookPayloadToHclTerraform(struct?: ContactPointWebhookPayloadOutputReference | ContactPointWebhookPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebhookPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactPointWebhookPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vars !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebhookPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._template = undefined;
      this._vars = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._template = value.template;
      this._vars = value.vars;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }
}
export interface ContactPointWebhook {
  /**
  * Allows a custom authorization scheme - attaches an auth header with this value. Do not use in conjunction with basic auth parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#authorization_credentials ContactPoint#authorization_credentials}
  */
  readonly authorizationCredentials?: string;
  /**
  * Allows a custom authorization scheme - attaches an auth header with this name. Do not use in conjunction with basic auth parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#authorization_scheme ContactPoint#authorization_scheme}
  */
  readonly authorizationScheme?: string;
  /**
  * The username to use in basic auth headers attached to the request. If omitted, basic auth will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#basic_auth_password ContactPoint#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * The username to use in basic auth headers attached to the request. If omitted, basic auth will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#basic_auth_user ContactPoint#basic_auth_user}
  */
  readonly basicAuthUser?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Custom headers to attach to the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#headers ContactPoint#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The HTTP method to use in the request. Defaults to `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#http_method ContactPoint#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The maximum number of alerts to send in a single request. This can be helpful in limiting the size of the request body. The default is 0, which indicates no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#max_alerts ContactPoint#max_alerts}
  */
  readonly maxAlerts?: number;
  /**
  * Custom message. You can use template variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Templated title of the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * Allows configuring TLS for the webhook notifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#tls_config ContactPoint#tls_config}
  */
  readonly tlsConfig?: { [key: string]: string };
  /**
  * The URL to send webhook requests to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url: string;
  /**
  * hmac_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#hmac_config ContactPoint#hmac_config}
  */
  readonly hmacConfig?: ContactPointWebhookHmacConfig;
  /**
  * http_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#http_config ContactPoint#http_config}
  */
  readonly httpConfig?: ContactPointWebhookHttpConfig;
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#payload ContactPoint#payload}
  */
  readonly payload?: ContactPointWebhookPayload;
}

export function contactPointWebhookToTerraform(struct?: ContactPointWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_credentials: cdktf.stringToTerraform(struct!.authorizationCredentials),
    authorization_scheme: cdktf.stringToTerraform(struct!.authorizationScheme),
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_user: cdktf.stringToTerraform(struct!.basicAuthUser),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    max_alerts: cdktf.numberToTerraform(struct!.maxAlerts),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    tls_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tlsConfig),
    url: cdktf.stringToTerraform(struct!.url),
    hmac_config: contactPointWebhookHmacConfigToTerraform(struct!.hmacConfig),
    http_config: contactPointWebhookHttpConfigToTerraform(struct!.httpConfig),
    payload: contactPointWebhookPayloadToTerraform(struct!.payload),
  }
}


export function contactPointWebhookToHclTerraform(struct?: ContactPointWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_credentials: {
      value: cdktf.stringToHclTerraform(struct!.authorizationCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_scheme: {
      value: cdktf.stringToHclTerraform(struct!.authorizationScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_user: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_alerts: {
      value: cdktf.numberToHclTerraform(struct!.maxAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tlsConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hmac_config: {
      value: contactPointWebhookHmacConfigToHclTerraform(struct!.hmacConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ContactPointWebhookHmacConfigList",
    },
    http_config: {
      value: contactPointWebhookHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ContactPointWebhookHttpConfigList",
    },
    payload: {
      value: contactPointWebhookPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "set",
      storageClassType: "ContactPointWebhookPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWebhookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCredentials = this._authorizationCredentials;
    }
    if (this._authorizationScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationScheme = this._authorizationScheme;
    }
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUser = this._basicAuthUser;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._maxAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAlerts = this._maxAlerts;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._hmacConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacConfig = this._hmacConfig?.internalValue;
    }
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationCredentials = undefined;
      this._authorizationScheme = undefined;
      this._basicAuthPassword = undefined;
      this._basicAuthUser = undefined;
      this._disableResolveMessage = undefined;
      this._headers = undefined;
      this._httpMethod = undefined;
      this._maxAlerts = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._tlsConfig = undefined;
      this._url = undefined;
      this._hmacConfig.internalValue = undefined;
      this._httpConfig.internalValue = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationCredentials = value.authorizationCredentials;
      this._authorizationScheme = value.authorizationScheme;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUser = value.basicAuthUser;
      this._disableResolveMessage = value.disableResolveMessage;
      this._headers = value.headers;
      this._httpMethod = value.httpMethod;
      this._maxAlerts = value.maxAlerts;
      this._message = value.message;
      this._settings = value.settings;
      this._title = value.title;
      this._tlsConfig = value.tlsConfig;
      this._url = value.url;
      this._hmacConfig.internalValue = value.hmacConfig;
      this._httpConfig.internalValue = value.httpConfig;
      this._payload.internalValue = value.payload;
    }
  }

  // authorization_credentials - computed: false, optional: true, required: false
  private _authorizationCredentials?: string; 
  public get authorizationCredentials() {
    return this.getStringAttribute('authorization_credentials');
  }
  public set authorizationCredentials(value: string) {
    this._authorizationCredentials = value;
  }
  public resetAuthorizationCredentials() {
    this._authorizationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCredentialsInput() {
    return this._authorizationCredentials;
  }

  // authorization_scheme - computed: false, optional: true, required: false
  private _authorizationScheme?: string; 
  public get authorizationScheme() {
    return this.getStringAttribute('authorization_scheme');
  }
  public set authorizationScheme(value: string) {
    this._authorizationScheme = value;
  }
  public resetAuthorizationScheme() {
    this._authorizationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSchemeInput() {
    return this._authorizationScheme;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_user - computed: false, optional: true, required: false
  private _basicAuthUser?: string; 
  public get basicAuthUser() {
    return this.getStringAttribute('basic_auth_user');
  }
  public set basicAuthUser(value: string) {
    this._basicAuthUser = value;
  }
  public resetBasicAuthUser() {
    this._basicAuthUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUserInput() {
    return this._basicAuthUser;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // max_alerts - computed: false, optional: true, required: false
  private _maxAlerts?: number; 
  public get maxAlerts() {
    return this.getNumberAttribute('max_alerts');
  }
  public set maxAlerts(value: number) {
    this._maxAlerts = value;
  }
  public resetMaxAlerts() {
    this._maxAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlertsInput() {
    return this._maxAlerts;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: { [key: string]: string }; 
  public get tlsConfig() {
    return this.getStringMapAttribute('tls_config');
  }
  public set tlsConfig(value: { [key: string]: string }) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // hmac_config - computed: false, optional: true, required: false
  private _hmacConfig = new ContactPointWebhookHmacConfigOutputReference(this, "hmac_config");
  public get hmacConfig() {
    return this._hmacConfig;
  }
  public putHmacConfig(value: ContactPointWebhookHmacConfig) {
    this._hmacConfig.internalValue = value;
  }
  public resetHmacConfig() {
    this._hmacConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacConfigInput() {
    return this._hmacConfig.internalValue;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new ContactPointWebhookHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: ContactPointWebhookHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new ContactPointWebhookPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: ContactPointWebhookPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

export class ContactPointWebhookList extends cdktf.ComplexList {
  public internalValue? : ContactPointWebhook[] | cdktf.IResolvable

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
  public get(index: number): ContactPointWebhookOutputReference {
    return new ContactPointWebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactPointWecom {
  /**
  * Agent ID added to the request payload when using APIAPP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#agent_id ContactPoint#agent_id}
  */
  readonly agentId?: string;
  /**
  * Corp ID used to get token when using APIAPP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#corp_id ContactPoint#corp_id}
  */
  readonly corpId?: string;
  /**
  * Whether to disable sending resolve messages. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * The templated content of the message to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#message ContactPoint#message}
  */
  readonly message?: string;
  /**
  * The type of them message. Supported: markdown, text. Default: text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#msg_type ContactPoint#msg_type}
  */
  readonly msgType?: string;
  /**
  * The secret key required to obtain access token when using APIAPP. See https://work.weixin.qq.com/wework_admin/frame#apps to create APIAPP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#secret ContactPoint#secret}
  */
  readonly secret?: string;
  /**
  * Additional custom properties to attach to the notifier. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#settings ContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The templated title of the message to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#title ContactPoint#title}
  */
  readonly title?: string;
  /**
  * The ID of user that should receive the message. Multiple entries should be separated by '|'. Default: @all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#to_user ContactPoint#to_user}
  */
  readonly toUser?: string;
  /**
  * The WeCom webhook URL. Required if using GroupRobot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#url ContactPoint#url}
  */
  readonly url?: string;
}

export function contactPointWecomToTerraform(struct?: ContactPointWecom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    corp_id: cdktf.stringToTerraform(struct!.corpId),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
    secret: cdktf.stringToTerraform(struct!.secret),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    title: cdktf.stringToTerraform(struct!.title),
    to_user: cdktf.stringToTerraform(struct!.toUser),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactPointWecomToHclTerraform(struct?: ContactPointWecom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    corp_id: {
      value: cdktf.stringToHclTerraform(struct!.corpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_user: {
      value: cdktf.stringToHclTerraform(struct!.toUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactPointWecomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactPointWecom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._corpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.corpId = this._corpId;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._toUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.toUser = this._toUser;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactPointWecom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentId = undefined;
      this._corpId = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._msgType = undefined;
      this._secret = undefined;
      this._settings = undefined;
      this._title = undefined;
      this._toUser = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentId = value.agentId;
      this._corpId = value.corpId;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._msgType = value.msgType;
      this._secret = value.secret;
      this._settings = value.settings;
      this._title = value.title;
      this._toUser = value.toUser;
      this._url = value.url;
    }
  }

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // corp_id - computed: false, optional: true, required: false
  private _corpId?: string; 
  public get corpId() {
    return this.getStringAttribute('corp_id');
  }
  public set corpId(value: string) {
    this._corpId = value;
  }
  public resetCorpId() {
    this._corpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corpIdInput() {
    return this._corpId;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // to_user - computed: false, optional: true, required: false
  private _toUser?: string; 
  public get toUser() {
    return this.getStringAttribute('to_user');
  }
  public set toUser(value: string) {
    this._toUser = value;
  }
  public resetToUser() {
    this._toUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toUserInput() {
    return this._toUser;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactPointWecomList extends cdktf.ComplexList {
  public internalValue? : ContactPointWecom[] | cdktf.IResolvable

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
  public get(index: number): ContactPointWecomOutputReference {
    return new ContactPointWecomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point grafana_contact_point}
*/
export class ContactPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_contact_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContactPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContactPoint to import
  * @param importFromId The id of the existing ContactPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContactPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_contact_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/contact_point grafana_contact_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactPointConfig
  */
  public constructor(scope: Construct, id: string, config: ContactPointConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_contact_point',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.45.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableProvenance = config.disableProvenance;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._alertmanager.internalValue = config.alertmanager;
    this._dingding.internalValue = config.dingding;
    this._discord.internalValue = config.discord;
    this._email.internalValue = config.email;
    this._googlechat.internalValue = config.googlechat;
    this._jira.internalValue = config.jira;
    this._kafka.internalValue = config.kafka;
    this._line.internalValue = config.line;
    this._oncall.internalValue = config.oncall;
    this._opsgenie.internalValue = config.opsgenie;
    this._pagerduty.internalValue = config.pagerduty;
    this._pushover.internalValue = config.pushover;
    this._sensugo.internalValue = config.sensugo;
    this._slack.internalValue = config.slack;
    this._sns.internalValue = config.sns;
    this._teams.internalValue = config.teams;
    this._telegram.internalValue = config.telegram;
    this._threema.internalValue = config.threema;
    this._victorops.internalValue = config.victorops;
    this._webex.internalValue = config.webex;
    this._webhook.internalValue = config.webhook;
    this._wecom.internalValue = config.wecom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_provenance - computed: false, optional: true, required: false
  private _disableProvenance?: boolean | cdktf.IResolvable; 
  public get disableProvenance() {
    return this.getBooleanAttribute('disable_provenance');
  }
  public set disableProvenance(value: boolean | cdktf.IResolvable) {
    this._disableProvenance = value;
  }
  public resetDisableProvenance() {
    this._disableProvenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProvenanceInput() {
    return this._disableProvenance;
  }

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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // alertmanager - computed: false, optional: true, required: false
  private _alertmanager = new ContactPointAlertmanagerList(this, "alertmanager", true);
  public get alertmanager() {
    return this._alertmanager;
  }
  public putAlertmanager(value: ContactPointAlertmanager[] | cdktf.IResolvable) {
    this._alertmanager.internalValue = value;
  }
  public resetAlertmanager() {
    this._alertmanager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerInput() {
    return this._alertmanager.internalValue;
  }

  // dingding - computed: false, optional: true, required: false
  private _dingding = new ContactPointDingdingList(this, "dingding", true);
  public get dingding() {
    return this._dingding;
  }
  public putDingding(value: ContactPointDingding[] | cdktf.IResolvable) {
    this._dingding.internalValue = value;
  }
  public resetDingding() {
    this._dingding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dingdingInput() {
    return this._dingding.internalValue;
  }

  // discord - computed: false, optional: true, required: false
  private _discord = new ContactPointDiscordList(this, "discord", true);
  public get discord() {
    return this._discord;
  }
  public putDiscord(value: ContactPointDiscord[] | cdktf.IResolvable) {
    this._discord.internalValue = value;
  }
  public resetDiscord() {
    this._discord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discordInput() {
    return this._discord.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ContactPointEmailList(this, "email", true);
  public get email() {
    return this._email;
  }
  public putEmail(value: ContactPointEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // googlechat - computed: false, optional: true, required: false
  private _googlechat = new ContactPointGooglechatList(this, "googlechat", true);
  public get googlechat() {
    return this._googlechat;
  }
  public putGooglechat(value: ContactPointGooglechat[] | cdktf.IResolvable) {
    this._googlechat.internalValue = value;
  }
  public resetGooglechat() {
    this._googlechat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlechatInput() {
    return this._googlechat.internalValue;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new ContactPointJiraList(this, "jira", true);
  public get jira() {
    return this._jira;
  }
  public putJira(value: ContactPointJira[] | cdktf.IResolvable) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new ContactPointKafkaList(this, "kafka", true);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ContactPointKafka[] | cdktf.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // line - computed: false, optional: true, required: false
  private _line = new ContactPointLineList(this, "line", true);
  public get line() {
    return this._line;
  }
  public putLine(value: ContactPointLine[] | cdktf.IResolvable) {
    this._line.internalValue = value;
  }
  public resetLine() {
    this._line.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line.internalValue;
  }

  // oncall - computed: false, optional: true, required: false
  private _oncall = new ContactPointOncallList(this, "oncall", true);
  public get oncall() {
    return this._oncall;
  }
  public putOncall(value: ContactPointOncall[] | cdktf.IResolvable) {
    this._oncall.internalValue = value;
  }
  public resetOncall() {
    this._oncall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oncallInput() {
    return this._oncall.internalValue;
  }

  // opsgenie - computed: false, optional: true, required: false
  private _opsgenie = new ContactPointOpsgenieList(this, "opsgenie", true);
  public get opsgenie() {
    return this._opsgenie;
  }
  public putOpsgenie(value: ContactPointOpsgenie[] | cdktf.IResolvable) {
    this._opsgenie.internalValue = value;
  }
  public resetOpsgenie() {
    this._opsgenie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieInput() {
    return this._opsgenie.internalValue;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new ContactPointPagerdutyList(this, "pagerduty", true);
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: ContactPointPagerduty[] | cdktf.IResolvable) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }

  // pushover - computed: false, optional: true, required: false
  private _pushover = new ContactPointPushoverList(this, "pushover", true);
  public get pushover() {
    return this._pushover;
  }
  public putPushover(value: ContactPointPushover[] | cdktf.IResolvable) {
    this._pushover.internalValue = value;
  }
  public resetPushover() {
    this._pushover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushoverInput() {
    return this._pushover.internalValue;
  }

  // sensugo - computed: false, optional: true, required: false
  private _sensugo = new ContactPointSensugoList(this, "sensugo", true);
  public get sensugo() {
    return this._sensugo;
  }
  public putSensugo(value: ContactPointSensugo[] | cdktf.IResolvable) {
    this._sensugo.internalValue = value;
  }
  public resetSensugo() {
    this._sensugo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensugoInput() {
    return this._sensugo.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new ContactPointSlackList(this, "slack", true);
  public get slack() {
    return this._slack;
  }
  public putSlack(value: ContactPointSlack[] | cdktf.IResolvable) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new ContactPointSnsList(this, "sns", true);
  public get sns() {
    return this._sns;
  }
  public putSns(value: ContactPointSns[] | cdktf.IResolvable) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // teams - computed: false, optional: true, required: false
  private _teams = new ContactPointTeamsList(this, "teams", true);
  public get teams() {
    return this._teams;
  }
  public putTeams(value: ContactPointTeams[] | cdktf.IResolvable) {
    this._teams.internalValue = value;
  }
  public resetTeams() {
    this._teams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams.internalValue;
  }

  // telegram - computed: false, optional: true, required: false
  private _telegram = new ContactPointTelegramList(this, "telegram", true);
  public get telegram() {
    return this._telegram;
  }
  public putTelegram(value: ContactPointTelegram[] | cdktf.IResolvable) {
    this._telegram.internalValue = value;
  }
  public resetTelegram() {
    this._telegram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegramInput() {
    return this._telegram.internalValue;
  }

  // threema - computed: false, optional: true, required: false
  private _threema = new ContactPointThreemaList(this, "threema", true);
  public get threema() {
    return this._threema;
  }
  public putThreema(value: ContactPointThreema[] | cdktf.IResolvable) {
    this._threema.internalValue = value;
  }
  public resetThreema() {
    this._threema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threemaInput() {
    return this._threema.internalValue;
  }

  // victorops - computed: false, optional: true, required: false
  private _victorops = new ContactPointVictoropsList(this, "victorops", true);
  public get victorops() {
    return this._victorops;
  }
  public putVictorops(value: ContactPointVictorops[] | cdktf.IResolvable) {
    this._victorops.internalValue = value;
  }
  public resetVictorops() {
    this._victorops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victoropsInput() {
    return this._victorops.internalValue;
  }

  // webex - computed: false, optional: true, required: false
  private _webex = new ContactPointWebexList(this, "webex", true);
  public get webex() {
    return this._webex;
  }
  public putWebex(value: ContactPointWebex[] | cdktf.IResolvable) {
    this._webex.internalValue = value;
  }
  public resetWebex() {
    this._webex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webexInput() {
    return this._webex.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new ContactPointWebhookList(this, "webhook", true);
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: ContactPointWebhook[] | cdktf.IResolvable) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // wecom - computed: false, optional: true, required: false
  private _wecom = new ContactPointWecomList(this, "wecom", true);
  public get wecom() {
    return this._wecom;
  }
  public putWecom(value: ContactPointWecom[] | cdktf.IResolvable) {
    this._wecom.internalValue = value;
  }
  public resetWecom() {
    this._wecom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wecomInput() {
    return this._wecom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_provenance: cdktf.booleanToTerraform(this._disableProvenance),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      alertmanager: cdktf.listMapper(contactPointAlertmanagerToTerraform, true)(this._alertmanager.internalValue),
      dingding: cdktf.listMapper(contactPointDingdingToTerraform, true)(this._dingding.internalValue),
      discord: cdktf.listMapper(contactPointDiscordToTerraform, true)(this._discord.internalValue),
      email: cdktf.listMapper(contactPointEmailToTerraform, true)(this._email.internalValue),
      googlechat: cdktf.listMapper(contactPointGooglechatToTerraform, true)(this._googlechat.internalValue),
      jira: cdktf.listMapper(contactPointJiraToTerraform, true)(this._jira.internalValue),
      kafka: cdktf.listMapper(contactPointKafkaToTerraform, true)(this._kafka.internalValue),
      line: cdktf.listMapper(contactPointLineToTerraform, true)(this._line.internalValue),
      oncall: cdktf.listMapper(contactPointOncallToTerraform, true)(this._oncall.internalValue),
      opsgenie: cdktf.listMapper(contactPointOpsgenieToTerraform, true)(this._opsgenie.internalValue),
      pagerduty: cdktf.listMapper(contactPointPagerdutyToTerraform, true)(this._pagerduty.internalValue),
      pushover: cdktf.listMapper(contactPointPushoverToTerraform, true)(this._pushover.internalValue),
      sensugo: cdktf.listMapper(contactPointSensugoToTerraform, true)(this._sensugo.internalValue),
      slack: cdktf.listMapper(contactPointSlackToTerraform, true)(this._slack.internalValue),
      sns: cdktf.listMapper(contactPointSnsToTerraform, true)(this._sns.internalValue),
      teams: cdktf.listMapper(contactPointTeamsToTerraform, true)(this._teams.internalValue),
      telegram: cdktf.listMapper(contactPointTelegramToTerraform, true)(this._telegram.internalValue),
      threema: cdktf.listMapper(contactPointThreemaToTerraform, true)(this._threema.internalValue),
      victorops: cdktf.listMapper(contactPointVictoropsToTerraform, true)(this._victorops.internalValue),
      webex: cdktf.listMapper(contactPointWebexToTerraform, true)(this._webex.internalValue),
      webhook: cdktf.listMapper(contactPointWebhookToTerraform, true)(this._webhook.internalValue),
      wecom: cdktf.listMapper(contactPointWecomToTerraform, true)(this._wecom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_provenance: {
        value: cdktf.booleanToHclTerraform(this._disableProvenance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alertmanager: {
        value: cdktf.listMapperHcl(contactPointAlertmanagerToHclTerraform, true)(this._alertmanager.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointAlertmanagerList",
      },
      dingding: {
        value: cdktf.listMapperHcl(contactPointDingdingToHclTerraform, true)(this._dingding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointDingdingList",
      },
      discord: {
        value: cdktf.listMapperHcl(contactPointDiscordToHclTerraform, true)(this._discord.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointDiscordList",
      },
      email: {
        value: cdktf.listMapperHcl(contactPointEmailToHclTerraform, true)(this._email.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointEmailList",
      },
      googlechat: {
        value: cdktf.listMapperHcl(contactPointGooglechatToHclTerraform, true)(this._googlechat.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointGooglechatList",
      },
      jira: {
        value: cdktf.listMapperHcl(contactPointJiraToHclTerraform, true)(this._jira.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointJiraList",
      },
      kafka: {
        value: cdktf.listMapperHcl(contactPointKafkaToHclTerraform, true)(this._kafka.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointKafkaList",
      },
      line: {
        value: cdktf.listMapperHcl(contactPointLineToHclTerraform, true)(this._line.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointLineList",
      },
      oncall: {
        value: cdktf.listMapperHcl(contactPointOncallToHclTerraform, true)(this._oncall.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointOncallList",
      },
      opsgenie: {
        value: cdktf.listMapperHcl(contactPointOpsgenieToHclTerraform, true)(this._opsgenie.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointOpsgenieList",
      },
      pagerduty: {
        value: cdktf.listMapperHcl(contactPointPagerdutyToHclTerraform, true)(this._pagerduty.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointPagerdutyList",
      },
      pushover: {
        value: cdktf.listMapperHcl(contactPointPushoverToHclTerraform, true)(this._pushover.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointPushoverList",
      },
      sensugo: {
        value: cdktf.listMapperHcl(contactPointSensugoToHclTerraform, true)(this._sensugo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointSensugoList",
      },
      slack: {
        value: cdktf.listMapperHcl(contactPointSlackToHclTerraform, true)(this._slack.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointSlackList",
      },
      sns: {
        value: cdktf.listMapperHcl(contactPointSnsToHclTerraform, true)(this._sns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointSnsList",
      },
      teams: {
        value: cdktf.listMapperHcl(contactPointTeamsToHclTerraform, true)(this._teams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointTeamsList",
      },
      telegram: {
        value: cdktf.listMapperHcl(contactPointTelegramToHclTerraform, true)(this._telegram.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointTelegramList",
      },
      threema: {
        value: cdktf.listMapperHcl(contactPointThreemaToHclTerraform, true)(this._threema.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointThreemaList",
      },
      victorops: {
        value: cdktf.listMapperHcl(contactPointVictoropsToHclTerraform, true)(this._victorops.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointVictoropsList",
      },
      webex: {
        value: cdktf.listMapperHcl(contactPointWebexToHclTerraform, true)(this._webex.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointWebexList",
      },
      webhook: {
        value: cdktf.listMapperHcl(contactPointWebhookToHclTerraform, true)(this._webhook.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointWebhookList",
      },
      wecom: {
        value: cdktf.listMapperHcl(contactPointWecomToHclTerraform, true)(this._wecom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactPointWecomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
