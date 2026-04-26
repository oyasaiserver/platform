// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicWanStaticRouteScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        colo_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.coloNames),
        colo_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.coloRegions),
    };
}
export function magicWanStaticRouteScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        colo_names: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.coloNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        colo_regions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.coloRegions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicWanStaticRouteScopeOutputReference extends cdktf.ComplexObject {
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
        if (this._coloNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.coloNames = this._coloNames;
        }
        if (this._coloRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.coloRegions = this._coloRegions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._coloNames = undefined;
            this._coloRegions = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._coloNames = value.coloNames;
            this._coloRegions = value.coloRegions;
        }
    }
    // colo_names - computed: false, optional: true, required: false
    _coloNames;
    get coloNames() {
        return this.getListAttribute('colo_names');
    }
    set coloNames(value) {
        this._coloNames = value;
    }
    resetColoNames() {
        this._coloNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get coloNamesInput() {
        return this._coloNames;
    }
    // colo_regions - computed: false, optional: true, required: false
    _coloRegions;
    get coloRegions() {
        return this.getListAttribute('colo_regions');
    }
    set coloRegions(value) {
        this._coloRegions = value;
    }
    resetColoRegions() {
        this._coloRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get coloRegionsInput() {
        return this._coloRegions;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route}
*/
export class MagicWanStaticRoute extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_wan_static_route";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanStaticRoute to import
    * @param importFromId The id of the existing MagicWanStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanStaticRoute to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_static_route", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanStaticRouteConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_wan_static_route',
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
        this._description = config.description;
        this._nexthop = config.nexthop;
        this._prefix = config.prefix;
        this._priority = config.priority;
        this._scope.internalValue = config.scope;
        this._weight = config.weight;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // description - computed: true, optional: true, required: false
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // nexthop - computed: false, optional: false, required: true
    _nexthop;
    get nexthop() {
        return this.getStringAttribute('nexthop');
    }
    set nexthop(value) {
        this._nexthop = value;
    }
    // Temporarily expose input value. Use with caution.
    get nexthopInput() {
        return this._nexthop;
    }
    // prefix - computed: false, optional: false, required: true
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    // priority - computed: false, optional: false, required: true
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // scope - computed: false, optional: true, required: false
    _scope = new MagicWanStaticRouteScopeOutputReference(this, "scope");
    get scope() {
        return this._scope;
    }
    putScope(value) {
        this._scope.internalValue = value;
    }
    resetScope() {
        this._scope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope.internalValue;
    }
    // weight - computed: false, optional: true, required: false
    _weight;
    get weight() {
        return this.getNumberAttribute('weight');
    }
    set weight(value) {
        this._weight = value;
    }
    resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weightInput() {
        return this._weight;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            nexthop: cdktf.stringToTerraform(this._nexthop),
            prefix: cdktf.stringToTerraform(this._prefix),
            priority: cdktf.numberToTerraform(this._priority),
            scope: magicWanStaticRouteScopeToTerraform(this._scope.internalValue),
            weight: cdktf.numberToTerraform(this._weight),
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
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            nexthop: {
                value: cdktf.stringToHclTerraform(this._nexthop),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefix: {
                value: cdktf.stringToHclTerraform(this._prefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            scope: {
                value: magicWanStaticRouteScopeToHclTerraform(this._scope.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanStaticRouteScope",
            },
            weight: {
                value: cdktf.numberToHclTerraform(this._weight),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
