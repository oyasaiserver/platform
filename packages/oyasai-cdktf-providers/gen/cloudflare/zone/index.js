"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone
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
exports.Zone = exports.ZoneTenantUnitOutputReference = exports.ZoneTenantOutputReference = exports.ZonePlanOutputReference = exports.ZoneOwnerOutputReference = exports.ZoneMetaOutputReference = exports.ZoneAccountOutputReference = void 0;
exports.zoneAccountToTerraform = zoneAccountToTerraform;
exports.zoneAccountToHclTerraform = zoneAccountToHclTerraform;
exports.zoneMetaToTerraform = zoneMetaToTerraform;
exports.zoneMetaToHclTerraform = zoneMetaToHclTerraform;
exports.zoneOwnerToTerraform = zoneOwnerToTerraform;
exports.zoneOwnerToHclTerraform = zoneOwnerToHclTerraform;
exports.zonePlanToTerraform = zonePlanToTerraform;
exports.zonePlanToHclTerraform = zonePlanToHclTerraform;
exports.zoneTenantToTerraform = zoneTenantToTerraform;
exports.zoneTenantToHclTerraform = zoneTenantToHclTerraform;
exports.zoneTenantUnitToTerraform = zoneTenantUnitToTerraform;
exports.zoneTenantUnitToHclTerraform = zoneTenantUnitToHclTerraform;
var cdktf = require("cdktf");
function zoneAccountToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function zoneAccountToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZoneAccountOutputReference = /** @class */ (function (_super) {
    __extends(ZoneAccountOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneAccountOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneAccountOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneAccountOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneAccountOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ZoneAccountOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZoneAccountOutputReference;
}(cdktf.ComplexObject));
exports.ZoneAccountOutputReference = ZoneAccountOutputReference;
function zoneMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zoneMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZoneMetaOutputReference = /** @class */ (function (_super) {
    __extends(ZoneMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneMetaOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneMetaOutputReference.prototype, "cdnOnly", {
        // cdn_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cdn_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneMetaOutputReference.prototype, "customCertificateQuota", {
        // custom_certificate_quota - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('custom_certificate_quota');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneMetaOutputReference.prototype, "dnsOnly", {
        // dns_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dns_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneMetaOutputReference.prototype, "foundationDns", {
        // foundation_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('foundation_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneMetaOutputReference.prototype, "pageRuleQuota", {
        // page_rule_quota - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('page_rule_quota');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneMetaOutputReference.prototype, "phishingDetected", {
        // phishing_detected - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('phishing_detected');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneMetaOutputReference.prototype, "step", {
        // step - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('step');
        },
        enumerable: false,
        configurable: true
    });
    return ZoneMetaOutputReference;
}(cdktf.ComplexObject));
exports.ZoneMetaOutputReference = ZoneMetaOutputReference;
function zoneOwnerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zoneOwnerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZoneOwnerOutputReference = /** @class */ (function (_super) {
    __extends(ZoneOwnerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneOwnerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneOwnerOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneOwnerOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneOwnerOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneOwnerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return ZoneOwnerOutputReference;
}(cdktf.ComplexObject));
exports.ZoneOwnerOutputReference = ZoneOwnerOutputReference;
function zonePlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zonePlanToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZonePlanOutputReference = /** @class */ (function (_super) {
    __extends(ZonePlanOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZonePlanOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZonePlanOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "canSubscribe", {
        // can_subscribe - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_subscribe');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "currency", {
        // currency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('currency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "externallyManaged", {
        // externally_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('externally_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "frequency", {
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "isSubscribed", {
        // is_subscribed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_subscribed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "legacyDiscount", {
        // legacy_discount - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('legacy_discount');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "legacyId", {
        // legacy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('legacy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonePlanOutputReference.prototype, "price", {
        // price - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('price');
        },
        enumerable: false,
        configurable: true
    });
    return ZonePlanOutputReference;
}(cdktf.ComplexObject));
exports.ZonePlanOutputReference = ZonePlanOutputReference;
function zoneTenantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zoneTenantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZoneTenantOutputReference = /** @class */ (function (_super) {
    __extends(ZoneTenantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneTenantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneTenantOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneTenantOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneTenantOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ZoneTenantOutputReference;
}(cdktf.ComplexObject));
exports.ZoneTenantOutputReference = ZoneTenantOutputReference;
function zoneTenantUnitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zoneTenantUnitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZoneTenantUnitOutputReference = /** @class */ (function (_super) {
    __extends(ZoneTenantUnitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneTenantUnitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneTenantUnitOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneTenantUnitOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return ZoneTenantUnitOutputReference;
}(cdktf.ComplexObject));
exports.ZoneTenantUnitOutputReference = ZoneTenantUnitOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone cloudflare_zone}
*/
var Zone = /** @class */ (function (_super) {
    __extends(Zone, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone cloudflare_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneConfig
    */
    function Zone(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // account - computed: false, optional: false, required: true
        _this._account = new ZoneAccountOutputReference(_this, "account");
        // meta - computed: true, optional: false, required: false
        _this._meta = new ZoneMetaOutputReference(_this, "meta");
        // owner - computed: true, optional: false, required: false
        _this._owner = new ZoneOwnerOutputReference(_this, "owner");
        // plan - computed: true, optional: false, required: false
        _this._plan = new ZonePlanOutputReference(_this, "plan");
        // tenant - computed: true, optional: false, required: false
        _this._tenant = new ZoneTenantOutputReference(_this, "tenant");
        // tenant_unit - computed: true, optional: false, required: false
        _this._tenantUnit = new ZoneTenantUnitOutputReference(_this, "tenant_unit");
        _this._account.internalValue = config.account;
        _this._name = config.name;
        _this._paused = config.paused;
        _this._type = config.type;
        _this._vanityNameServers = config.vanityNameServers;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Zone to import
    * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Zone to import is found
    */
    Zone.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Zone.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    Zone.prototype.putAccount = function (value) {
        this._account.internalValue = value;
    };
    Object.defineProperty(Zone.prototype, "accountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._account.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "activatedOn", {
        // activated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('activated_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "cnameSuffix", {
        // cname_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "developmentMode", {
        // development_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('development_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "nameServers", {
        // name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "originalDnshost", {
        // original_dnshost - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('original_dnshost');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "originalNameServers", {
        // original_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('original_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "originalRegistrar", {
        // original_registrar - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('original_registrar');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    Zone.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(Zone.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "plan", {
        get: function () {
            return this._plan;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "tenant", {
        get: function () {
            return this._tenant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "tenantUnit", {
        get: function () {
            return this._tenantUnit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Zone.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(Zone.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "vanityNameServers", {
        get: function () {
            return this.getListAttribute('vanity_name_servers');
        },
        set: function (value) {
            this._vanityNameServers = value;
        },
        enumerable: false,
        configurable: true
    });
    Zone.prototype.resetVanityNameServers = function () {
        this._vanityNameServers = undefined;
    };
    Object.defineProperty(Zone.prototype, "vanityNameServersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vanityNameServers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "verificationKey", {
        // verification_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('verification_key');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Zone.prototype.synthesizeAttributes = function () {
        return {
            account: zoneAccountToTerraform(this._account.internalValue),
            name: cdktf.stringToTerraform(this._name),
            paused: cdktf.booleanToTerraform(this._paused),
            type: cdktf.stringToTerraform(this._type),
            vanity_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vanityNameServers),
        };
    };
    Zone.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account: {
                value: zoneAccountToHclTerraform(this._account.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneAccount",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vanity_name_servers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vanityNameServers),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Zone.tfResourceType = "cloudflare_zone";
    return Zone;
}(cdktf.TerraformResource));
exports.Zone = Zone;
