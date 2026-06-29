// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAiGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}
  */
  readonly accountId?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#max_items DataCloudflareAiGateways#max_items}
  */
  readonly maxItems?: number;
  /**
  * Search by id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#search DataCloudflareAiGateways#search}
  */
  readonly search?: string;
}
export interface DataCloudflareAiGatewaysResultDlpPolicies {
}

export function dataCloudflareAiGatewaysResultDlpPoliciesToTerraform(struct?: DataCloudflareAiGatewaysResultDlpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultDlpPoliciesToHclTerraform(struct?: DataCloudflareAiGatewaysResultDlpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultDlpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiGatewaysResultDlpPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultDlpPolicies | undefined) {
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

export class DataCloudflareAiGatewaysResultDlpPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewaysResultDlpPoliciesOutputReference {
    return new DataCloudflareAiGatewaysResultDlpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewaysResultDlp {
}

export function dataCloudflareAiGatewaysResultDlpToTerraform(struct?: DataCloudflareAiGatewaysResultDlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultDlpToHclTerraform(struct?: DataCloudflareAiGatewaysResultDlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultDlpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultDlp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultDlp | undefined) {
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
  private _policies = new DataCloudflareAiGatewaysResultDlpPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // profiles - computed: true, optional: false, required: false
  public get profiles() {
    return this.getListAttribute('profiles');
  }
}
export interface DataCloudflareAiGatewaysResultGuardrailsPrompt {
}

export function dataCloudflareAiGatewaysResultGuardrailsPromptToTerraform(struct?: DataCloudflareAiGatewaysResultGuardrailsPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultGuardrailsPromptToHclTerraform(struct?: DataCloudflareAiGatewaysResultGuardrailsPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultGuardrailsPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultGuardrailsPrompt | undefined) {
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
export interface DataCloudflareAiGatewaysResultGuardrailsResponse {
}

export function dataCloudflareAiGatewaysResultGuardrailsResponseToTerraform(struct?: DataCloudflareAiGatewaysResultGuardrailsResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultGuardrailsResponseToHclTerraform(struct?: DataCloudflareAiGatewaysResultGuardrailsResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultGuardrailsResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultGuardrailsResponse | undefined) {
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
export interface DataCloudflareAiGatewaysResultGuardrails {
}

export function dataCloudflareAiGatewaysResultGuardrailsToTerraform(struct?: DataCloudflareAiGatewaysResultGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultGuardrailsToHclTerraform(struct?: DataCloudflareAiGatewaysResultGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultGuardrailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultGuardrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultGuardrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prompt - computed: true, optional: false, required: false
  private _prompt = new DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
}
export interface DataCloudflareAiGatewaysResultOtel {
}

export function dataCloudflareAiGatewaysResultOtelToTerraform(struct?: DataCloudflareAiGatewaysResultOtel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultOtelToHclTerraform(struct?: DataCloudflareAiGatewaysResultOtel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultOtelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiGatewaysResultOtel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultOtel | undefined) {
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

export class DataCloudflareAiGatewaysResultOtelList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewaysResultOtelOutputReference {
    return new DataCloudflareAiGatewaysResultOtelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider {
}

export function dataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderToTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderToHclTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider | undefined) {
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
export interface DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata {
}

export function dataCloudflareAiGatewaysResultSpendLimitsRulesMetadataToTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultSpendLimitsRulesMetadataToHclTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata | undefined) {
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

export class DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference {
    return new DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflareAiGatewaysResultSpendLimitsRulesModel {
}

export function dataCloudflareAiGatewaysResultSpendLimitsRulesModelToTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRulesModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultSpendLimitsRulesModelToHclTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRulesModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultSpendLimitsRulesModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultSpendLimitsRulesModel | undefined) {
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
export interface DataCloudflareAiGatewaysResultSpendLimitsRules {
}

export function dataCloudflareAiGatewaysResultSpendLimitsRulesToTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultSpendLimitsRulesToHclTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimitsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiGatewaysResultSpendLimitsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultSpendLimitsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_gateway_provider - computed: true, optional: false, required: false
  private _aiGatewayProvider = new DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference(this, "ai_gateway_provider");
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
  private _metadata = new DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // model - computed: true, optional: false, required: false
  private _model = new DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference(this, "model");
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

export class DataCloudflareAiGatewaysResultSpendLimitsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference {
    return new DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewaysResultSpendLimits {
}

export function dataCloudflareAiGatewaysResultSpendLimitsToTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultSpendLimitsToHclTerraform(struct?: DataCloudflareAiGatewaysResultSpendLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultSpendLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultSpendLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultSpendLimits | undefined) {
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
  private _rules = new DataCloudflareAiGatewaysResultSpendLimitsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataCloudflareAiGatewaysResultStripeUsageEvents {
}

export function dataCloudflareAiGatewaysResultStripeUsageEventsToTerraform(struct?: DataCloudflareAiGatewaysResultStripeUsageEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultStripeUsageEventsToHclTerraform(struct?: DataCloudflareAiGatewaysResultStripeUsageEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiGatewaysResultStripeUsageEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultStripeUsageEvents | undefined) {
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

export class DataCloudflareAiGatewaysResultStripeUsageEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference {
    return new DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewaysResultStripe {
}

export function dataCloudflareAiGatewaysResultStripeToTerraform(struct?: DataCloudflareAiGatewaysResultStripe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultStripeToHclTerraform(struct?: DataCloudflareAiGatewaysResultStripe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultStripeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewaysResultStripe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResultStripe | undefined) {
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
  private _usageEvents = new DataCloudflareAiGatewaysResultStripeUsageEventsList(this, "usage_events", false);
  public get usageEvents() {
    return this._usageEvents;
  }
}
export interface DataCloudflareAiGatewaysResult {
}

export function dataCloudflareAiGatewaysResultToTerraform(struct?: DataCloudflareAiGatewaysResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewaysResultToHclTerraform(struct?: DataCloudflareAiGatewaysResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewaysResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiGatewaysResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewaysResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
  private _dlp = new DataCloudflareAiGatewaysResultDlpOutputReference(this, "dlp");
  public get dlp() {
    return this._dlp;
  }

  // guardrails - computed: true, optional: false, required: false
  private _guardrails = new DataCloudflareAiGatewaysResultGuardrailsOutputReference(this, "guardrails");
  public get guardrails() {
    return this._guardrails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _otel = new DataCloudflareAiGatewaysResultOtelList(this, "otel", false);
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
  private _spendLimits = new DataCloudflareAiGatewaysResultSpendLimitsOutputReference(this, "spend_limits");
  public get spendLimits() {
    return this._spendLimits;
  }

  // store_id - computed: true, optional: false, required: false
  public get storeId() {
    return this.getStringAttribute('store_id');
  }

  // stripe - computed: true, optional: false, required: false
  private _stripe = new DataCloudflareAiGatewaysResultStripeOutputReference(this, "stripe");
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
}

export class DataCloudflareAiGatewaysResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewaysResultOutputReference {
    return new DataCloudflareAiGatewaysResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways cloudflare_ai_gateways}
*/
export class DataCloudflareAiGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAiGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAiGateways to import
  * @param importFromId The id of the existing DataCloudflareAiGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAiGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways cloudflare_ai_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAiGatewaysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAiGatewaysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_gateways',
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
    this._maxItems = config.maxItems;
    this._search = config.search;
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

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareAiGatewaysResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      max_items: cdktf.numberToTerraform(this._maxItems),
      search: cdktf.stringToTerraform(this._search),
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
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
