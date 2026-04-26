// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicTransitSiteAclLan1ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lan_id: cdktf.stringToTerraform(struct.lanId),
        lan_name: cdktf.stringToTerraform(struct.lanName),
        port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.portRanges),
        ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.ports),
        subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subnets),
    };
}
export function magicTransitSiteAclLan1ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lan_id: {
            value: cdktf.stringToHclTerraform(struct.lanId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lan_name: {
            value: cdktf.stringToHclTerraform(struct.lanName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port_ranges: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.portRanges),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ports: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.ports),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        subnets: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteAclLan1OutputReference extends cdktf.ComplexObject {
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
        if (this._lanId !== undefined) {
            hasAnyValues = true;
            internalValueResult.lanId = this._lanId;
        }
        if (this._lanName !== undefined) {
            hasAnyValues = true;
            internalValueResult.lanName = this._lanName;
        }
        if (this._portRanges !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRanges = this._portRanges;
        }
        if (this._ports !== undefined) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lanId = undefined;
            this._lanName = undefined;
            this._portRanges = undefined;
            this._ports = undefined;
            this._subnets = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lanId = value.lanId;
            this._lanName = value.lanName;
            this._portRanges = value.portRanges;
            this._ports = value.ports;
            this._subnets = value.subnets;
        }
    }
    // lan_id - computed: false, optional: false, required: true
    _lanId;
    get lanId() {
        return this.getStringAttribute('lan_id');
    }
    set lanId(value) {
        this._lanId = value;
    }
    // Temporarily expose input value. Use with caution.
    get lanIdInput() {
        return this._lanId;
    }
    // lan_name - computed: false, optional: true, required: false
    _lanName;
    get lanName() {
        return this.getStringAttribute('lan_name');
    }
    set lanName(value) {
        this._lanName = value;
    }
    resetLanName() {
        this._lanName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lanNameInput() {
        return this._lanName;
    }
    // port_ranges - computed: false, optional: true, required: false
    _portRanges;
    get portRanges() {
        return this.getListAttribute('port_ranges');
    }
    set portRanges(value) {
        this._portRanges = value;
    }
    resetPortRanges() {
        this._portRanges = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portRangesInput() {
        return this._portRanges;
    }
    // ports - computed: false, optional: true, required: false
    _ports;
    get ports() {
        return this.getNumberListAttribute('ports');
    }
    set ports(value) {
        this._ports = value;
    }
    resetPorts() {
        this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portsInput() {
        return this._ports;
    }
    // subnets - computed: false, optional: true, required: false
    _subnets;
    get subnets() {
        return this.getListAttribute('subnets');
    }
    set subnets(value) {
        this._subnets = value;
    }
    resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetsInput() {
        return this._subnets;
    }
}
export function magicTransitSiteAclLan2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lan_id: cdktf.stringToTerraform(struct.lanId),
        lan_name: cdktf.stringToTerraform(struct.lanName),
        port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.portRanges),
        ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.ports),
        subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subnets),
    };
}
export function magicTransitSiteAclLan2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lan_id: {
            value: cdktf.stringToHclTerraform(struct.lanId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lan_name: {
            value: cdktf.stringToHclTerraform(struct.lanName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port_ranges: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.portRanges),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ports: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.ports),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        subnets: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteAclLan2OutputReference extends cdktf.ComplexObject {
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
        if (this._lanId !== undefined) {
            hasAnyValues = true;
            internalValueResult.lanId = this._lanId;
        }
        if (this._lanName !== undefined) {
            hasAnyValues = true;
            internalValueResult.lanName = this._lanName;
        }
        if (this._portRanges !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRanges = this._portRanges;
        }
        if (this._ports !== undefined) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lanId = undefined;
            this._lanName = undefined;
            this._portRanges = undefined;
            this._ports = undefined;
            this._subnets = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lanId = value.lanId;
            this._lanName = value.lanName;
            this._portRanges = value.portRanges;
            this._ports = value.ports;
            this._subnets = value.subnets;
        }
    }
    // lan_id - computed: false, optional: false, required: true
    _lanId;
    get lanId() {
        return this.getStringAttribute('lan_id');
    }
    set lanId(value) {
        this._lanId = value;
    }
    // Temporarily expose input value. Use with caution.
    get lanIdInput() {
        return this._lanId;
    }
    // lan_name - computed: false, optional: true, required: false
    _lanName;
    get lanName() {
        return this.getStringAttribute('lan_name');
    }
    set lanName(value) {
        this._lanName = value;
    }
    resetLanName() {
        this._lanName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lanNameInput() {
        return this._lanName;
    }
    // port_ranges - computed: false, optional: true, required: false
    _portRanges;
    get portRanges() {
        return this.getListAttribute('port_ranges');
    }
    set portRanges(value) {
        this._portRanges = value;
    }
    resetPortRanges() {
        this._portRanges = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portRangesInput() {
        return this._portRanges;
    }
    // ports - computed: false, optional: true, required: false
    _ports;
    get ports() {
        return this.getNumberListAttribute('ports');
    }
    set ports(value) {
        this._ports = value;
    }
    resetPorts() {
        this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portsInput() {
        return this._ports;
    }
    // subnets - computed: false, optional: true, required: false
    _subnets;
    get subnets() {
        return this.getListAttribute('subnets');
    }
    set subnets(value) {
        this._subnets = value;
    }
    resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetsInput() {
        return this._subnets;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl}
*/
export class MagicTransitSiteAcl extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_site_acl";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteAcl to import
    * @param importFromId The id of the existing MagicTransitSiteAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteAcl to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_acl", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteAclConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_acl',
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
        this._forwardLocally = config.forwardLocally;
        this._lan1.internalValue = config.lan1;
        this._lan2.internalValue = config.lan2;
        this._name = config.name;
        this._protocols = config.protocols;
        this._siteId = config.siteId;
        this._unidirectional = config.unidirectional;
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
    // forward_locally - computed: false, optional: true, required: false
    _forwardLocally;
    get forwardLocally() {
        return this.getBooleanAttribute('forward_locally');
    }
    set forwardLocally(value) {
        this._forwardLocally = value;
    }
    resetForwardLocally() {
        this._forwardLocally = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardLocallyInput() {
        return this._forwardLocally;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // lan_1 - computed: false, optional: false, required: true
    _lan1 = new MagicTransitSiteAclLan1OutputReference(this, "lan_1");
    get lan1() {
        return this._lan1;
    }
    putLan1(value) {
        this._lan1.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get lan1Input() {
        return this._lan1.internalValue;
    }
    // lan_2 - computed: false, optional: false, required: true
    _lan2 = new MagicTransitSiteAclLan2OutputReference(this, "lan_2");
    get lan2() {
        return this._lan2;
    }
    putLan2(value) {
        this._lan2.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get lan2Input() {
        return this._lan2.internalValue;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // protocols - computed: false, optional: true, required: false
    _protocols;
    get protocols() {
        return this.getListAttribute('protocols');
    }
    set protocols(value) {
        this._protocols = value;
    }
    resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolsInput() {
        return this._protocols;
    }
    // site_id - computed: false, optional: false, required: true
    _siteId;
    get siteId() {
        return this.getStringAttribute('site_id');
    }
    set siteId(value) {
        this._siteId = value;
    }
    // Temporarily expose input value. Use with caution.
    get siteIdInput() {
        return this._siteId;
    }
    // unidirectional - computed: false, optional: true, required: false
    _unidirectional;
    get unidirectional() {
        return this.getBooleanAttribute('unidirectional');
    }
    set unidirectional(value) {
        this._unidirectional = value;
    }
    resetUnidirectional() {
        this._unidirectional = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unidirectionalInput() {
        return this._unidirectional;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            forward_locally: cdktf.booleanToTerraform(this._forwardLocally),
            lan_1: magicTransitSiteAclLan1ToTerraform(this._lan1.internalValue),
            lan_2: magicTransitSiteAclLan2ToTerraform(this._lan2.internalValue),
            name: cdktf.stringToTerraform(this._name),
            protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
            site_id: cdktf.stringToTerraform(this._siteId),
            unidirectional: cdktf.booleanToTerraform(this._unidirectional),
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
            forward_locally: {
                value: cdktf.booleanToHclTerraform(this._forwardLocally),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            lan_1: {
                value: magicTransitSiteAclLan1ToHclTerraform(this._lan1.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteAclLan1",
            },
            lan_2: {
                value: magicTransitSiteAclLan2ToHclTerraform(this._lan2.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteAclLan2",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocols: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            unidirectional: {
                value: cdktf.booleanToHclTerraform(this._unidirectional),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
