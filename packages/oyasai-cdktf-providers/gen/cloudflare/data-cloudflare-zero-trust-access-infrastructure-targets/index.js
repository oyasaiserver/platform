"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets
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
exports.DataCloudflareZeroTrustAccessInfrastructureTargets = exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList = exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference = exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference = exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference = exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference = void 0;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToHclTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToHclTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToHclTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetsResultToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.prototype, "ipAddr", {
        // ip_addr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_addr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference;
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.prototype, "ipAddr", {
        // ip_addr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_addr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference;
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ipv4 - computed: true, optional: false, required: false
        _this._ipv4 = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference(_this, "ipv4");
        // ipv6 - computed: true, optional: false, required: false
        _this._ipv6 = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference(_this, "ipv6");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference;
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // ip - computed: true, optional: false, required: false
        _this._ip = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference(_this, "ip");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference;
var DataCloudflareZeroTrustAccessInfrastructureTargetsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessInfrastructureTargetsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList = DataCloudflareZeroTrustAccessInfrastructureTargetsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets}
*/
var DataCloudflareZeroTrustAccessInfrastructureTargets = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargets, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessInfrastructureTargetsConfig = {}
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargets(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_targets',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._createdAfter = config.createdAfter;
        _this._createdBefore = config.createdBefore;
        _this._direction = config.direction;
        _this._hostname = config.hostname;
        _this._hostnameContains = config.hostnameContains;
        _this._ipLike = config.ipLike;
        _this._ipV4 = config.ipV4;
        _this._ipV6 = config.ipV6;
        _this._ips = config.ips;
        _this._ipv4End = config.ipv4End;
        _this._ipv4Start = config.ipv4Start;
        _this._ipv6End = config.ipv6End;
        _this._ipv6Start = config.ipv6Start;
        _this._maxItems = config.maxItems;
        _this._modifiedAfter = config.modifiedAfter;
        _this._modifiedBefore = config.modifiedBefore;
        _this._order = config.order;
        _this._targetIds = config.targetIds;
        _this._virtualNetworkId = config.virtualNetworkId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTargets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTargets to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessInfrastructureTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTargets to import is found
    */
    DataCloudflareZeroTrustAccessInfrastructureTargets.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_targets", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "createdAfter", {
        get: function () {
            return this.getStringAttribute('created_after');
        },
        set: function (value) {
            this._createdAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetCreatedAfter = function () {
        this._createdAfter = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "createdAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "createdBefore", {
        get: function () {
            return this.getStringAttribute('created_before');
        },
        set: function (value) {
            this._createdBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetCreatedBefore = function () {
        this._createdBefore = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "createdBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "hostnameContains", {
        get: function () {
            return this.getStringAttribute('hostname_contains');
        },
        set: function (value) {
            this._hostnameContains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetHostnameContains = function () {
        this._hostnameContains = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "hostnameContainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnameContains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipLike", {
        get: function () {
            return this.getStringAttribute('ip_like');
        },
        set: function (value) {
            this._ipLike = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIpLike = function () {
        this._ipLike = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipLikeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipLike;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipV4", {
        get: function () {
            return this.getStringAttribute('ip_v4');
        },
        set: function (value) {
            this._ipV4 = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIpV4 = function () {
        this._ipV4 = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipV4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipV4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipV6", {
        get: function () {
            return this.getStringAttribute('ip_v6');
        },
        set: function (value) {
            this._ipV6 = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIpV6 = function () {
        this._ipV6 = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipV6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipV6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ips", {
        get: function () {
            return this.getListAttribute('ips');
        },
        set: function (value) {
            this._ips = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIps = function () {
        this._ips = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ips;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv4End", {
        get: function () {
            return this.getStringAttribute('ipv4_end');
        },
        set: function (value) {
            this._ipv4End = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIpv4End = function () {
        this._ipv4End = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv4EndInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4End;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv4Start", {
        get: function () {
            return this.getStringAttribute('ipv4_start');
        },
        set: function (value) {
            this._ipv4Start = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIpv4Start = function () {
        this._ipv4Start = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv4StartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4Start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv6End", {
        get: function () {
            return this.getStringAttribute('ipv6_end');
        },
        set: function (value) {
            this._ipv6End = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIpv6End = function () {
        this._ipv6End = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv6EndInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6End;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv6Start", {
        get: function () {
            return this.getStringAttribute('ipv6_start');
        },
        set: function (value) {
            this._ipv6Start = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetIpv6Start = function () {
        this._ipv6Start = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "ipv6StartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "modifiedAfter", {
        get: function () {
            return this.getStringAttribute('modified_after');
        },
        set: function (value) {
            this._modifiedAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetModifiedAfter = function () {
        this._modifiedAfter = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "modifiedAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modifiedAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "modifiedBefore", {
        get: function () {
            return this.getStringAttribute('modified_before');
        },
        set: function (value) {
            this._modifiedBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetModifiedBefore = function () {
        this._modifiedBefore = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "modifiedBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modifiedBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "targetIds", {
        get: function () {
            return this.getListAttribute('target_ids');
        },
        set: function (value) {
            this._targetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetTargetIds = function () {
        this._targetIds = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "targetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargets.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            created_after: cdktf.stringToTerraform(this._createdAfter),
            created_before: cdktf.stringToTerraform(this._createdBefore),
            direction: cdktf.stringToTerraform(this._direction),
            hostname: cdktf.stringToTerraform(this._hostname),
            hostname_contains: cdktf.stringToTerraform(this._hostnameContains),
            ip_like: cdktf.stringToTerraform(this._ipLike),
            ip_v4: cdktf.stringToTerraform(this._ipV4),
            ip_v6: cdktf.stringToTerraform(this._ipV6),
            ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
            ipv4_end: cdktf.stringToTerraform(this._ipv4End),
            ipv4_start: cdktf.stringToTerraform(this._ipv4Start),
            ipv6_end: cdktf.stringToTerraform(this._ipv6End),
            ipv6_start: cdktf.stringToTerraform(this._ipv6Start),
            max_items: cdktf.numberToTerraform(this._maxItems),
            modified_after: cdktf.stringToTerraform(this._modifiedAfter),
            modified_before: cdktf.stringToTerraform(this._modifiedBefore),
            order: cdktf.stringToTerraform(this._order),
            target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetIds),
            virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
        };
    };
    DataCloudflareZeroTrustAccessInfrastructureTargets.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            created_after: {
                value: cdktf.stringToHclTerraform(this._createdAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            created_before: {
                value: cdktf.stringToHclTerraform(this._createdBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname_contains: {
                value: cdktf.stringToHclTerraform(this._hostnameContains),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_like: {
                value: cdktf.stringToHclTerraform(this._ipLike),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_v4: {
                value: cdktf.stringToHclTerraform(this._ipV4),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_v6: {
                value: cdktf.stringToHclTerraform(this._ipV6),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ips: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ipv4_end: {
                value: cdktf.stringToHclTerraform(this._ipv4End),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv4_start: {
                value: cdktf.stringToHclTerraform(this._ipv4Start),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv6_end: {
                value: cdktf.stringToHclTerraform(this._ipv6End),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv6_start: {
                value: cdktf.stringToHclTerraform(this._ipv6Start),
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
            modified_after: {
                value: cdktf.stringToHclTerraform(this._modifiedAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            modified_before: {
                value: cdktf.stringToHclTerraform(this._modifiedBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            virtual_network_id: {
                value: cdktf.stringToHclTerraform(this._virtualNetworkId),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareZeroTrustAccessInfrastructureTargets.tfResourceType = "cloudflare_zero_trust_access_infrastructure_targets";
    return DataCloudflareZeroTrustAccessInfrastructureTargets;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessInfrastructureTargets = DataCloudflareZeroTrustAccessInfrastructureTargets;
