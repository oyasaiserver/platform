// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function addressMapMembershipsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identifier: cdktf.stringToTerraform(struct.identifier),
        kind: cdktf.stringToTerraform(struct.kind),
    };
}
export function addressMapMembershipsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identifier: {
            value: cdktf.stringToHclTerraform(struct.identifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kind: {
            value: cdktf.stringToHclTerraform(struct.kind),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AddressMapMembershipsOutputReference extends cdktf.ComplexObject {
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
        if (this._identifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifier = this._identifier;
        }
        if (this._kind !== undefined) {
            hasAnyValues = true;
            internalValueResult.kind = this._kind;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identifier = undefined;
            this._kind = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identifier = value.identifier;
            this._kind = value.kind;
        }
    }
    // identifier - computed: false, optional: true, required: false
    _identifier;
    get identifier() {
        return this.getStringAttribute('identifier');
    }
    set identifier(value) {
        this._identifier = value;
    }
    resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identifierInput() {
        return this._identifier;
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
}
export class AddressMapMembershipsList extends cdktf.ComplexList {
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
        return new AddressMapMembershipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map cloudflare_address_map}
*/
export class AddressMap extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_address_map";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AddressMap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AddressMap to import
    * @param importFromId The id of the existing AddressMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AddressMap to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_address_map", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map cloudflare_address_map} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AddressMapConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_address_map',
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
        this._defaultSni = config.defaultSni;
        this._description = config.description;
        this._enabled = config.enabled;
        this._ips = config.ips;
        this._memberships.internalValue = config.memberships;
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
    // can_delete - computed: true, optional: false, required: false
    get canDelete() {
        return this.getBooleanAttribute('can_delete');
    }
    // can_modify_ips - computed: true, optional: false, required: false
    get canModifyIps() {
        return this.getBooleanAttribute('can_modify_ips');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // default_sni - computed: false, optional: true, required: false
    _defaultSni;
    get defaultSni() {
        return this.getStringAttribute('default_sni');
    }
    set defaultSni(value) {
        this._defaultSni = value;
    }
    resetDefaultSni() {
        this._defaultSni = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultSniInput() {
        return this._defaultSni;
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
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ips - computed: false, optional: true, required: false
    _ips;
    get ips() {
        return this.getListAttribute('ips');
    }
    set ips(value) {
        this._ips = value;
    }
    resetIps() {
        this._ips = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipsInput() {
        return this._ips;
    }
    // memberships - computed: false, optional: true, required: false
    _memberships = new AddressMapMembershipsList(this, "memberships", false);
    get memberships() {
        return this._memberships;
    }
    putMemberships(value) {
        this._memberships.internalValue = value;
    }
    resetMemberships() {
        this._memberships.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membershipsInput() {
        return this._memberships.internalValue;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            default_sni: cdktf.stringToTerraform(this._defaultSni),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
            memberships: cdktf.listMapper(addressMapMembershipsToTerraform, false)(this._memberships.internalValue),
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
            default_sni: {
                value: cdktf.stringToHclTerraform(this._defaultSni),
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
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ips: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            memberships: {
                value: cdktf.listMapperHcl(addressMapMembershipsToHclTerraform, false)(this._memberships.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AddressMapMembershipsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
