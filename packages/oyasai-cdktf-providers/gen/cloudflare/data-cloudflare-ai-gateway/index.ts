// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAiGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway#account_id DataCloudflareAiGateway#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway#filter DataCloudflareAiGateway#filter}
  */
  readonly filter?: DataCloudflareAiGatewayFilter;
  /**
  * gateway id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway#id DataCloudflareAiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCloudflareAiGatewayDlpPolicies {
}

export function dataCloudflareAiGatewayDlpPoliciesToTerraform(struct?: DataCloudflareAiGatewayDlpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDlpPoliciesToHclTerraform(struct?: DataCloudflareAiGatewayDlpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDlpPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiGatewayDlpPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDlpPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getListAttribute('check');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // profiles - computed: true, optional: false, required: false
  public get profiles() {
    return this.getListAttribute('profiles');
  }
}

export class DataCloudflareAiGatewayDlpPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewayDlpPoliciesOutputReference {
    return new DataCloudflareAiGatewayDlpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewayDlp {
}

export function dataCloudflareAiGatewayDlpToTerraform(struct?: DataCloudflareAiGatewayDlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDlpToHclTerraform(struct?: DataCloudflareAiGatewayDlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDlpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDlp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDlp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataCloudflareAiGatewayDlpPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // profiles - computed: true, optional: false, required: false
  public get profiles() {
    return this.getListAttribute('profiles');
  }
}
export interface DataCloudflareAiGatewayFilter {
  /**
  * Search by id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway#search DataCloudflareAiGateway#search}
  */
  readonly search?: string;
}

export function dataCloudflareAiGatewayFilterToTerraform(struct?: DataCloudflareAiGatewayFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search: cdktf.stringToTerraform(struct!.search),
  }
}


export function dataCloudflareAiGatewayFilterToHclTerraform(struct?: DataCloudflareAiGatewayFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareAiGatewayFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._search = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._search = value.search;
    }
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }
}
export interface DataCloudflareAiGatewayGuardrailsPrompt {
}

export function dataCloudflareAiGatewayGuardrailsPromptToTerraform(struct?: DataCloudflareAiGatewayGuardrailsPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayGuardrailsPromptToHclTerraform(struct?: DataCloudflareAiGatewayGuardrailsPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayGuardrailsPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayGuardrailsPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayGuardrailsPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // p1 - computed: true, optional: false, required: false
  public get p1() {
    return this.getStringAttribute('p1');
  }

  // s1 - computed: true, optional: false, required: false
  public get s1() {
    return this.getStringAttribute('s1');
  }

  // s10 - computed: true, optional: false, required: false
  public get s10() {
    return this.getStringAttribute('s10');
  }

  // s11 - computed: true, optional: false, required: false
  public get s11() {
    return this.getStringAttribute('s11');
  }

  // s12 - computed: true, optional: false, required: false
  public get s12() {
    return this.getStringAttribute('s12');
  }

  // s13 - computed: true, optional: false, required: false
  public get s13() {
    return this.getStringAttribute('s13');
  }

  // s2 - computed: true, optional: false, required: false
  public get s2() {
    return this.getStringAttribute('s2');
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.getStringAttribute('s3');
  }

  // s4 - computed: true, optional: false, required: false
  public get s4() {
    return this.getStringAttribute('s4');
  }

  // s5 - computed: true, optional: false, required: false
  public get s5() {
    return this.getStringAttribute('s5');
  }

  // s6 - computed: true, optional: false, required: false
  public get s6() {
    return this.getStringAttribute('s6');
  }

  // s7 - computed: true, optional: false, required: false
  public get s7() {
    return this.getStringAttribute('s7');
  }

  // s8 - computed: true, optional: false, required: false
  public get s8() {
    return this.getStringAttribute('s8');
  }

  // s9 - computed: true, optional: false, required: false
  public get s9() {
    return this.getStringAttribute('s9');
  }
}
export interface DataCloudflareAiGatewayGuardrailsResponse {
}

export function dataCloudflareAiGatewayGuardrailsResponseToTerraform(struct?: DataCloudflareAiGatewayGuardrailsResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayGuardrailsResponseToHclTerraform(struct?: DataCloudflareAiGatewayGuardrailsResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayGuardrailsResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayGuardrailsResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayGuardrailsResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // p1 - computed: true, optional: false, required: false
  public get p1() {
    return this.getStringAttribute('p1');
  }

  // s1 - computed: true, optional: false, required: false
  public get s1() {
    return this.getStringAttribute('s1');
  }

  // s10 - computed: true, optional: false, required: false
  public get s10() {
    return this.getStringAttribute('s10');
  }

  // s11 - computed: true, optional: false, required: false
  public get s11() {
    return this.getStringAttribute('s11');
  }

  // s12 - computed: true, optional: false, required: false
  public get s12() {
    return this.getStringAttribute('s12');
  }

  // s13 - computed: true, optional: false, required: false
  public get s13() {
    return this.getStringAttribute('s13');
  }

  // s2 - computed: true, optional: false, required: false
  public get s2() {
    return this.getStringAttribute('s2');
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.getStringAttribute('s3');
  }

  // s4 - computed: true, optional: false, required: false
  public get s4() {
    return this.getStringAttribute('s4');
  }

  // s5 - computed: true, optional: false, required: false
  public get s5() {
    return this.getStringAttribute('s5');
  }

  // s6 - computed: true, optional: false, required: false
  public get s6() {
    return this.getStringAttribute('s6');
  }

  // s7 - computed: true, optional: false, required: false
  public get s7() {
    return this.getStringAttribute('s7');
  }

  // s8 - computed: true, optional: false, required: false
  public get s8() {
    return this.getStringAttribute('s8');
  }

  // s9 - computed: true, optional: false, required: false
  public get s9() {
    return this.getStringAttribute('s9');
  }
}
export interface DataCloudflareAiGatewayGuardrails {
}

export function dataCloudflareAiGatewayGuardrailsToTerraform(struct?: DataCloudflareAiGatewayGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayGuardrailsToHclTerraform(struct?: DataCloudflareAiGatewayGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayGuardrailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayGuardrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayGuardrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prompt - computed: true, optional: false, required: false
  private _prompt = new DataCloudflareAiGatewayGuardrailsPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataCloudflareAiGatewayGuardrailsResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
}
export interface DataCloudflareAiGatewayOtel {
}

export function dataCloudflareAiGatewayOtelToTerraform(struct?: DataCloudflareAiGatewayOtel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayOtelToHclTerraform(struct?: DataCloudflareAiGatewayOtel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayOtelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiGatewayOtel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayOtel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCloudflareAiGatewayOtelList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewayOtelOutputReference {
    return new DataCloudflareAiGatewayOtelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewaySpendLimitsRulesAiGatewayProvider {
}

export function dataCloudflareAiGatewaySpendLimitsRulesAiGatewayProviderToTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRulesAiGatewayProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaySpendLimitsRulesAiGatewayProviderToHclTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRulesAiGatewayProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaySpendLimitsRulesAiGatewayProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaySpendLimitsRulesAiGatewayProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaySpendLimitsRulesAiGatewayProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataCloudflareAiGatewaySpendLimitsRulesMetadata {
}

export function dataCloudflareAiGatewaySpendLimitsRulesMetadataToTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaySpendLimitsRulesMetadataToHclTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaySpendLimitsRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflareAiGatewaySpendLimitsRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaySpendLimitsRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataCloudflareAiGatewaySpendLimitsRulesMetadataMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflareAiGatewaySpendLimitsRulesMetadataOutputReference {
    return new DataCloudflareAiGatewaySpendLimitsRulesMetadataOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflareAiGatewaySpendLimitsRulesModel {
}

export function dataCloudflareAiGatewaySpendLimitsRulesModelToTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRulesModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaySpendLimitsRulesModelToHclTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRulesModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaySpendLimitsRulesModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaySpendLimitsRulesModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaySpendLimitsRulesModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataCloudflareAiGatewaySpendLimitsRules {
}

export function dataCloudflareAiGatewaySpendLimitsRulesToTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaySpendLimitsRulesToHclTerraform(struct?: DataCloudflareAiGatewaySpendLimitsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaySpendLimitsRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiGatewaySpendLimitsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaySpendLimitsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_gateway_provider - computed: true, optional: false, required: false
  private _aiGatewayProvider = new DataCloudflareAiGatewaySpendLimitsRulesAiGatewayProviderOutputReference(this, "ai_gateway_provider");
  public get aiGatewayProvider() {
    return this._aiGatewayProvider;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // limit_type - computed: true, optional: false, required: false
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCloudflareAiGatewaySpendLimitsRulesMetadataMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // model - computed: true, optional: false, required: false
  private _model = new DataCloudflareAiGatewaySpendLimitsRulesModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }

  // technique - computed: true, optional: false, required: false
  public get technique() {
    return this.getStringAttribute('technique');
  }

  // window - computed: true, optional: false, required: false
  public get window() {
    return this.getNumberAttribute('window');
  }
}

export class DataCloudflareAiGatewaySpendLimitsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewaySpendLimitsRulesOutputReference {
    return new DataCloudflareAiGatewaySpendLimitsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewaySpendLimits {
}

export function dataCloudflareAiGatewaySpendLimitsToTerraform(struct?: DataCloudflareAiGatewaySpendLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaySpendLimitsToHclTerraform(struct?: DataCloudflareAiGatewaySpendLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaySpendLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaySpendLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaySpendLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCloudflareAiGatewaySpendLimitsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataCloudflareAiGatewayStripeUsageEvents {
}

export function dataCloudflareAiGatewayStripeUsageEventsToTerraform(struct?: DataCloudflareAiGatewayStripeUsageEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayStripeUsageEventsToHclTerraform(struct?: DataCloudflareAiGatewayStripeUsageEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayStripeUsageEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiGatewayStripeUsageEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayStripeUsageEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }
}

export class DataCloudflareAiGatewayStripeUsageEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewayStripeUsageEventsOutputReference {
    return new DataCloudflareAiGatewayStripeUsageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewayStripe {
}

export function dataCloudflareAiGatewayStripeToTerraform(struct?: DataCloudflareAiGatewayStripe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayStripeToHclTerraform(struct?: DataCloudflareAiGatewayStripe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayStripeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayStripe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayStripe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // usage_events - computed: true, optional: false, required: false
  private _usageEvents = new DataCloudflareAiGatewayStripeUsageEventsList(this, "usage_events", false);
  public get usageEvents() {
    return this._usageEvents;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway cloudflare_ai_gateway}
*/
export class DataCloudflareAiGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAiGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAiGateway to import
  * @param importFromId The id of the existing DataCloudflareAiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAiGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway cloudflare_ai_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAiGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAiGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_gateway',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._filter.internalValue = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }

  // cache_invalidate_on_update - computed: true, optional: false, required: false
  public get cacheInvalidateOnUpdate() {
    return this.getBooleanAttribute('cache_invalidate_on_update');
  }

  // cache_ttl - computed: true, optional: false, required: false
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }

  // collect_logs - computed: true, optional: false, required: false
  public get collectLogs() {
    return this.getBooleanAttribute('collect_logs');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dlp - computed: true, optional: false, required: false
  private _dlp = new DataCloudflareAiGatewayDlpOutputReference(this, "dlp");
  public get dlp() {
    return this._dlp;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareAiGatewayFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareAiGatewayFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // guardrails - computed: true, optional: false, required: false
  private _guardrails = new DataCloudflareAiGatewayGuardrailsOutputReference(this, "guardrails");
  public get guardrails() {
    return this._guardrails;
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // log_management - computed: true, optional: false, required: false
  public get logManagement() {
    return this.getNumberAttribute('log_management');
  }

  // log_management_strategy - computed: true, optional: false, required: false
  public get logManagementStrategy() {
    return this.getStringAttribute('log_management_strategy');
  }

  // logpush - computed: true, optional: false, required: false
  public get logpush() {
    return this.getBooleanAttribute('logpush');
  }

  // logpush_public_key - computed: true, optional: false, required: false
  public get logpushPublicKey() {
    return this.getStringAttribute('logpush_public_key');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // otel - computed: true, optional: false, required: false
  private _otel = new DataCloudflareAiGatewayOtelList(this, "otel", false);
  public get otel() {
    return this._otel;
  }

  // rate_limiting_interval - computed: true, optional: false, required: false
  public get rateLimitingInterval() {
    return this.getNumberAttribute('rate_limiting_interval');
  }

  // rate_limiting_limit - computed: true, optional: false, required: false
  public get rateLimitingLimit() {
    return this.getNumberAttribute('rate_limiting_limit');
  }

  // rate_limiting_technique - computed: true, optional: false, required: false
  public get rateLimitingTechnique() {
    return this.getStringAttribute('rate_limiting_technique');
  }

  // retry_backoff - computed: true, optional: false, required: false
  public get retryBackoff() {
    return this.getStringAttribute('retry_backoff');
  }

  // retry_delay - computed: true, optional: false, required: false
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }

  // retry_max_attempts - computed: true, optional: false, required: false
  public get retryMaxAttempts() {
    return this.getNumberAttribute('retry_max_attempts');
  }

  // spend_limits - computed: true, optional: false, required: false
  private _spendLimits = new DataCloudflareAiGatewaySpendLimitsOutputReference(this, "spend_limits");
  public get spendLimits() {
    return this._spendLimits;
  }

  // store_id - computed: true, optional: false, required: false
  public get storeId() {
    return this.getStringAttribute('store_id');
  }

  // stripe - computed: true, optional: false, required: false
  private _stripe = new DataCloudflareAiGatewayStripeOutputReference(this, "stripe");
  public get stripe() {
    return this._stripe;
  }

  // workers_ai_billing_mode - computed: true, optional: false, required: false
  public get workersAiBillingMode() {
    return this.getStringAttribute('workers_ai_billing_mode');
  }

  // zdr - computed: true, optional: false, required: false
  public get zdr() {
    return this.getBooleanAttribute('zdr');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareAiGatewayFilterToTerraform(this._filter.internalValue),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflareAiGatewayFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareAiGatewayFilter",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
