"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record
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
exports.DnsRecord = exports.DnsRecordSettingsOutputReference = exports.DnsRecordDataOutputReference = void 0;
exports.dnsRecordDataToTerraform = dnsRecordDataToTerraform;
exports.dnsRecordDataToHclTerraform = dnsRecordDataToHclTerraform;
exports.dnsRecordSettingsToTerraform = dnsRecordSettingsToTerraform;
exports.dnsRecordSettingsToHclTerraform = dnsRecordSettingsToHclTerraform;
var cdktf = require("cdktf");
function dnsRecordDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        algorithm: cdktf.numberToTerraform(struct.algorithm),
        altitude: cdktf.numberToTerraform(struct.altitude),
        certificate: cdktf.stringToTerraform(struct.certificate),
        digest: cdktf.stringToTerraform(struct.digest),
        digest_type: cdktf.numberToTerraform(struct.digestType),
        fingerprint: cdktf.stringToTerraform(struct.fingerprint),
        flags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.flags),
        key_tag: cdktf.numberToTerraform(struct.keyTag),
        lat_degrees: cdktf.numberToTerraform(struct.latDegrees),
        lat_direction: cdktf.stringToTerraform(struct.latDirection),
        lat_minutes: cdktf.numberToTerraform(struct.latMinutes),
        lat_seconds: cdktf.numberToTerraform(struct.latSeconds),
        long_degrees: cdktf.numberToTerraform(struct.longDegrees),
        long_direction: cdktf.stringToTerraform(struct.longDirection),
        long_minutes: cdktf.numberToTerraform(struct.longMinutes),
        long_seconds: cdktf.numberToTerraform(struct.longSeconds),
        matching_type: cdktf.numberToTerraform(struct.matchingType),
        order: cdktf.numberToTerraform(struct.order),
        port: cdktf.numberToTerraform(struct.port),
        precision_horz: cdktf.numberToTerraform(struct.precisionHorz),
        precision_vert: cdktf.numberToTerraform(struct.precisionVert),
        preference: cdktf.numberToTerraform(struct.preference),
        priority: cdktf.numberToTerraform(struct.priority),
        protocol: cdktf.numberToTerraform(struct.protocol),
        public_key: cdktf.stringToTerraform(struct.publicKey),
        regex: cdktf.stringToTerraform(struct.regex),
        replacement: cdktf.stringToTerraform(struct.replacement),
        selector: cdktf.numberToTerraform(struct.selector),
        service: cdktf.stringToTerraform(struct.service),
        size: cdktf.numberToTerraform(struct.size),
        tag: cdktf.stringToTerraform(struct.tag),
        target: cdktf.stringToTerraform(struct.target),
        type: cdktf.numberToTerraform(struct.type),
        usage: cdktf.numberToTerraform(struct.usage),
        value: cdktf.stringToTerraform(struct.value),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function dnsRecordDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        algorithm: {
            value: cdktf.numberToHclTerraform(struct.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        altitude: {
            value: cdktf.numberToHclTerraform(struct.altitude),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        certificate: {
            value: cdktf.stringToHclTerraform(struct.certificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        digest: {
            value: cdktf.stringToHclTerraform(struct.digest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        digest_type: {
            value: cdktf.numberToHclTerraform(struct.digestType),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        fingerprint: {
            value: cdktf.stringToHclTerraform(struct.fingerprint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        flags: {
            value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct.flags),
            isBlock: false,
            type: "map",
            storageClassType: "anyMap",
        },
        key_tag: {
            value: cdktf.numberToHclTerraform(struct.keyTag),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lat_degrees: {
            value: cdktf.numberToHclTerraform(struct.latDegrees),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lat_direction: {
            value: cdktf.stringToHclTerraform(struct.latDirection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lat_minutes: {
            value: cdktf.numberToHclTerraform(struct.latMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lat_seconds: {
            value: cdktf.numberToHclTerraform(struct.latSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        long_degrees: {
            value: cdktf.numberToHclTerraform(struct.longDegrees),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        long_direction: {
            value: cdktf.stringToHclTerraform(struct.longDirection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        long_minutes: {
            value: cdktf.numberToHclTerraform(struct.longMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        long_seconds: {
            value: cdktf.numberToHclTerraform(struct.longSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        matching_type: {
            value: cdktf.numberToHclTerraform(struct.matchingType),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        order: {
            value: cdktf.numberToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        precision_horz: {
            value: cdktf.numberToHclTerraform(struct.precisionHorz),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        precision_vert: {
            value: cdktf.numberToHclTerraform(struct.precisionVert),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        preference: {
            value: cdktf.numberToHclTerraform(struct.preference),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktf.numberToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        public_key: {
            value: cdktf.stringToHclTerraform(struct.publicKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        regex: {
            value: cdktf.stringToHclTerraform(struct.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replacement: {
            value: cdktf.stringToHclTerraform(struct.replacement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        selector: {
            value: cdktf.numberToHclTerraform(struct.selector),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size: {
            value: cdktf.numberToHclTerraform(struct.size),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        tag: {
            value: cdktf.stringToHclTerraform(struct.tag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.numberToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        usage: {
            value: cdktf.numberToHclTerraform(struct.usage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktf.numberToHclTerraform(struct.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DnsRecordDataOutputReference = /** @class */ (function (_super) {
    __extends(DnsRecordDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DnsRecordDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._algorithm !== undefined) {
                hasAnyValues = true;
                internalValueResult.algorithm = this._algorithm;
            }
            if (this._altitude !== undefined) {
                hasAnyValues = true;
                internalValueResult.altitude = this._altitude;
            }
            if (this._certificate !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificate = this._certificate;
            }
            if (this._digest !== undefined) {
                hasAnyValues = true;
                internalValueResult.digest = this._digest;
            }
            if (this._digestType !== undefined) {
                hasAnyValues = true;
                internalValueResult.digestType = this._digestType;
            }
            if (this._fingerprint !== undefined) {
                hasAnyValues = true;
                internalValueResult.fingerprint = this._fingerprint;
            }
            if (this._flags !== undefined) {
                hasAnyValues = true;
                internalValueResult.flags = this._flags;
            }
            if (this._keyTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.keyTag = this._keyTag;
            }
            if (this._latDegrees !== undefined) {
                hasAnyValues = true;
                internalValueResult.latDegrees = this._latDegrees;
            }
            if (this._latDirection !== undefined) {
                hasAnyValues = true;
                internalValueResult.latDirection = this._latDirection;
            }
            if (this._latMinutes !== undefined) {
                hasAnyValues = true;
                internalValueResult.latMinutes = this._latMinutes;
            }
            if (this._latSeconds !== undefined) {
                hasAnyValues = true;
                internalValueResult.latSeconds = this._latSeconds;
            }
            if (this._longDegrees !== undefined) {
                hasAnyValues = true;
                internalValueResult.longDegrees = this._longDegrees;
            }
            if (this._longDirection !== undefined) {
                hasAnyValues = true;
                internalValueResult.longDirection = this._longDirection;
            }
            if (this._longMinutes !== undefined) {
                hasAnyValues = true;
                internalValueResult.longMinutes = this._longMinutes;
            }
            if (this._longSeconds !== undefined) {
                hasAnyValues = true;
                internalValueResult.longSeconds = this._longSeconds;
            }
            if (this._matchingType !== undefined) {
                hasAnyValues = true;
                internalValueResult.matchingType = this._matchingType;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._precisionHorz !== undefined) {
                hasAnyValues = true;
                internalValueResult.precisionHorz = this._precisionHorz;
            }
            if (this._precisionVert !== undefined) {
                hasAnyValues = true;
                internalValueResult.precisionVert = this._precisionVert;
            }
            if (this._preference !== undefined) {
                hasAnyValues = true;
                internalValueResult.preference = this._preference;
            }
            if (this._priority !== undefined) {
                hasAnyValues = true;
                internalValueResult.priority = this._priority;
            }
            if (this._protocol !== undefined) {
                hasAnyValues = true;
                internalValueResult.protocol = this._protocol;
            }
            if (this._publicKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.publicKey = this._publicKey;
            }
            if (this._regex !== undefined) {
                hasAnyValues = true;
                internalValueResult.regex = this._regex;
            }
            if (this._replacement !== undefined) {
                hasAnyValues = true;
                internalValueResult.replacement = this._replacement;
            }
            if (this._selector !== undefined) {
                hasAnyValues = true;
                internalValueResult.selector = this._selector;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            if (this._size !== undefined) {
                hasAnyValues = true;
                internalValueResult.size = this._size;
            }
            if (this._tag !== undefined) {
                hasAnyValues = true;
                internalValueResult.tag = this._tag;
            }
            if (this._target !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = this._target;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._usage !== undefined) {
                hasAnyValues = true;
                internalValueResult.usage = this._usage;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            if (this._weight !== undefined) {
                hasAnyValues = true;
                internalValueResult.weight = this._weight;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._algorithm = undefined;
                this._altitude = undefined;
                this._certificate = undefined;
                this._digest = undefined;
                this._digestType = undefined;
                this._fingerprint = undefined;
                this._flags = undefined;
                this._keyTag = undefined;
                this._latDegrees = undefined;
                this._latDirection = undefined;
                this._latMinutes = undefined;
                this._latSeconds = undefined;
                this._longDegrees = undefined;
                this._longDirection = undefined;
                this._longMinutes = undefined;
                this._longSeconds = undefined;
                this._matchingType = undefined;
                this._order = undefined;
                this._port = undefined;
                this._precisionHorz = undefined;
                this._precisionVert = undefined;
                this._preference = undefined;
                this._priority = undefined;
                this._protocol = undefined;
                this._publicKey = undefined;
                this._regex = undefined;
                this._replacement = undefined;
                this._selector = undefined;
                this._service = undefined;
                this._size = undefined;
                this._tag = undefined;
                this._target = undefined;
                this._type = undefined;
                this._usage = undefined;
                this._value = undefined;
                this._weight = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._algorithm = value.algorithm;
                this._altitude = value.altitude;
                this._certificate = value.certificate;
                this._digest = value.digest;
                this._digestType = value.digestType;
                this._fingerprint = value.fingerprint;
                this._flags = value.flags;
                this._keyTag = value.keyTag;
                this._latDegrees = value.latDegrees;
                this._latDirection = value.latDirection;
                this._latMinutes = value.latMinutes;
                this._latSeconds = value.latSeconds;
                this._longDegrees = value.longDegrees;
                this._longDirection = value.longDirection;
                this._longMinutes = value.longMinutes;
                this._longSeconds = value.longSeconds;
                this._matchingType = value.matchingType;
                this._order = value.order;
                this._port = value.port;
                this._precisionHorz = value.precisionHorz;
                this._precisionVert = value.precisionVert;
                this._preference = value.preference;
                this._priority = value.priority;
                this._protocol = value.protocol;
                this._publicKey = value.publicKey;
                this._regex = value.regex;
                this._replacement = value.replacement;
                this._selector = value.selector;
                this._service = value.service;
                this._size = value.size;
                this._tag = value.tag;
                this._target = value.target;
                this._type = value.type;
                this._usage = value.usage;
                this._value = value.value;
                this._weight = value.weight;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "algorithm", {
        get: function () {
            return this.getNumberAttribute('algorithm');
        },
        set: function (value) {
            this._algorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetAlgorithm = function () {
        this._algorithm = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "algorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._algorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "altitude", {
        get: function () {
            return this.getNumberAttribute('altitude');
        },
        set: function (value) {
            this._altitude = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetAltitude = function () {
        this._altitude = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "altitudeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._altitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetCertificate = function () {
        this._certificate = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "digest", {
        get: function () {
            return this.getStringAttribute('digest');
        },
        set: function (value) {
            this._digest = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetDigest = function () {
        this._digest = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "digestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._digest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "digestType", {
        get: function () {
            return this.getNumberAttribute('digest_type');
        },
        set: function (value) {
            this._digestType = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetDigestType = function () {
        this._digestType = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "digestTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._digestType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "fingerprint", {
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        set: function (value) {
            this._fingerprint = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetFingerprint = function () {
        this._fingerprint = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "fingerprintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fingerprint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "flags", {
        get: function () {
            return this.getAnyMapAttribute('flags');
        },
        set: function (value) {
            this._flags = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetFlags = function () {
        this._flags = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "flagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._flags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "keyTag", {
        get: function () {
            return this.getNumberAttribute('key_tag');
        },
        set: function (value) {
            this._keyTag = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetKeyTag = function () {
        this._keyTag = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "keyTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latDegrees", {
        get: function () {
            return this.getNumberAttribute('lat_degrees');
        },
        set: function (value) {
            this._latDegrees = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLatDegrees = function () {
        this._latDegrees = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latDegreesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latDegrees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latDirection", {
        get: function () {
            return this.getStringAttribute('lat_direction');
        },
        set: function (value) {
            this._latDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLatDirection = function () {
        this._latDirection = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latDirectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latDirection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latMinutes", {
        get: function () {
            return this.getNumberAttribute('lat_minutes');
        },
        set: function (value) {
            this._latMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLatMinutes = function () {
        this._latMinutes = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latSeconds", {
        get: function () {
            return this.getNumberAttribute('lat_seconds');
        },
        set: function (value) {
            this._latSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLatSeconds = function () {
        this._latSeconds = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "latSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longDegrees", {
        get: function () {
            return this.getNumberAttribute('long_degrees');
        },
        set: function (value) {
            this._longDegrees = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLongDegrees = function () {
        this._longDegrees = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longDegreesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._longDegrees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longDirection", {
        get: function () {
            return this.getStringAttribute('long_direction');
        },
        set: function (value) {
            this._longDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLongDirection = function () {
        this._longDirection = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longDirectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._longDirection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longMinutes", {
        get: function () {
            return this.getNumberAttribute('long_minutes');
        },
        set: function (value) {
            this._longMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLongMinutes = function () {
        this._longMinutes = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._longMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longSeconds", {
        get: function () {
            return this.getNumberAttribute('long_seconds');
        },
        set: function (value) {
            this._longSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetLongSeconds = function () {
        this._longSeconds = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "longSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._longSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "matchingType", {
        get: function () {
            return this.getNumberAttribute('matching_type');
        },
        set: function (value) {
            this._matchingType = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetMatchingType = function () {
        this._matchingType = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "matchingTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchingType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "order", {
        get: function () {
            return this.getNumberAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "precisionHorz", {
        get: function () {
            return this.getNumberAttribute('precision_horz');
        },
        set: function (value) {
            this._precisionHorz = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetPrecisionHorz = function () {
        this._precisionHorz = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "precisionHorzInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._precisionHorz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "precisionVert", {
        get: function () {
            return this.getNumberAttribute('precision_vert');
        },
        set: function (value) {
            this._precisionVert = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetPrecisionVert = function () {
        this._precisionVert = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "precisionVertInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._precisionVert;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "preference", {
        get: function () {
            return this.getNumberAttribute('preference');
        },
        set: function (value) {
            this._preference = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetPreference = function () {
        this._preference = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "preferenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preference;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "protocol", {
        get: function () {
            return this.getNumberAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetProtocol = function () {
        this._protocol = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "publicKey", {
        get: function () {
            return this.getStringAttribute('public_key');
        },
        set: function (value) {
            this._publicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetPublicKey = function () {
        this._publicKey = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "publicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "regex", {
        get: function () {
            return this.getStringAttribute('regex');
        },
        set: function (value) {
            this._regex = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetRegex = function () {
        this._regex = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "regexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "replacement", {
        get: function () {
            return this.getStringAttribute('replacement');
        },
        set: function (value) {
            this._replacement = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetReplacement = function () {
        this._replacement = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "replacementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replacement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "selector", {
        get: function () {
            return this.getNumberAttribute('selector');
        },
        set: function (value) {
            this._selector = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetSelector = function () {
        this._selector = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "selectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "size", {
        get: function () {
            return this.getNumberAttribute('size');
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetSize = function () {
        this._size = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "sizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "tag", {
        get: function () {
            return this.getStringAttribute('tag');
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetTag = function () {
        this._tag = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "tagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "type", {
        get: function () {
            return this.getNumberAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "usage", {
        get: function () {
            return this.getNumberAttribute('usage');
        },
        set: function (value) {
            this._usage = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetUsage = function () {
        this._usage = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "usageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "weight", {
        get: function () {
            return this.getNumberAttribute('weight');
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordDataOutputReference.prototype.resetWeight = function () {
        this._weight = undefined;
    };
    Object.defineProperty(DnsRecordDataOutputReference.prototype, "weightInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    return DnsRecordDataOutputReference;
}(cdktf.ComplexObject));
exports.DnsRecordDataOutputReference = DnsRecordDataOutputReference;
function dnsRecordSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        flatten_cname: cdktf.booleanToTerraform(struct.flattenCname),
        ipv4_only: cdktf.booleanToTerraform(struct.ipv4Only),
        ipv6_only: cdktf.booleanToTerraform(struct.ipv6Only),
    };
}
function dnsRecordSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        flatten_cname: {
            value: cdktf.booleanToHclTerraform(struct.flattenCname),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ipv4_only: {
            value: cdktf.booleanToHclTerraform(struct.ipv4Only),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ipv6_only: {
            value: cdktf.booleanToHclTerraform(struct.ipv6Only),
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
}
var DnsRecordSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DnsRecordSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DnsRecordSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DnsRecordSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._flattenCname !== undefined) {
                hasAnyValues = true;
                internalValueResult.flattenCname = this._flattenCname;
            }
            if (this._ipv4Only !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4Only = this._ipv4Only;
            }
            if (this._ipv6Only !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6Only = this._ipv6Only;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._flattenCname = undefined;
                this._ipv4Only = undefined;
                this._ipv6Only = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._flattenCname = value.flattenCname;
                this._ipv4Only = value.ipv4Only;
                this._ipv6Only = value.ipv6Only;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordSettingsOutputReference.prototype, "flattenCname", {
        get: function () {
            return this.getBooleanAttribute('flatten_cname');
        },
        set: function (value) {
            this._flattenCname = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordSettingsOutputReference.prototype.resetFlattenCname = function () {
        this._flattenCname = undefined;
    };
    Object.defineProperty(DnsRecordSettingsOutputReference.prototype, "flattenCnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._flattenCname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordSettingsOutputReference.prototype, "ipv4Only", {
        get: function () {
            return this.getBooleanAttribute('ipv4_only');
        },
        set: function (value) {
            this._ipv4Only = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordSettingsOutputReference.prototype.resetIpv4Only = function () {
        this._ipv4Only = undefined;
    };
    Object.defineProperty(DnsRecordSettingsOutputReference.prototype, "ipv4OnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4Only;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecordSettingsOutputReference.prototype, "ipv6Only", {
        get: function () {
            return this.getBooleanAttribute('ipv6_only');
        },
        set: function (value) {
            this._ipv6Only = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecordSettingsOutputReference.prototype.resetIpv6Only = function () {
        this._ipv6Only = undefined;
    };
    Object.defineProperty(DnsRecordSettingsOutputReference.prototype, "ipv6OnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Only;
        },
        enumerable: false,
        configurable: true
    });
    return DnsRecordSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DnsRecordSettingsOutputReference = DnsRecordSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record cloudflare_dns_record}
*/
var DnsRecord = /** @class */ (function (_super) {
    __extends(DnsRecord, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record cloudflare_dns_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsRecordConfig
    */
    function DnsRecord(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_record',
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
        // data - computed: false, optional: true, required: false
        _this._data = new DnsRecordDataOutputReference(_this, "data");
        // settings - computed: true, optional: true, required: false
        _this._settings = new DnsRecordSettingsOutputReference(_this, "settings");
        _this._comment = config.comment;
        _this._content = config.content;
        _this._data.internalValue = config.data;
        _this._name = config.name;
        _this._priority = config.priority;
        _this._privateRouting = config.privateRouting;
        _this._proxied = config.proxied;
        _this._settings.internalValue = config.settings;
        _this._tags = config.tags;
        _this._ttl = config.ttl;
        _this._type = config.type;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsRecord to import
    * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsRecord to import is found
    */
    DnsRecord.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_record", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DnsRecord.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "commentModifiedOn", {
        // comment_modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment_modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.putData = function (value) {
        this._data.internalValue = value;
    };
    DnsRecord.prototype.resetData = function () {
        this._data.internalValue = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "dataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._data.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "privateRouting", {
        get: function () {
            return this.getBooleanAttribute('private_routing');
        },
        set: function (value) {
            this._privateRouting = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.resetPrivateRouting = function () {
        this._privateRouting = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "privateRoutingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "proxiable", {
        // proxiable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxiable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "proxied", {
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        set: function (value) {
            this._proxied = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.resetProxied = function () {
        this._proxied = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "proxiedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.putSettings = function (value) {
        this._settings.internalValue = value;
    };
    DnsRecord.prototype.resetSettings = function () {
        this._settings.internalValue = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "tags", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tags'));
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "tagsModifiedOn", {
        // tags_modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tags_modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsRecord.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DnsRecord.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DnsRecord.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            content: cdktf.stringToTerraform(this._content),
            data: dnsRecordDataToTerraform(this._data.internalValue),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
            private_routing: cdktf.booleanToTerraform(this._privateRouting),
            proxied: cdktf.booleanToTerraform(this._proxied),
            settings: dnsRecordSettingsToTerraform(this._settings.internalValue),
            tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
            ttl: cdktf.numberToTerraform(this._ttl),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DnsRecord.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            comment: {
                value: cdktf.stringToHclTerraform(this._comment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content: {
                value: cdktf.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data: {
                value: dnsRecordDataToHclTerraform(this._data.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DnsRecordData",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            private_routing: {
                value: cdktf.booleanToHclTerraform(this._privateRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            proxied: {
                value: cdktf.booleanToHclTerraform(this._proxied),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            settings: {
                value: dnsRecordSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DnsRecordSettings",
            },
            tags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            ttl: {
                value: cdktf.numberToHclTerraform(this._ttl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DnsRecord.tfResourceType = "cloudflare_dns_record";
    return DnsRecord;
}(cdktf.TerraformResource));
exports.DnsRecord = DnsRecord;
