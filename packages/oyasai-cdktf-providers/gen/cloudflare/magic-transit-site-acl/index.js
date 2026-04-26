"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicTransitSiteAcl = exports.MagicTransitSiteAclLan2OutputReference = exports.MagicTransitSiteAclLan1OutputReference = void 0;
exports.magicTransitSiteAclLan1ToTerraform = magicTransitSiteAclLan1ToTerraform;
exports.magicTransitSiteAclLan1ToHclTerraform = magicTransitSiteAclLan1ToHclTerraform;
exports.magicTransitSiteAclLan2ToTerraform = magicTransitSiteAclLan2ToTerraform;
exports.magicTransitSiteAclLan2ToHclTerraform = magicTransitSiteAclLan2ToHclTerraform;
var cdktf = require("cdktf");
function magicTransitSiteAclLan1ToTerraform(struct) {
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
function magicTransitSiteAclLan1ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var MagicTransitSiteAclLan1OutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteAclLan1OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteAclLan1OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "lanId", {
        get: function () {
            return this.getStringAttribute('lan_id');
        },
        set: function (value) {
            this._lanId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "lanIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "lanName", {
        get: function () {
            return this.getStringAttribute('lan_name');
        },
        set: function (value) {
            this._lanName = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan1OutputReference.prototype.resetLanName = function () {
        this._lanName = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "lanNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "portRanges", {
        get: function () {
            return this.getListAttribute('port_ranges');
        },
        set: function (value) {
            this._portRanges = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan1OutputReference.prototype.resetPortRanges = function () {
        this._portRanges = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "portRangesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portRanges;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "ports", {
        get: function () {
            return this.getNumberListAttribute('ports');
        },
        set: function (value) {
            this._ports = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan1OutputReference.prototype.resetPorts = function () {
        this._ports = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "portsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "subnets", {
        get: function () {
            return this.getListAttribute('subnets');
        },
        set: function (value) {
            this._subnets = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan1OutputReference.prototype.resetSubnets = function () {
        this._subnets = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan1OutputReference.prototype, "subnetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnets;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteAclLan1OutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteAclLan1OutputReference = MagicTransitSiteAclLan1OutputReference;
function magicTransitSiteAclLan2ToTerraform(struct) {
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
function magicTransitSiteAclLan2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var MagicTransitSiteAclLan2OutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteAclLan2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteAclLan2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "lanId", {
        get: function () {
            return this.getStringAttribute('lan_id');
        },
        set: function (value) {
            this._lanId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "lanIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "lanName", {
        get: function () {
            return this.getStringAttribute('lan_name');
        },
        set: function (value) {
            this._lanName = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan2OutputReference.prototype.resetLanName = function () {
        this._lanName = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "lanNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "portRanges", {
        get: function () {
            return this.getListAttribute('port_ranges');
        },
        set: function (value) {
            this._portRanges = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan2OutputReference.prototype.resetPortRanges = function () {
        this._portRanges = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "portRangesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portRanges;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "ports", {
        get: function () {
            return this.getNumberListAttribute('ports');
        },
        set: function (value) {
            this._ports = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan2OutputReference.prototype.resetPorts = function () {
        this._ports = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "portsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "subnets", {
        get: function () {
            return this.getListAttribute('subnets');
        },
        set: function (value) {
            this._subnets = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAclLan2OutputReference.prototype.resetSubnets = function () {
        this._subnets = undefined;
    };
    Object.defineProperty(MagicTransitSiteAclLan2OutputReference.prototype, "subnetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnets;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteAclLan2OutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteAclLan2OutputReference = MagicTransitSiteAclLan2OutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl}
*/
var MagicTransitSiteAcl = /** @class */ (function (_super) {
    __extends(MagicTransitSiteAcl, _super);
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
    function MagicTransitSiteAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // lan_1 - computed: false, optional: false, required: true
        _this._lan1 = new MagicTransitSiteAclLan1OutputReference(_this, "lan_1");
        // lan_2 - computed: false, optional: false, required: true
        _this._lan2 = new MagicTransitSiteAclLan2OutputReference(_this, "lan_2");
        _this._accountId = config.accountId;
        _this._description = config.description;
        _this._forwardLocally = config.forwardLocally;
        _this._lan1.internalValue = config.lan1;
        _this._lan2.internalValue = config.lan2;
        _this._name = config.name;
        _this._protocols = config.protocols;
        _this._siteId = config.siteId;
        _this._unidirectional = config.unidirectional;
        return _this;
    }
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
    MagicTransitSiteAcl.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_acl", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAcl.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAcl.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "forwardLocally", {
        get: function () {
            return this.getBooleanAttribute('forward_locally');
        },
        set: function (value) {
            this._forwardLocally = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAcl.prototype.resetForwardLocally = function () {
        this._forwardLocally = undefined;
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "forwardLocallyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forwardLocally;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "lan1", {
        get: function () {
            return this._lan1;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAcl.prototype.putLan1 = function (value) {
        this._lan1.internalValue = value;
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "lan1Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lan1.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "lan2", {
        get: function () {
            return this._lan2;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAcl.prototype.putLan2 = function (value) {
        this._lan2.internalValue = value;
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "lan2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lan2.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "protocols", {
        get: function () {
            return this.getListAttribute('protocols');
        },
        set: function (value) {
            this._protocols = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAcl.prototype.resetProtocols = function () {
        this._protocols = undefined;
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "protocolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteAcl.prototype, "unidirectional", {
        get: function () {
            return this.getBooleanAttribute('unidirectional');
        },
        set: function (value) {
            this._unidirectional = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteAcl.prototype.resetUnidirectional = function () {
        this._unidirectional = undefined;
    };
    Object.defineProperty(MagicTransitSiteAcl.prototype, "unidirectionalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unidirectional;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicTransitSiteAcl.prototype.synthesizeAttributes = function () {
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
    };
    MagicTransitSiteAcl.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MagicTransitSiteAcl.tfResourceType = "cloudflare_magic_transit_site_acl";
    return MagicTransitSiteAcl;
}(cdktf.TerraformResource));
exports.MagicTransitSiteAcl = MagicTransitSiteAcl;
