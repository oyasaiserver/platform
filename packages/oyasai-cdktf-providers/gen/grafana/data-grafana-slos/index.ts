// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaSlosConfig extends cdktf.TerraformMetaArguments {
  /**
  * slos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#slos DataGrafanaSlos#slos}
  */
  readonly slos?: DataGrafanaSlosSlos[] | cdktf.IResolvable;
}
export interface DataGrafanaSlosSlosAlertingAdvancedOptions {
}

export function dataGrafanaSlosSlosAlertingAdvancedOptionsToTerraform(struct?: DataGrafanaSlosSlosAlertingAdvancedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingAdvancedOptionsToHclTerraform(struct?: DataGrafanaSlosSlosAlertingAdvancedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingAdvancedOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingAdvancedOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // min_failures - computed: true, optional: false, required: false
  public get minFailures() {
    return this.getNumberAttribute('min_failures');
  }
}

export class DataGrafanaSlosSlosAlertingAdvancedOptionsList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingAdvancedOptions[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference {
    return new DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingAnnotation {
}

export function dataGrafanaSlosSlosAlertingAnnotationToTerraform(struct?: DataGrafanaSlosSlosAlertingAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingAnnotationToHclTerraform(struct?: DataGrafanaSlosSlosAlertingAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingAnnotationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingAnnotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingAnnotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaSlosSlosAlertingAnnotationList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingAnnotation[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingAnnotationOutputReference {
    return new DataGrafanaSlosSlosAlertingAnnotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingFastburnAnnotation {
}

export function dataGrafanaSlosSlosAlertingFastburnAnnotationToTerraform(struct?: DataGrafanaSlosSlosAlertingFastburnAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingFastburnAnnotationToHclTerraform(struct?: DataGrafanaSlosSlosAlertingFastburnAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingFastburnAnnotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingFastburnAnnotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaSlosSlosAlertingFastburnAnnotationList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingFastburnAnnotation[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference {
    return new DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingFastburnEnrichment {
}

export function dataGrafanaSlosSlosAlertingFastburnEnrichmentToTerraform(struct?: DataGrafanaSlosSlosAlertingFastburnEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingFastburnEnrichmentToHclTerraform(struct?: DataGrafanaSlosSlosAlertingFastburnEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingFastburnEnrichmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingFastburnEnrichment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingFastburnEnrichment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGrafanaSlosSlosAlertingFastburnEnrichmentList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingFastburnEnrichment[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingFastburnEnrichmentOutputReference {
    return new DataGrafanaSlosSlosAlertingFastburnEnrichmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingFastburnLabel {
}

export function dataGrafanaSlosSlosAlertingFastburnLabelToTerraform(struct?: DataGrafanaSlosSlosAlertingFastburnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingFastburnLabelToHclTerraform(struct?: DataGrafanaSlosSlosAlertingFastburnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingFastburnLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingFastburnLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingFastburnLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaSlosSlosAlertingFastburnLabelList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingFastburnLabel[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingFastburnLabelOutputReference {
    return new DataGrafanaSlosSlosAlertingFastburnLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingFastburn {
  /**
  * annotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#annotation DataGrafanaSlos#annotation}
  */
  readonly annotation?: DataGrafanaSlosSlosAlertingFastburnAnnotation[] | cdktf.IResolvable;
  /**
  * enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#enrichment DataGrafanaSlos#enrichment}
  */
  readonly enrichment?: DataGrafanaSlosSlosAlertingFastburnEnrichment[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#label DataGrafanaSlos#label}
  */
  readonly label?: DataGrafanaSlosSlosAlertingFastburnLabel[] | cdktf.IResolvable;
}

export function dataGrafanaSlosSlosAlertingFastburnToTerraform(struct?: DataGrafanaSlosSlosAlertingFastburn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.listMapper(dataGrafanaSlosSlosAlertingFastburnAnnotationToTerraform, true)(struct!.annotation),
    enrichment: cdktf.listMapper(dataGrafanaSlosSlosAlertingFastburnEnrichmentToTerraform, true)(struct!.enrichment),
    label: cdktf.listMapper(dataGrafanaSlosSlosAlertingFastburnLabelToTerraform, true)(struct!.label),
  }
}


export function dataGrafanaSlosSlosAlertingFastburnToHclTerraform(struct?: DataGrafanaSlosSlosAlertingFastburn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingFastburnAnnotationToHclTerraform, true)(struct!.annotation),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingFastburnAnnotationList",
    },
    enrichment: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingFastburnEnrichmentToHclTerraform, true)(struct!.enrichment),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingFastburnEnrichmentList",
    },
    label: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingFastburnLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingFastburnLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaSlosSlosAlertingFastburnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingFastburn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._enrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingFastburn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation.internalValue = undefined;
      this._enrichment.internalValue = undefined;
      this._label.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation.internalValue = value.annotation;
      this._enrichment.internalValue = value.enrichment;
      this._label.internalValue = value.label;
    }
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new DataGrafanaSlosSlosAlertingFastburnAnnotationList(this, "annotation", false);
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: DataGrafanaSlosSlosAlertingFastburnAnnotation[] | cdktf.IResolvable) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment = new DataGrafanaSlosSlosAlertingFastburnEnrichmentList(this, "enrichment", false);
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: DataGrafanaSlosSlosAlertingFastburnEnrichment[] | cdktf.IResolvable) {
    this._enrichment.internalValue = value;
  }
  public resetEnrichment() {
    this._enrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new DataGrafanaSlosSlosAlertingFastburnLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: DataGrafanaSlosSlosAlertingFastburnLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}

export class DataGrafanaSlosSlosAlertingFastburnList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingFastburn[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingFastburnOutputReference {
    return new DataGrafanaSlosSlosAlertingFastburnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingLabel {
}

export function dataGrafanaSlosSlosAlertingLabelToTerraform(struct?: DataGrafanaSlosSlosAlertingLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingLabelToHclTerraform(struct?: DataGrafanaSlosSlosAlertingLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaSlosSlosAlertingLabelList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingLabel[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingLabelOutputReference {
    return new DataGrafanaSlosSlosAlertingLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingSlowburnAnnotation {
}

export function dataGrafanaSlosSlosAlertingSlowburnAnnotationToTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburnAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingSlowburnAnnotationToHclTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburnAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingSlowburnAnnotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingSlowburnAnnotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaSlosSlosAlertingSlowburnAnnotationList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingSlowburnAnnotation[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference {
    return new DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingSlowburnEnrichment {
}

export function dataGrafanaSlosSlosAlertingSlowburnEnrichmentToTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburnEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingSlowburnEnrichmentToHclTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburnEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingSlowburnEnrichmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingSlowburnEnrichment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingSlowburnEnrichment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGrafanaSlosSlosAlertingSlowburnEnrichmentList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingSlowburnEnrichment[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingSlowburnEnrichmentOutputReference {
    return new DataGrafanaSlosSlosAlertingSlowburnEnrichmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingSlowburnLabel {
}

export function dataGrafanaSlosSlosAlertingSlowburnLabelToTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosAlertingSlowburnLabelToHclTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingSlowburnLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingSlowburnLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaSlosSlosAlertingSlowburnLabelList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingSlowburnLabel[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference {
    return new DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlertingSlowburn {
  /**
  * annotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#annotation DataGrafanaSlos#annotation}
  */
  readonly annotation?: DataGrafanaSlosSlosAlertingSlowburnAnnotation[] | cdktf.IResolvable;
  /**
  * enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#enrichment DataGrafanaSlos#enrichment}
  */
  readonly enrichment?: DataGrafanaSlosSlosAlertingSlowburnEnrichment[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#label DataGrafanaSlos#label}
  */
  readonly label?: DataGrafanaSlosSlosAlertingSlowburnLabel[] | cdktf.IResolvable;
}

export function dataGrafanaSlosSlosAlertingSlowburnToTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.listMapper(dataGrafanaSlosSlosAlertingSlowburnAnnotationToTerraform, true)(struct!.annotation),
    enrichment: cdktf.listMapper(dataGrafanaSlosSlosAlertingSlowburnEnrichmentToTerraform, true)(struct!.enrichment),
    label: cdktf.listMapper(dataGrafanaSlosSlosAlertingSlowburnLabelToTerraform, true)(struct!.label),
  }
}


export function dataGrafanaSlosSlosAlertingSlowburnToHclTerraform(struct?: DataGrafanaSlosSlosAlertingSlowburn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingSlowburnAnnotationToHclTerraform, true)(struct!.annotation),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingSlowburnAnnotationList",
    },
    enrichment: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingSlowburnEnrichmentToHclTerraform, true)(struct!.enrichment),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingSlowburnEnrichmentList",
    },
    label: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingSlowburnLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingSlowburnLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaSlosSlosAlertingSlowburnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlertingSlowburn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._enrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlertingSlowburn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation.internalValue = undefined;
      this._enrichment.internalValue = undefined;
      this._label.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation.internalValue = value.annotation;
      this._enrichment.internalValue = value.enrichment;
      this._label.internalValue = value.label;
    }
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new DataGrafanaSlosSlosAlertingSlowburnAnnotationList(this, "annotation", false);
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: DataGrafanaSlosSlosAlertingSlowburnAnnotation[] | cdktf.IResolvable) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment = new DataGrafanaSlosSlosAlertingSlowburnEnrichmentList(this, "enrichment", false);
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: DataGrafanaSlosSlosAlertingSlowburnEnrichment[] | cdktf.IResolvable) {
    this._enrichment.internalValue = value;
  }
  public resetEnrichment() {
    this._enrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new DataGrafanaSlosSlosAlertingSlowburnLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: DataGrafanaSlosSlosAlertingSlowburnLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}

export class DataGrafanaSlosSlosAlertingSlowburnList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlertingSlowburn[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingSlowburnOutputReference {
    return new DataGrafanaSlosSlosAlertingSlowburnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosAlerting {
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#advanced_options DataGrafanaSlos#advanced_options}
  */
  readonly advancedOptions?: DataGrafanaSlosSlosAlertingAdvancedOptions[] | cdktf.IResolvable;
  /**
  * annotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#annotation DataGrafanaSlos#annotation}
  */
  readonly annotation?: DataGrafanaSlosSlosAlertingAnnotation[] | cdktf.IResolvable;
  /**
  * fastburn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#fastburn DataGrafanaSlos#fastburn}
  */
  readonly fastburn?: DataGrafanaSlosSlosAlertingFastburn[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#label DataGrafanaSlos#label}
  */
  readonly label?: DataGrafanaSlosSlosAlertingLabel[] | cdktf.IResolvable;
  /**
  * slowburn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#slowburn DataGrafanaSlos#slowburn}
  */
  readonly slowburn?: DataGrafanaSlosSlosAlertingSlowburn[] | cdktf.IResolvable;
}

export function dataGrafanaSlosSlosAlertingToTerraform(struct?: DataGrafanaSlosSlosAlerting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_options: cdktf.listMapper(dataGrafanaSlosSlosAlertingAdvancedOptionsToTerraform, true)(struct!.advancedOptions),
    annotation: cdktf.listMapper(dataGrafanaSlosSlosAlertingAnnotationToTerraform, true)(struct!.annotation),
    fastburn: cdktf.listMapper(dataGrafanaSlosSlosAlertingFastburnToTerraform, true)(struct!.fastburn),
    label: cdktf.listMapper(dataGrafanaSlosSlosAlertingLabelToTerraform, true)(struct!.label),
    slowburn: cdktf.listMapper(dataGrafanaSlosSlosAlertingSlowburnToTerraform, true)(struct!.slowburn),
  }
}


export function dataGrafanaSlosSlosAlertingToHclTerraform(struct?: DataGrafanaSlosSlosAlerting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_options: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingAdvancedOptionsToHclTerraform, true)(struct!.advancedOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingAdvancedOptionsList",
    },
    annotation: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingAnnotationToHclTerraform, true)(struct!.annotation),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingAnnotationList",
    },
    fastburn: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingFastburnToHclTerraform, true)(struct!.fastburn),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingFastburnList",
    },
    label: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingLabelList",
    },
    slowburn: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingSlowburnToHclTerraform, true)(struct!.slowburn),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingSlowburnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaSlosSlosAlertingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosAlerting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._fastburn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastburn = this._fastburn?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._slowburn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowburn = this._slowburn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosAlerting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedOptions.internalValue = undefined;
      this._annotation.internalValue = undefined;
      this._fastburn.internalValue = undefined;
      this._label.internalValue = undefined;
      this._slowburn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._annotation.internalValue = value.annotation;
      this._fastburn.internalValue = value.fastburn;
      this._label.internalValue = value.label;
      this._slowburn.internalValue = value.slowburn;
    }
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new DataGrafanaSlosSlosAlertingAdvancedOptionsList(this, "advanced_options", false);
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: DataGrafanaSlosSlosAlertingAdvancedOptions[] | cdktf.IResolvable) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new DataGrafanaSlosSlosAlertingAnnotationList(this, "annotation", false);
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: DataGrafanaSlosSlosAlertingAnnotation[] | cdktf.IResolvable) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // fastburn - computed: false, optional: true, required: false
  private _fastburn = new DataGrafanaSlosSlosAlertingFastburnList(this, "fastburn", false);
  public get fastburn() {
    return this._fastburn;
  }
  public putFastburn(value: DataGrafanaSlosSlosAlertingFastburn[] | cdktf.IResolvable) {
    this._fastburn.internalValue = value;
  }
  public resetFastburn() {
    this._fastburn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastburnInput() {
    return this._fastburn.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new DataGrafanaSlosSlosAlertingLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: DataGrafanaSlosSlosAlertingLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // slowburn - computed: false, optional: true, required: false
  private _slowburn = new DataGrafanaSlosSlosAlertingSlowburnList(this, "slowburn", false);
  public get slowburn() {
    return this._slowburn;
  }
  public putSlowburn(value: DataGrafanaSlosSlosAlertingSlowburn[] | cdktf.IResolvable) {
    this._slowburn.internalValue = value;
  }
  public resetSlowburn() {
    this._slowburn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowburnInput() {
    return this._slowburn.internalValue;
  }
}

export class DataGrafanaSlosSlosAlertingList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosAlerting[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosAlertingOutputReference {
    return new DataGrafanaSlosSlosAlertingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosDestinationDatasource {
}

export function dataGrafanaSlosSlosDestinationDatasourceToTerraform(struct?: DataGrafanaSlosSlosDestinationDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosDestinationDatasourceToHclTerraform(struct?: DataGrafanaSlosSlosDestinationDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosDestinationDatasourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosDestinationDatasource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosDestinationDatasource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataGrafanaSlosSlosDestinationDatasourceList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosDestinationDatasource[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosDestinationDatasourceOutputReference {
    return new DataGrafanaSlosSlosDestinationDatasourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosLabel {
}

export function dataGrafanaSlosSlosLabelToTerraform(struct?: DataGrafanaSlosSlosLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosLabelToHclTerraform(struct?: DataGrafanaSlosSlosLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaSlosSlosLabelList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosLabel[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosLabelOutputReference {
    return new DataGrafanaSlosSlosLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosObjectives {
}

export function dataGrafanaSlosSlosObjectivesToTerraform(struct?: DataGrafanaSlosSlosObjectives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosObjectivesToHclTerraform(struct?: DataGrafanaSlosSlosObjectives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosObjectivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosObjectives | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosObjectives | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // window - computed: true, optional: false, required: false
  public get window() {
    return this.getStringAttribute('window');
  }
}

export class DataGrafanaSlosSlosObjectivesList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosObjectives[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosObjectivesOutputReference {
    return new DataGrafanaSlosSlosObjectivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosQueryFreeform {
}

export function dataGrafanaSlosSlosQueryFreeformToTerraform(struct?: DataGrafanaSlosSlosQueryFreeform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosQueryFreeformToHclTerraform(struct?: DataGrafanaSlosSlosQueryFreeform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosQueryFreeformOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosQueryFreeform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosQueryFreeform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // source_datasource_uid - computed: true, optional: false, required: false
  public get sourceDatasourceUid() {
    return this.getStringAttribute('source_datasource_uid');
  }
}

export class DataGrafanaSlosSlosQueryFreeformList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosQueryFreeform[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosQueryFreeformOutputReference {
    return new DataGrafanaSlosSlosQueryFreeformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosQueryGrafanaQueries {
}

export function dataGrafanaSlosSlosQueryGrafanaQueriesToTerraform(struct?: DataGrafanaSlosSlosQueryGrafanaQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosQueryGrafanaQueriesToHclTerraform(struct?: DataGrafanaSlosSlosQueryGrafanaQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosQueryGrafanaQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosQueryGrafanaQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosQueryGrafanaQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // grafana_queries - computed: true, optional: false, required: false
  public get grafanaQueries() {
    return this.getStringAttribute('grafana_queries');
  }
}

export class DataGrafanaSlosSlosQueryGrafanaQueriesList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosQueryGrafanaQueries[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosQueryGrafanaQueriesOutputReference {
    return new DataGrafanaSlosSlosQueryGrafanaQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosQueryRatio {
}

export function dataGrafanaSlosSlosQueryRatioToTerraform(struct?: DataGrafanaSlosSlosQueryRatio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaSlosSlosQueryRatioToHclTerraform(struct?: DataGrafanaSlosSlosQueryRatio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaSlosSlosQueryRatioOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosQueryRatio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosQueryRatio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // group_by_labels - computed: true, optional: false, required: false
  public get groupByLabels() {
    return this.getListAttribute('group_by_labels');
  }

  // source_datasource_uid - computed: true, optional: false, required: false
  public get sourceDatasourceUid() {
    return this.getStringAttribute('source_datasource_uid');
  }

  // success_metric - computed: true, optional: false, required: false
  public get successMetric() {
    return this.getStringAttribute('success_metric');
  }

  // total_metric - computed: true, optional: false, required: false
  public get totalMetric() {
    return this.getStringAttribute('total_metric');
  }
}

export class DataGrafanaSlosSlosQueryRatioList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosQueryRatio[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosQueryRatioOutputReference {
    return new DataGrafanaSlosSlosQueryRatioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlosQuery {
  /**
  * freeform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#freeform DataGrafanaSlos#freeform}
  */
  readonly freeform?: DataGrafanaSlosSlosQueryFreeform[] | cdktf.IResolvable;
  /**
  * grafana_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#grafana_queries DataGrafanaSlos#grafana_queries}
  */
  readonly grafanaQueries?: DataGrafanaSlosSlosQueryGrafanaQueries[] | cdktf.IResolvable;
  /**
  * ratio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#ratio DataGrafanaSlos#ratio}
  */
  readonly ratio?: DataGrafanaSlosSlosQueryRatio[] | cdktf.IResolvable;
}

export function dataGrafanaSlosSlosQueryToTerraform(struct?: DataGrafanaSlosSlosQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    freeform: cdktf.listMapper(dataGrafanaSlosSlosQueryFreeformToTerraform, true)(struct!.freeform),
    grafana_queries: cdktf.listMapper(dataGrafanaSlosSlosQueryGrafanaQueriesToTerraform, true)(struct!.grafanaQueries),
    ratio: cdktf.listMapper(dataGrafanaSlosSlosQueryRatioToTerraform, true)(struct!.ratio),
  }
}


export function dataGrafanaSlosSlosQueryToHclTerraform(struct?: DataGrafanaSlosSlosQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    freeform: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosQueryFreeformToHclTerraform, true)(struct!.freeform),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosQueryFreeformList",
    },
    grafana_queries: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosQueryGrafanaQueriesToHclTerraform, true)(struct!.grafanaQueries),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosQueryGrafanaQueriesList",
    },
    ratio: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosQueryRatioToHclTerraform, true)(struct!.ratio),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosQueryRatioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaSlosSlosQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlosQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeform = this._freeform?.internalValue;
    }
    if (this._grafanaQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaQueries = this._grafanaQueries?.internalValue;
    }
    if (this._ratio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlosQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._freeform.internalValue = undefined;
      this._grafanaQueries.internalValue = undefined;
      this._ratio.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._freeform.internalValue = value.freeform;
      this._grafanaQueries.internalValue = value.grafanaQueries;
      this._ratio.internalValue = value.ratio;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // freeform - computed: false, optional: true, required: false
  private _freeform = new DataGrafanaSlosSlosQueryFreeformList(this, "freeform", false);
  public get freeform() {
    return this._freeform;
  }
  public putFreeform(value: DataGrafanaSlosSlosQueryFreeform[] | cdktf.IResolvable) {
    this._freeform.internalValue = value;
  }
  public resetFreeform() {
    this._freeform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformInput() {
    return this._freeform.internalValue;
  }

  // grafana_queries - computed: false, optional: true, required: false
  private _grafanaQueries = new DataGrafanaSlosSlosQueryGrafanaQueriesList(this, "grafana_queries", false);
  public get grafanaQueries() {
    return this._grafanaQueries;
  }
  public putGrafanaQueries(value: DataGrafanaSlosSlosQueryGrafanaQueries[] | cdktf.IResolvable) {
    this._grafanaQueries.internalValue = value;
  }
  public resetGrafanaQueries() {
    this._grafanaQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaQueriesInput() {
    return this._grafanaQueries.internalValue;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio = new DataGrafanaSlosSlosQueryRatioList(this, "ratio", false);
  public get ratio() {
    return this._ratio;
  }
  public putRatio(value: DataGrafanaSlosSlosQueryRatio[] | cdktf.IResolvable) {
    this._ratio.internalValue = value;
  }
  public resetRatio() {
    this._ratio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio.internalValue;
  }
}

export class DataGrafanaSlosSlosQueryList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlosQuery[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosQueryOutputReference {
    return new DataGrafanaSlosSlosQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaSlosSlos {
  /**
  * alerting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#alerting DataGrafanaSlos#alerting}
  */
  readonly alerting?: DataGrafanaSlosSlosAlerting[] | cdktf.IResolvable;
  /**
  * destination_datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#destination_datasource DataGrafanaSlos#destination_datasource}
  */
  readonly destinationDatasource?: DataGrafanaSlosSlosDestinationDatasource[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#label DataGrafanaSlos#label}
  */
  readonly label?: DataGrafanaSlosSlosLabel[] | cdktf.IResolvable;
  /**
  * objectives block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#objectives DataGrafanaSlos#objectives}
  */
  readonly objectives?: DataGrafanaSlosSlosObjectives[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#query DataGrafanaSlos#query}
  */
  readonly query?: DataGrafanaSlosSlosQuery[] | cdktf.IResolvable;
}

export function dataGrafanaSlosSlosToTerraform(struct?: DataGrafanaSlosSlos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting: cdktf.listMapper(dataGrafanaSlosSlosAlertingToTerraform, true)(struct!.alerting),
    destination_datasource: cdktf.listMapper(dataGrafanaSlosSlosDestinationDatasourceToTerraform, true)(struct!.destinationDatasource),
    label: cdktf.listMapper(dataGrafanaSlosSlosLabelToTerraform, true)(struct!.label),
    objectives: cdktf.listMapper(dataGrafanaSlosSlosObjectivesToTerraform, true)(struct!.objectives),
    query: cdktf.listMapper(dataGrafanaSlosSlosQueryToTerraform, true)(struct!.query),
  }
}


export function dataGrafanaSlosSlosToHclTerraform(struct?: DataGrafanaSlosSlos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosAlertingToHclTerraform, true)(struct!.alerting),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosAlertingList",
    },
    destination_datasource: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosDestinationDatasourceToHclTerraform, true)(struct!.destinationDatasource),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosDestinationDatasourceList",
    },
    label: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosLabelList",
    },
    objectives: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosObjectivesToHclTerraform, true)(struct!.objectives),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosObjectivesList",
    },
    query: {
      value: cdktf.listMapperHcl(dataGrafanaSlosSlosQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaSlosSlosQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaSlosSlosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaSlosSlos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alerting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alerting = this._alerting?.internalValue;
    }
    if (this._destinationDatasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDatasource = this._destinationDatasource?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._objectives?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectives = this._objectives?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaSlosSlos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alerting.internalValue = undefined;
      this._destinationDatasource.internalValue = undefined;
      this._label.internalValue = undefined;
      this._objectives.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alerting.internalValue = value.alerting;
      this._destinationDatasource.internalValue = value.destinationDatasource;
      this._label.internalValue = value.label;
      this._objectives.internalValue = value.objectives;
      this._query.internalValue = value.query;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // search_expression - computed: true, optional: false, required: false
  public get searchExpression() {
    return this.getStringAttribute('search_expression');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // alerting - computed: false, optional: true, required: false
  private _alerting = new DataGrafanaSlosSlosAlertingList(this, "alerting", false);
  public get alerting() {
    return this._alerting;
  }
  public putAlerting(value: DataGrafanaSlosSlosAlerting[] | cdktf.IResolvable) {
    this._alerting.internalValue = value;
  }
  public resetAlerting() {
    this._alerting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingInput() {
    return this._alerting.internalValue;
  }

  // destination_datasource - computed: false, optional: true, required: false
  private _destinationDatasource = new DataGrafanaSlosSlosDestinationDatasourceList(this, "destination_datasource", false);
  public get destinationDatasource() {
    return this._destinationDatasource;
  }
  public putDestinationDatasource(value: DataGrafanaSlosSlosDestinationDatasource[] | cdktf.IResolvable) {
    this._destinationDatasource.internalValue = value;
  }
  public resetDestinationDatasource() {
    this._destinationDatasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDatasourceInput() {
    return this._destinationDatasource.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new DataGrafanaSlosSlosLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: DataGrafanaSlosSlosLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // objectives - computed: false, optional: true, required: false
  private _objectives = new DataGrafanaSlosSlosObjectivesList(this, "objectives", false);
  public get objectives() {
    return this._objectives;
  }
  public putObjectives(value: DataGrafanaSlosSlosObjectives[] | cdktf.IResolvable) {
    this._objectives.internalValue = value;
  }
  public resetObjectives() {
    this._objectives.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectivesInput() {
    return this._objectives.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DataGrafanaSlosSlosQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DataGrafanaSlosSlosQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class DataGrafanaSlosSlosList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaSlosSlos[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaSlosSlosOutputReference {
    return new DataGrafanaSlosSlosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos grafana_slos}
*/
export class DataGrafanaSlos extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_slos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaSlos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaSlos to import
  * @param importFromId The id of the existing DataGrafanaSlos that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaSlos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_slos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/slos grafana_slos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaSlosConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaSlosConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_slos',
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
    this._slos.internalValue = config.slos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // slos - computed: false, optional: true, required: false
  private _slos = new DataGrafanaSlosSlosList(this, "slos", false);
  public get slos() {
    return this._slos;
  }
  public putSlos(value: DataGrafanaSlosSlos[] | cdktf.IResolvable) {
    this._slos.internalValue = value;
  }
  public resetSlos() {
    this._slos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slosInput() {
    return this._slos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slos: cdktf.listMapper(dataGrafanaSlosSlosToTerraform, true)(this._slos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      slos: {
        value: cdktf.listMapperHcl(dataGrafanaSlosSlosToHclTerraform, true)(this._slos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaSlosSlosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
