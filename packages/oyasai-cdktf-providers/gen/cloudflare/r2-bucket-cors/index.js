// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function r2BucketCorsRulesAllowedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.headers),
        methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.methods),
        origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.origins),
    };
}
export function r2BucketCorsRulesAllowedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.headers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        methods: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.methods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        origins: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.origins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketCorsRulesAllowedOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._methods !== undefined) {
            hasAnyValues = true;
            internalValueResult.methods = this._methods;
        }
        if (this._origins !== undefined) {
            hasAnyValues = true;
            internalValueResult.origins = this._origins;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headers = undefined;
            this._methods = undefined;
            this._origins = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headers = value.headers;
            this._methods = value.methods;
            this._origins = value.origins;
        }
    }
    // headers - computed: false, optional: true, required: false
    _headers;
    get headers() {
        return this.getListAttribute('headers');
    }
    set headers(value) {
        this._headers = value;
    }
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers;
    }
    // methods - computed: false, optional: false, required: true
    _methods;
    get methods() {
        return this.getListAttribute('methods');
    }
    set methods(value) {
        this._methods = value;
    }
    // Temporarily expose input value. Use with caution.
    get methodsInput() {
        return this._methods;
    }
    // origins - computed: false, optional: false, required: true
    _origins;
    get origins() {
        return this.getListAttribute('origins');
    }
    set origins(value) {
        this._origins = value;
    }
    // Temporarily expose input value. Use with caution.
    get originsInput() {
        return this._origins;
    }
}
export function r2BucketCorsRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: r2BucketCorsRulesAllowedToTerraform(struct.allowed),
        expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exposeHeaders),
        id: cdktf.stringToTerraform(struct.id),
        max_age_seconds: cdktf.numberToTerraform(struct.maxAgeSeconds),
    };
}
export function r2BucketCorsRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed: {
            value: r2BucketCorsRulesAllowedToHclTerraform(struct.allowed),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketCorsRulesAllowed",
        },
        expose_headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exposeHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_age_seconds: {
            value: cdktf.numberToHclTerraform(struct.maxAgeSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketCorsRulesOutputReference extends cdktf.ComplexObject {
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
        if (this._allowed?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowed = this._allowed?.internalValue;
        }
        if (this._exposeHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.exposeHeaders = this._exposeHeaders;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._maxAgeSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowed.internalValue = undefined;
            this._exposeHeaders = undefined;
            this._id = undefined;
            this._maxAgeSeconds = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowed.internalValue = value.allowed;
            this._exposeHeaders = value.exposeHeaders;
            this._id = value.id;
            this._maxAgeSeconds = value.maxAgeSeconds;
        }
    }
    // allowed - computed: false, optional: false, required: true
    _allowed = new R2BucketCorsRulesAllowedOutputReference(this, "allowed");
    get allowed() {
        return this._allowed;
    }
    putAllowed(value) {
        this._allowed.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get allowedInput() {
        return this._allowed.internalValue;
    }
    // expose_headers - computed: false, optional: true, required: false
    _exposeHeaders;
    get exposeHeaders() {
        return this.getListAttribute('expose_headers');
    }
    set exposeHeaders(value) {
        this._exposeHeaders = value;
    }
    resetExposeHeaders() {
        this._exposeHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exposeHeadersInput() {
        return this._exposeHeaders;
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // max_age_seconds - computed: false, optional: true, required: false
    _maxAgeSeconds;
    get maxAgeSeconds() {
        return this.getNumberAttribute('max_age_seconds');
    }
    set maxAgeSeconds(value) {
        this._maxAgeSeconds = value;
    }
    resetMaxAgeSeconds() {
        this._maxAgeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAgeSecondsInput() {
        return this._maxAgeSeconds;
    }
}
export class R2BucketCorsRulesList extends cdktf.ComplexList {
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
        return new R2BucketCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors cloudflare_r2_bucket_cors}
*/
export class R2BucketCors extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_r2_bucket_cors";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2BucketCors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketCors to import
    * @param importFromId The id of the existing R2BucketCors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketCors to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_cors", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors cloudflare_r2_bucket_cors} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketCorsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_cors',
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
        this._bucketName = config.bucketName;
        this._jurisdiction = config.jurisdiction;
        this._rules.internalValue = config.rules;
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
    // bucket_name - computed: false, optional: false, required: true
    _bucketName;
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    // jurisdiction - computed: true, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // rules - computed: false, optional: true, required: false
    _rules = new R2BucketCorsRulesList(this, "rules", false);
    get rules() {
        return this._rules;
    }
    putRules(value) {
        this._rules.internalValue = value;
    }
    resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesInput() {
        return this._rules.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            rules: cdktf.listMapper(r2BucketCorsRulesToTerraform, false)(this._rules.internalValue),
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
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktf.listMapperHcl(r2BucketCorsRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "R2BucketCorsRulesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
