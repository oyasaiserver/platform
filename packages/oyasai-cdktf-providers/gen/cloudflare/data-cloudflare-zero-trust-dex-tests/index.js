// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustDexTestsResultDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDexTestsResultDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDexTestsResultDataOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // kind - computed: true, optional: false, required: false
    get kind() {
        return this.getStringAttribute('kind');
    }
    // method - computed: true, optional: false, required: false
    get method() {
        return this.getStringAttribute('method');
    }
}
export function dataCloudflareZeroTrustDexTestsResultTargetPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDexTestsResultTargetPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    // default - computed: true, optional: false, required: false
    get default() {
        return this.getBooleanAttribute('default');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class DataCloudflareZeroTrustDexTestsResultTargetPoliciesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustDexTestsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target_policies: cdktf.listMapper(dataCloudflareZeroTrustDexTestsResultTargetPoliciesToTerraform, false)(struct.targetPolicies),
    };
}
export function dataCloudflareZeroTrustDexTestsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        target_policies: {
            value: cdktf.listMapperHcl(dataCloudflareZeroTrustDexTestsResultTargetPoliciesToHclTerraform, false)(struct.targetPolicies),
            isBlock: true,
            type: "list",
            storageClassType: "DataCloudflareZeroTrustDexTestsResultTargetPoliciesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareZeroTrustDexTestsResultOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._targetPolicies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetPolicies = this._targetPolicies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._targetPolicies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._targetPolicies.internalValue = value.targetPolicies;
        }
    }
    // data - computed: true, optional: false, required: false
    _data = new DataCloudflareZeroTrustDexTestsResultDataOutputReference(this, "data");
    get data() {
        return this._data;
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getStringAttribute('interval');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // target_policies - computed: true, optional: true, required: false
    _targetPolicies = new DataCloudflareZeroTrustDexTestsResultTargetPoliciesList(this, "target_policies", false);
    get targetPolicies() {
        return this._targetPolicies;
    }
    putTargetPolicies(value) {
        this._targetPolicies.internalValue = value;
    }
    resetTargetPolicies() {
        this._targetPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetPoliciesInput() {
        return this._targetPolicies.internalValue;
    }
    // targeted - computed: true, optional: false, required: false
    get targeted() {
        return this.getBooleanAttribute('targeted');
    }
    // test_id - computed: true, optional: false, required: false
    get testId() {
        return this.getStringAttribute('test_id');
    }
}
export class DataCloudflareZeroTrustDexTestsResultList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflareZeroTrustDexTestsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests cloudflare_zero_trust_dex_tests}
*/
export class DataCloudflareZeroTrustDexTests extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_dex_tests";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexTests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexTests to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexTests that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexTests to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dex_tests", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests cloudflare_zero_trust_dex_tests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexTestsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dex_tests',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
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
        this._kind = config.kind;
        this._maxItems = config.maxItems;
        this._testName = config.testName;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // kind - computed: false, optional: true, required: false
    _kind;
    get kind() {
        return this.getStringAttribute('kind');
    }
    set kind(value) {
        this._kind = value;
    }
    resetKind() {
        this._kind = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kindInput() {
        return this._kind;
    }
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareZeroTrustDexTestsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // test_name - computed: false, optional: true, required: false
    _testName;
    get testName() {
        return this.getStringAttribute('test_name');
    }
    set testName(value) {
        this._testName = value;
    }
    resetTestName() {
        this._testName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get testNameInput() {
        return this._testName;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            kind: cdktf.stringToTerraform(this._kind),
            max_items: cdktf.numberToTerraform(this._maxItems),
            test_name: cdktf.stringToTerraform(this._testName),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
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
            test_name: {
                value: cdktf.stringToHclTerraform(this._testName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
