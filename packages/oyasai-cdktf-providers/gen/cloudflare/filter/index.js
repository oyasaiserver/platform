// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function filterBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        expression: cdktf.stringToTerraform(struct.expression),
        paused: cdktf.booleanToTerraform(struct.paused),
        ref: cdktf.stringToTerraform(struct.ref),
    };
}
export function filterBodyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        paused: {
            value: cdktf.booleanToHclTerraform(struct.paused),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ref: {
            value: cdktf.stringToHclTerraform(struct.ref),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class FilterBodyOutputReference extends cdktf.ComplexObject {
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
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._paused !== undefined) {
            hasAnyValues = true;
            internalValueResult.paused = this._paused;
        }
        if (this._ref !== undefined) {
            hasAnyValues = true;
            internalValueResult.ref = this._ref;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._expression = undefined;
            this._paused = undefined;
            this._ref = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._expression = value.expression;
            this._paused = value.paused;
            this._ref = value.ref;
        }
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // expression - computed: false, optional: true, required: false
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // paused - computed: false, optional: true, required: false
    _paused;
    get paused() {
        return this.getBooleanAttribute('paused');
    }
    set paused(value) {
        this._paused = value;
    }
    resetPaused() {
        this._paused = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pausedInput() {
        return this._paused;
    }
    // ref - computed: false, optional: true, required: false
    _ref;
    get ref() {
        return this.getStringAttribute('ref');
    }
    set ref(value) {
        this._ref = value;
    }
    resetRef() {
        this._ref = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refInput() {
        return this._ref;
    }
}
export class FilterBodyList extends cdktf.ComplexList {
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
        return new FilterBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter cloudflare_filter}
*/
export class Filter extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_filter";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Filter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Filter to import
    * @param importFromId The id of the existing Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Filter to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_filter", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter cloudflare_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FilterConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_filter',
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
        this._body.internalValue = config.body;
        this._description = config.description;
        this._expression = config.expression;
        this._paused = config.paused;
        this._ref = config.ref;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // body - computed: false, optional: false, required: true
    _body = new FilterBodyList(this, "body", false);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // expression - computed: false, optional: true, required: false
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // paused - computed: false, optional: true, required: false
    _paused;
    get paused() {
        return this.getBooleanAttribute('paused');
    }
    set paused(value) {
        this._paused = value;
    }
    resetPaused() {
        this._paused = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pausedInput() {
        return this._paused;
    }
    // ref - computed: false, optional: true, required: false
    _ref;
    get ref() {
        return this.getStringAttribute('ref');
    }
    set ref(value) {
        this._ref = value;
    }
    resetRef() {
        this._ref = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refInput() {
        return this._ref;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            body: cdktf.listMapper(filterBodyToTerraform, false)(this._body.internalValue),
            description: cdktf.stringToTerraform(this._description),
            expression: cdktf.stringToTerraform(this._expression),
            paused: cdktf.booleanToTerraform(this._paused),
            ref: cdktf.stringToTerraform(this._ref),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            body: {
                value: cdktf.listMapperHcl(filterBodyToHclTerraform, false)(this._body.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "FilterBodyList",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expression: {
                value: cdktf.stringToHclTerraform(this._expression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            paused: {
                value: cdktf.booleanToHclTerraform(this._paused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ref: {
                value: cdktf.stringToHclTerraform(this._ref),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
