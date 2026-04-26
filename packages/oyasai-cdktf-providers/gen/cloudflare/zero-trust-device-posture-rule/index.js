"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule
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
exports.ZeroTrustDevicePostureRule = exports.ZeroTrustDevicePostureRuleMatchList = exports.ZeroTrustDevicePostureRuleMatchOutputReference = exports.ZeroTrustDevicePostureRuleInputOutputReference = exports.ZeroTrustDevicePostureRuleInputLocationsOutputReference = void 0;
exports.zeroTrustDevicePostureRuleInputLocationsToTerraform = zeroTrustDevicePostureRuleInputLocationsToTerraform;
exports.zeroTrustDevicePostureRuleInputLocationsToHclTerraform = zeroTrustDevicePostureRuleInputLocationsToHclTerraform;
exports.zeroTrustDevicePostureRuleInputToTerraform = zeroTrustDevicePostureRuleInputToTerraform;
exports.zeroTrustDevicePostureRuleInputToHclTerraform = zeroTrustDevicePostureRuleInputToHclTerraform;
exports.zeroTrustDevicePostureRuleMatchToTerraform = zeroTrustDevicePostureRuleMatchToTerraform;
exports.zeroTrustDevicePostureRuleMatchToHclTerraform = zeroTrustDevicePostureRuleMatchToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDevicePostureRuleInputLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.paths),
        trust_stores: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.trustStores),
    };
}
function zeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        paths: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.paths),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        trust_stores: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.trustStores),
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
var ZeroTrustDevicePostureRuleInputLocationsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDevicePostureRuleInputLocationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDevicePostureRuleInputLocationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._paths !== undefined) {
                hasAnyValues = true;
                internalValueResult.paths = this._paths;
            }
            if (this._trustStores !== undefined) {
                hasAnyValues = true;
                internalValueResult.trustStores = this._trustStores;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._paths = undefined;
                this._trustStores = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._paths = value.paths;
                this._trustStores = value.trustStores;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "paths", {
        get: function () {
            return this.getListAttribute('paths');
        },
        set: function (value) {
            this._paths = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype.resetPaths = function () {
        this._paths = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "pathsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paths;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "trustStores", {
        get: function () {
            return this.getListAttribute('trust_stores');
        },
        set: function (value) {
            this._trustStores = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype.resetTrustStores = function () {
        this._trustStores = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "trustStoresInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trustStores;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDevicePostureRuleInputLocationsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDevicePostureRuleInputLocationsOutputReference = ZeroTrustDevicePostureRuleInputLocationsOutputReference;
function zeroTrustDevicePostureRuleInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        active_threats: cdktf.numberToTerraform(struct.activeThreats),
        auth_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.authState),
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
        check_disks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkDisks),
        check_private_key: cdktf.booleanToTerraform(struct.checkPrivateKey),
        cn: cdktf.stringToTerraform(struct.cn),
        compliance_status: cdktf.stringToTerraform(struct.complianceStatus),
        connection_id: cdktf.stringToTerraform(struct.connectionId),
        count_operator: cdktf.stringToTerraform(struct.countOperator),
        domain: cdktf.stringToTerraform(struct.domain),
        eid_last_seen: cdktf.stringToTerraform(struct.eidLastSeen),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        exists: cdktf.booleanToTerraform(struct.exists),
        extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.extendedKeyUsage),
        id: cdktf.stringToTerraform(struct.id),
        infected: cdktf.booleanToTerraform(struct.infected),
        is_active: cdktf.booleanToTerraform(struct.isActive),
        issue_count: cdktf.stringToTerraform(struct.issueCount),
        last_seen: cdktf.stringToTerraform(struct.lastSeen),
        locations: zeroTrustDevicePostureRuleInputLocationsToTerraform(struct.locations),
        network_status: cdktf.stringToTerraform(struct.networkStatus),
        operating_system: cdktf.stringToTerraform(struct.operatingSystem),
        operational_state: cdktf.stringToTerraform(struct.operationalState),
        operator: cdktf.stringToTerraform(struct.operator),
        os: cdktf.stringToTerraform(struct.os),
        os_distro_name: cdktf.stringToTerraform(struct.osDistroName),
        os_distro_revision: cdktf.stringToTerraform(struct.osDistroRevision),
        os_version_extra: cdktf.stringToTerraform(struct.osVersionExtra),
        overall: cdktf.stringToTerraform(struct.overall),
        path: cdktf.stringToTerraform(struct.path),
        require_all: cdktf.booleanToTerraform(struct.requireAll),
        risk_level: cdktf.stringToTerraform(struct.riskLevel),
        score: cdktf.numberToTerraform(struct.score),
        score_operator: cdktf.stringToTerraform(struct.scoreOperator),
        sensor_config: cdktf.stringToTerraform(struct.sensorConfig),
        sha256: cdktf.stringToTerraform(struct.sha256),
        state: cdktf.stringToTerraform(struct.state),
        subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subjectAlternativeNames),
        thumbprint: cdktf.stringToTerraform(struct.thumbprint),
        total_score: cdktf.numberToTerraform(struct.totalScore),
        update_window_days: cdktf.numberToTerraform(struct.updateWindowDays),
        version: cdktf.stringToTerraform(struct.version),
        version_operator: cdktf.stringToTerraform(struct.versionOperator),
    };
}
function zeroTrustDevicePostureRuleInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        active_threats: {
            value: cdktf.numberToHclTerraform(struct.activeThreats),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        auth_state: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.authState),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        check_disks: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.checkDisks),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        check_private_key: {
            value: cdktf.booleanToHclTerraform(struct.checkPrivateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cn: {
            value: cdktf.stringToHclTerraform(struct.cn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compliance_status: {
            value: cdktf.stringToHclTerraform(struct.complianceStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connection_id: {
            value: cdktf.stringToHclTerraform(struct.connectionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        count_operator: {
            value: cdktf.stringToHclTerraform(struct.countOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        eid_last_seen: {
            value: cdktf.stringToHclTerraform(struct.eidLastSeen),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exists: {
            value: cdktf.booleanToHclTerraform(struct.exists),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        extended_key_usage: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.extendedKeyUsage),
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
        infected: {
            value: cdktf.booleanToHclTerraform(struct.infected),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_active: {
            value: cdktf.booleanToHclTerraform(struct.isActive),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        issue_count: {
            value: cdktf.stringToHclTerraform(struct.issueCount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        last_seen: {
            value: cdktf.stringToHclTerraform(struct.lastSeen),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locations: {
            value: zeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct.locations),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDevicePostureRuleInputLocations",
        },
        network_status: {
            value: cdktf.stringToHclTerraform(struct.networkStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operating_system: {
            value: cdktf.stringToHclTerraform(struct.operatingSystem),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operational_state: {
            value: cdktf.stringToHclTerraform(struct.operationalState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os: {
            value: cdktf.stringToHclTerraform(struct.os),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os_distro_name: {
            value: cdktf.stringToHclTerraform(struct.osDistroName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os_distro_revision: {
            value: cdktf.stringToHclTerraform(struct.osDistroRevision),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os_version_extra: {
            value: cdktf.stringToHclTerraform(struct.osVersionExtra),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overall: {
            value: cdktf.stringToHclTerraform(struct.overall),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        require_all: {
            value: cdktf.booleanToHclTerraform(struct.requireAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        risk_level: {
            value: cdktf.stringToHclTerraform(struct.riskLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        score: {
            value: cdktf.numberToHclTerraform(struct.score),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        score_operator: {
            value: cdktf.stringToHclTerraform(struct.scoreOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sensor_config: {
            value: cdktf.stringToHclTerraform(struct.sensorConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sha256: {
            value: cdktf.stringToHclTerraform(struct.sha256),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktf.stringToHclTerraform(struct.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject_alternative_names: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subjectAlternativeNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        thumbprint: {
            value: cdktf.stringToHclTerraform(struct.thumbprint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        total_score: {
            value: cdktf.numberToHclTerraform(struct.totalScore),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        update_window_days: {
            value: cdktf.numberToHclTerraform(struct.updateWindowDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_operator: {
            value: cdktf.stringToHclTerraform(struct.versionOperator),
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
var ZeroTrustDevicePostureRuleInputOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDevicePostureRuleInputOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDevicePostureRuleInputOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // locations - computed: false, optional: true, required: false
        _this._locations = new ZeroTrustDevicePostureRuleInputLocationsOutputReference(_this, "locations");
        return _this;
    }
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._activeThreats !== undefined) {
                hasAnyValues = true;
                internalValueResult.activeThreats = this._activeThreats;
            }
            if (this._authState !== undefined) {
                hasAnyValues = true;
                internalValueResult.authState = this._authState;
            }
            if (this._certificateId !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificateId = this._certificateId;
            }
            if (this._checkDisks !== undefined) {
                hasAnyValues = true;
                internalValueResult.checkDisks = this._checkDisks;
            }
            if (this._checkPrivateKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.checkPrivateKey = this._checkPrivateKey;
            }
            if (this._cn !== undefined) {
                hasAnyValues = true;
                internalValueResult.cn = this._cn;
            }
            if (this._complianceStatus !== undefined) {
                hasAnyValues = true;
                internalValueResult.complianceStatus = this._complianceStatus;
            }
            if (this._connectionId !== undefined) {
                hasAnyValues = true;
                internalValueResult.connectionId = this._connectionId;
            }
            if (this._countOperator !== undefined) {
                hasAnyValues = true;
                internalValueResult.countOperator = this._countOperator;
            }
            if (this._domain !== undefined) {
                hasAnyValues = true;
                internalValueResult.domain = this._domain;
            }
            if (this._eidLastSeen !== undefined) {
                hasAnyValues = true;
                internalValueResult.eidLastSeen = this._eidLastSeen;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._exists !== undefined) {
                hasAnyValues = true;
                internalValueResult.exists = this._exists;
            }
            if (this._extendedKeyUsage !== undefined) {
                hasAnyValues = true;
                internalValueResult.extendedKeyUsage = this._extendedKeyUsage;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._infected !== undefined) {
                hasAnyValues = true;
                internalValueResult.infected = this._infected;
            }
            if (this._isActive !== undefined) {
                hasAnyValues = true;
                internalValueResult.isActive = this._isActive;
            }
            if (this._issueCount !== undefined) {
                hasAnyValues = true;
                internalValueResult.issueCount = this._issueCount;
            }
            if (this._lastSeen !== undefined) {
                hasAnyValues = true;
                internalValueResult.lastSeen = this._lastSeen;
            }
            if (((_a = this._locations) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.locations = (_b = this._locations) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._networkStatus !== undefined) {
                hasAnyValues = true;
                internalValueResult.networkStatus = this._networkStatus;
            }
            if (this._operatingSystem !== undefined) {
                hasAnyValues = true;
                internalValueResult.operatingSystem = this._operatingSystem;
            }
            if (this._operationalState !== undefined) {
                hasAnyValues = true;
                internalValueResult.operationalState = this._operationalState;
            }
            if (this._operator !== undefined) {
                hasAnyValues = true;
                internalValueResult.operator = this._operator;
            }
            if (this._os !== undefined) {
                hasAnyValues = true;
                internalValueResult.os = this._os;
            }
            if (this._osDistroName !== undefined) {
                hasAnyValues = true;
                internalValueResult.osDistroName = this._osDistroName;
            }
            if (this._osDistroRevision !== undefined) {
                hasAnyValues = true;
                internalValueResult.osDistroRevision = this._osDistroRevision;
            }
            if (this._osVersionExtra !== undefined) {
                hasAnyValues = true;
                internalValueResult.osVersionExtra = this._osVersionExtra;
            }
            if (this._overall !== undefined) {
                hasAnyValues = true;
                internalValueResult.overall = this._overall;
            }
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._requireAll !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireAll = this._requireAll;
            }
            if (this._riskLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.riskLevel = this._riskLevel;
            }
            if (this._score !== undefined) {
                hasAnyValues = true;
                internalValueResult.score = this._score;
            }
            if (this._scoreOperator !== undefined) {
                hasAnyValues = true;
                internalValueResult.scoreOperator = this._scoreOperator;
            }
            if (this._sensorConfig !== undefined) {
                hasAnyValues = true;
                internalValueResult.sensorConfig = this._sensorConfig;
            }
            if (this._sha256 !== undefined) {
                hasAnyValues = true;
                internalValueResult.sha256 = this._sha256;
            }
            if (this._state !== undefined) {
                hasAnyValues = true;
                internalValueResult.state = this._state;
            }
            if (this._subjectAlternativeNames !== undefined) {
                hasAnyValues = true;
                internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames;
            }
            if (this._thumbprint !== undefined) {
                hasAnyValues = true;
                internalValueResult.thumbprint = this._thumbprint;
            }
            if (this._totalScore !== undefined) {
                hasAnyValues = true;
                internalValueResult.totalScore = this._totalScore;
            }
            if (this._updateWindowDays !== undefined) {
                hasAnyValues = true;
                internalValueResult.updateWindowDays = this._updateWindowDays;
            }
            if (this._version !== undefined) {
                hasAnyValues = true;
                internalValueResult.version = this._version;
            }
            if (this._versionOperator !== undefined) {
                hasAnyValues = true;
                internalValueResult.versionOperator = this._versionOperator;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._activeThreats = undefined;
                this._authState = undefined;
                this._certificateId = undefined;
                this._checkDisks = undefined;
                this._checkPrivateKey = undefined;
                this._cn = undefined;
                this._complianceStatus = undefined;
                this._connectionId = undefined;
                this._countOperator = undefined;
                this._domain = undefined;
                this._eidLastSeen = undefined;
                this._enabled = undefined;
                this._exists = undefined;
                this._extendedKeyUsage = undefined;
                this._id = undefined;
                this._infected = undefined;
                this._isActive = undefined;
                this._issueCount = undefined;
                this._lastSeen = undefined;
                this._locations.internalValue = undefined;
                this._networkStatus = undefined;
                this._operatingSystem = undefined;
                this._operationalState = undefined;
                this._operator = undefined;
                this._os = undefined;
                this._osDistroName = undefined;
                this._osDistroRevision = undefined;
                this._osVersionExtra = undefined;
                this._overall = undefined;
                this._path = undefined;
                this._requireAll = undefined;
                this._riskLevel = undefined;
                this._score = undefined;
                this._scoreOperator = undefined;
                this._sensorConfig = undefined;
                this._sha256 = undefined;
                this._state = undefined;
                this._subjectAlternativeNames = undefined;
                this._thumbprint = undefined;
                this._totalScore = undefined;
                this._updateWindowDays = undefined;
                this._version = undefined;
                this._versionOperator = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._activeThreats = value.activeThreats;
                this._authState = value.authState;
                this._certificateId = value.certificateId;
                this._checkDisks = value.checkDisks;
                this._checkPrivateKey = value.checkPrivateKey;
                this._cn = value.cn;
                this._complianceStatus = value.complianceStatus;
                this._connectionId = value.connectionId;
                this._countOperator = value.countOperator;
                this._domain = value.domain;
                this._eidLastSeen = value.eidLastSeen;
                this._enabled = value.enabled;
                this._exists = value.exists;
                this._extendedKeyUsage = value.extendedKeyUsage;
                this._id = value.id;
                this._infected = value.infected;
                this._isActive = value.isActive;
                this._issueCount = value.issueCount;
                this._lastSeen = value.lastSeen;
                this._locations.internalValue = value.locations;
                this._networkStatus = value.networkStatus;
                this._operatingSystem = value.operatingSystem;
                this._operationalState = value.operationalState;
                this._operator = value.operator;
                this._os = value.os;
                this._osDistroName = value.osDistroName;
                this._osDistroRevision = value.osDistroRevision;
                this._osVersionExtra = value.osVersionExtra;
                this._overall = value.overall;
                this._path = value.path;
                this._requireAll = value.requireAll;
                this._riskLevel = value.riskLevel;
                this._score = value.score;
                this._scoreOperator = value.scoreOperator;
                this._sensorConfig = value.sensorConfig;
                this._sha256 = value.sha256;
                this._state = value.state;
                this._subjectAlternativeNames = value.subjectAlternativeNames;
                this._thumbprint = value.thumbprint;
                this._totalScore = value.totalScore;
                this._updateWindowDays = value.updateWindowDays;
                this._version = value.version;
                this._versionOperator = value.versionOperator;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "activeThreats", {
        get: function () {
            return this.getNumberAttribute('active_threats');
        },
        set: function (value) {
            this._activeThreats = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetActiveThreats = function () {
        this._activeThreats = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "activeThreatsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activeThreats;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "authState", {
        get: function () {
            return this.getListAttribute('auth_state');
        },
        set: function (value) {
            this._authState = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetAuthState = function () {
        this._authState = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "authStateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetCertificateId = function () {
        this._certificateId = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "checkDisks", {
        get: function () {
            return this.getListAttribute('check_disks');
        },
        set: function (value) {
            this._checkDisks = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetCheckDisks = function () {
        this._checkDisks = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "checkDisksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkDisks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "checkPrivateKey", {
        get: function () {
            return this.getBooleanAttribute('check_private_key');
        },
        set: function (value) {
            this._checkPrivateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetCheckPrivateKey = function () {
        this._checkPrivateKey = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "checkPrivateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkPrivateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "cn", {
        get: function () {
            return this.getStringAttribute('cn');
        },
        set: function (value) {
            this._cn = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetCn = function () {
        this._cn = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "cnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "complianceStatus", {
        get: function () {
            return this.getStringAttribute('compliance_status');
        },
        set: function (value) {
            this._complianceStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetComplianceStatus = function () {
        this._complianceStatus = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "complianceStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._complianceStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetConnectionId = function () {
        this._connectionId = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "countOperator", {
        get: function () {
            return this.getStringAttribute('count_operator');
        },
        set: function (value) {
            this._countOperator = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetCountOperator = function () {
        this._countOperator = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "countOperatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countOperator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetDomain = function () {
        this._domain = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "eidLastSeen", {
        get: function () {
            return this.getStringAttribute('eid_last_seen');
        },
        set: function (value) {
            this._eidLastSeen = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetEidLastSeen = function () {
        this._eidLastSeen = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "eidLastSeenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eidLastSeen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "exists", {
        get: function () {
            return this.getBooleanAttribute('exists');
        },
        set: function (value) {
            this._exists = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetExists = function () {
        this._exists = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "existsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exists;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "extendedKeyUsage", {
        get: function () {
            return this.getListAttribute('extended_key_usage');
        },
        set: function (value) {
            this._extendedKeyUsage = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetExtendedKeyUsage = function () {
        this._extendedKeyUsage = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "extendedKeyUsageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extendedKeyUsage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "infected", {
        get: function () {
            return this.getBooleanAttribute('infected');
        },
        set: function (value) {
            this._infected = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetInfected = function () {
        this._infected = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "infectedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._infected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "isActive", {
        get: function () {
            return this.getBooleanAttribute('is_active');
        },
        set: function (value) {
            this._isActive = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetIsActive = function () {
        this._isActive = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "isActiveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isActive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "issueCount", {
        get: function () {
            return this.getStringAttribute('issue_count');
        },
        set: function (value) {
            this._issueCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetIssueCount = function () {
        this._issueCount = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "issueCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._issueCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "lastSeen", {
        get: function () {
            return this.getStringAttribute('last_seen');
        },
        set: function (value) {
            this._lastSeen = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetLastSeen = function () {
        this._lastSeen = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "lastSeenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lastSeen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "locations", {
        get: function () {
            return this._locations;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.putLocations = function (value) {
        this._locations.internalValue = value;
    };
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetLocations = function () {
        this._locations.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "locationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locations.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "networkStatus", {
        get: function () {
            return this.getStringAttribute('network_status');
        },
        set: function (value) {
            this._networkStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetNetworkStatus = function () {
        this._networkStatus = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "networkStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "operatingSystem", {
        get: function () {
            return this.getStringAttribute('operating_system');
        },
        set: function (value) {
            this._operatingSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOperatingSystem = function () {
        this._operatingSystem = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "operatingSystemInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operatingSystem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "operationalState", {
        get: function () {
            return this.getStringAttribute('operational_state');
        },
        set: function (value) {
            this._operationalState = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOperationalState = function () {
        this._operationalState = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "operationalStateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operationalState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOperator = function () {
        this._operator = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "os", {
        get: function () {
            return this.getStringAttribute('os');
        },
        set: function (value) {
            this._os = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOs = function () {
        this._os = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "osInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._os;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "osDistroName", {
        get: function () {
            return this.getStringAttribute('os_distro_name');
        },
        set: function (value) {
            this._osDistroName = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOsDistroName = function () {
        this._osDistroName = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "osDistroNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._osDistroName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "osDistroRevision", {
        get: function () {
            return this.getStringAttribute('os_distro_revision');
        },
        set: function (value) {
            this._osDistroRevision = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOsDistroRevision = function () {
        this._osDistroRevision = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "osDistroRevisionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._osDistroRevision;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "osVersionExtra", {
        get: function () {
            return this.getStringAttribute('os_version_extra');
        },
        set: function (value) {
            this._osVersionExtra = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOsVersionExtra = function () {
        this._osVersionExtra = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "osVersionExtraInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._osVersionExtra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "overall", {
        get: function () {
            return this.getStringAttribute('overall');
        },
        set: function (value) {
            this._overall = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetOverall = function () {
        this._overall = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "overallInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overall;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "requireAll", {
        get: function () {
            return this.getBooleanAttribute('require_all');
        },
        set: function (value) {
            this._requireAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetRequireAll = function () {
        this._requireAll = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "requireAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "riskLevel", {
        get: function () {
            return this.getStringAttribute('risk_level');
        },
        set: function (value) {
            this._riskLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetRiskLevel = function () {
        this._riskLevel = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "riskLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._riskLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "score", {
        get: function () {
            return this.getNumberAttribute('score');
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetScore = function () {
        this._score = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "scoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "scoreOperator", {
        get: function () {
            return this.getStringAttribute('score_operator');
        },
        set: function (value) {
            this._scoreOperator = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetScoreOperator = function () {
        this._scoreOperator = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "scoreOperatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scoreOperator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "sensorConfig", {
        get: function () {
            return this.getStringAttribute('sensor_config');
        },
        set: function (value) {
            this._sensorConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetSensorConfig = function () {
        this._sensorConfig = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "sensorConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sensorConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "sha256", {
        get: function () {
            return this.getStringAttribute('sha256');
        },
        set: function (value) {
            this._sha256 = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetSha256 = function () {
        this._sha256 = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "sha256Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sha256;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "subjectAlternativeNames", {
        get: function () {
            return this.getListAttribute('subject_alternative_names');
        },
        set: function (value) {
            this._subjectAlternativeNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetSubjectAlternativeNames = function () {
        this._subjectAlternativeNames = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "subjectAlternativeNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subjectAlternativeNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "thumbprint", {
        get: function () {
            return this.getStringAttribute('thumbprint');
        },
        set: function (value) {
            this._thumbprint = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetThumbprint = function () {
        this._thumbprint = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "thumbprintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thumbprint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "totalScore", {
        get: function () {
            return this.getNumberAttribute('total_score');
        },
        set: function (value) {
            this._totalScore = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetTotalScore = function () {
        this._totalScore = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "totalScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._totalScore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "updateWindowDays", {
        get: function () {
            return this.getNumberAttribute('update_window_days');
        },
        set: function (value) {
            this._updateWindowDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetUpdateWindowDays = function () {
        this._updateWindowDays = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "updateWindowDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updateWindowDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "versionOperator", {
        get: function () {
            return this.getStringAttribute('version_operator');
        },
        set: function (value) {
            this._versionOperator = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleInputOutputReference.prototype.resetVersionOperator = function () {
        this._versionOperator = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleInputOutputReference.prototype, "versionOperatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionOperator;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDevicePostureRuleInputOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDevicePostureRuleInputOutputReference = ZeroTrustDevicePostureRuleInputOutputReference;
function zeroTrustDevicePostureRuleMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        platform: cdktf.stringToTerraform(struct.platform),
    };
}
function zeroTrustDevicePostureRuleMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        platform: {
            value: cdktf.stringToHclTerraform(struct.platform),
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
var ZeroTrustDevicePostureRuleMatchOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDevicePostureRuleMatchOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDevicePostureRuleMatchOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDevicePostureRuleMatchOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._platform !== undefined) {
                hasAnyValues = true;
                internalValueResult.platform = this._platform;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._platform = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._platform = value.platform;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRuleMatchOutputReference.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRuleMatchOutputReference.prototype.resetPlatform = function () {
        this._platform = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRuleMatchOutputReference.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDevicePostureRuleMatchOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDevicePostureRuleMatchOutputReference = ZeroTrustDevicePostureRuleMatchOutputReference;
var ZeroTrustDevicePostureRuleMatchList = /** @class */ (function (_super) {
    __extends(ZeroTrustDevicePostureRuleMatchList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDevicePostureRuleMatchList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDevicePostureRuleMatchList.prototype.get = function (index) {
        return new ZeroTrustDevicePostureRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDevicePostureRuleMatchList;
}(cdktf.ComplexList));
exports.ZeroTrustDevicePostureRuleMatchList = ZeroTrustDevicePostureRuleMatchList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}
*/
var ZeroTrustDevicePostureRule = /** @class */ (function (_super) {
    __extends(ZeroTrustDevicePostureRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDevicePostureRuleConfig
    */
    function ZeroTrustDevicePostureRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_rule',
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
        // input - computed: false, optional: true, required: false
        _this._input = new ZeroTrustDevicePostureRuleInputOutputReference(_this, "input");
        // match - computed: false, optional: true, required: false
        _this._match = new ZeroTrustDevicePostureRuleMatchList(_this, "match", false);
        _this._accountId = config.accountId;
        _this._description = config.description;
        _this._expiration = config.expiration;
        _this._input.internalValue = config.input;
        _this._match.internalValue = config.match;
        _this._name = config.name;
        _this._schedule = config.schedule;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureRule to import
    * @param importFromId The id of the existing ZeroTrustDevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureRule to import is found
    */
    ZeroTrustDevicePostureRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRule.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "expiration", {
        get: function () {
            return this.getStringAttribute('expiration');
        },
        set: function (value) {
            this._expiration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRule.prototype.resetExpiration = function () {
        this._expiration = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "expirationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expiration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRule.prototype.putInput = function (value) {
        this._input.internalValue = value;
    };
    ZeroTrustDevicePostureRule.prototype.resetInput = function () {
        this._input.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "inputInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._input.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "match", {
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRule.prototype.putMatch = function (value) {
        this._match.internalValue = value;
    };
    ZeroTrustDevicePostureRule.prototype.resetMatch = function () {
        this._match.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRule.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "schedule", {
        get: function () {
            return this.getStringAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureRule.prototype.resetSchedule = function () {
        this._schedule = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureRule.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDevicePostureRule.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            expiration: cdktf.stringToTerraform(this._expiration),
            input: zeroTrustDevicePostureRuleInputToTerraform(this._input.internalValue),
            match: cdktf.listMapper(zeroTrustDevicePostureRuleMatchToTerraform, false)(this._match.internalValue),
            name: cdktf.stringToTerraform(this._name),
            schedule: cdktf.stringToTerraform(this._schedule),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    ZeroTrustDevicePostureRule.prototype.synthesizeHclAttributes = function () {
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
            expiration: {
                value: cdktf.stringToHclTerraform(this._expiration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input: {
                value: zeroTrustDevicePostureRuleInputToHclTerraform(this._input.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDevicePostureRuleInput",
            },
            match: {
                value: cdktf.listMapperHcl(zeroTrustDevicePostureRuleMatchToHclTerraform, false)(this._match.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDevicePostureRuleMatchList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: cdktf.stringToHclTerraform(this._schedule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    ZeroTrustDevicePostureRule.tfResourceType = "cloudflare_zero_trust_device_posture_rule";
    return ZeroTrustDevicePostureRule;
}(cdktf.TerraformResource));
exports.ZeroTrustDevicePostureRule = ZeroTrustDevicePostureRule;
