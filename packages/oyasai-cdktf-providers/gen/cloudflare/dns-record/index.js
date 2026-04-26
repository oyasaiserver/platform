// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dnsRecordDataToTerraform(struct) {
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
export function dnsRecordDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DnsRecordDataOutputReference extends cdktf.ComplexObject {
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
    }
    set internalValue(value) {
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
    }
    // algorithm - computed: false, optional: true, required: false
    _algorithm;
    get algorithm() {
        return this.getNumberAttribute('algorithm');
    }
    set algorithm(value) {
        this._algorithm = value;
    }
    resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get algorithmInput() {
        return this._algorithm;
    }
    // altitude - computed: false, optional: true, required: false
    _altitude;
    get altitude() {
        return this.getNumberAttribute('altitude');
    }
    set altitude(value) {
        this._altitude = value;
    }
    resetAltitude() {
        this._altitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get altitudeInput() {
        return this._altitude;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate;
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    set certificate(value) {
        this._certificate = value;
    }
    resetCertificate() {
        this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate;
    }
    // digest - computed: false, optional: true, required: false
    _digest;
    get digest() {
        return this.getStringAttribute('digest');
    }
    set digest(value) {
        this._digest = value;
    }
    resetDigest() {
        this._digest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get digestInput() {
        return this._digest;
    }
    // digest_type - computed: false, optional: true, required: false
    _digestType;
    get digestType() {
        return this.getNumberAttribute('digest_type');
    }
    set digestType(value) {
        this._digestType = value;
    }
    resetDigestType() {
        this._digestType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get digestTypeInput() {
        return this._digestType;
    }
    // fingerprint - computed: false, optional: true, required: false
    _fingerprint;
    get fingerprint() {
        return this.getStringAttribute('fingerprint');
    }
    set fingerprint(value) {
        this._fingerprint = value;
    }
    resetFingerprint() {
        this._fingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fingerprintInput() {
        return this._fingerprint;
    }
    // flags - computed: false, optional: true, required: false
    _flags;
    get flags() {
        return this.getAnyMapAttribute('flags');
    }
    set flags(value) {
        this._flags = value;
    }
    resetFlags() {
        this._flags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get flagsInput() {
        return this._flags;
    }
    // key_tag - computed: false, optional: true, required: false
    _keyTag;
    get keyTag() {
        return this.getNumberAttribute('key_tag');
    }
    set keyTag(value) {
        this._keyTag = value;
    }
    resetKeyTag() {
        this._keyTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyTagInput() {
        return this._keyTag;
    }
    // lat_degrees - computed: false, optional: true, required: false
    _latDegrees;
    get latDegrees() {
        return this.getNumberAttribute('lat_degrees');
    }
    set latDegrees(value) {
        this._latDegrees = value;
    }
    resetLatDegrees() {
        this._latDegrees = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get latDegreesInput() {
        return this._latDegrees;
    }
    // lat_direction - computed: false, optional: true, required: false
    _latDirection;
    get latDirection() {
        return this.getStringAttribute('lat_direction');
    }
    set latDirection(value) {
        this._latDirection = value;
    }
    resetLatDirection() {
        this._latDirection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get latDirectionInput() {
        return this._latDirection;
    }
    // lat_minutes - computed: false, optional: true, required: false
    _latMinutes;
    get latMinutes() {
        return this.getNumberAttribute('lat_minutes');
    }
    set latMinutes(value) {
        this._latMinutes = value;
    }
    resetLatMinutes() {
        this._latMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get latMinutesInput() {
        return this._latMinutes;
    }
    // lat_seconds - computed: false, optional: true, required: false
    _latSeconds;
    get latSeconds() {
        return this.getNumberAttribute('lat_seconds');
    }
    set latSeconds(value) {
        this._latSeconds = value;
    }
    resetLatSeconds() {
        this._latSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get latSecondsInput() {
        return this._latSeconds;
    }
    // long_degrees - computed: false, optional: true, required: false
    _longDegrees;
    get longDegrees() {
        return this.getNumberAttribute('long_degrees');
    }
    set longDegrees(value) {
        this._longDegrees = value;
    }
    resetLongDegrees() {
        this._longDegrees = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get longDegreesInput() {
        return this._longDegrees;
    }
    // long_direction - computed: false, optional: true, required: false
    _longDirection;
    get longDirection() {
        return this.getStringAttribute('long_direction');
    }
    set longDirection(value) {
        this._longDirection = value;
    }
    resetLongDirection() {
        this._longDirection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get longDirectionInput() {
        return this._longDirection;
    }
    // long_minutes - computed: false, optional: true, required: false
    _longMinutes;
    get longMinutes() {
        return this.getNumberAttribute('long_minutes');
    }
    set longMinutes(value) {
        this._longMinutes = value;
    }
    resetLongMinutes() {
        this._longMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get longMinutesInput() {
        return this._longMinutes;
    }
    // long_seconds - computed: false, optional: true, required: false
    _longSeconds;
    get longSeconds() {
        return this.getNumberAttribute('long_seconds');
    }
    set longSeconds(value) {
        this._longSeconds = value;
    }
    resetLongSeconds() {
        this._longSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get longSecondsInput() {
        return this._longSeconds;
    }
    // matching_type - computed: false, optional: true, required: false
    _matchingType;
    get matchingType() {
        return this.getNumberAttribute('matching_type');
    }
    set matchingType(value) {
        this._matchingType = value;
    }
    resetMatchingType() {
        this._matchingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get matchingTypeInput() {
        return this._matchingType;
    }
    // order - computed: false, optional: true, required: false
    _order;
    get order() {
        return this.getNumberAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
    }
    // port - computed: false, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // precision_horz - computed: false, optional: true, required: false
    _precisionHorz;
    get precisionHorz() {
        return this.getNumberAttribute('precision_horz');
    }
    set precisionHorz(value) {
        this._precisionHorz = value;
    }
    resetPrecisionHorz() {
        this._precisionHorz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get precisionHorzInput() {
        return this._precisionHorz;
    }
    // precision_vert - computed: false, optional: true, required: false
    _precisionVert;
    get precisionVert() {
        return this.getNumberAttribute('precision_vert');
    }
    set precisionVert(value) {
        this._precisionVert = value;
    }
    resetPrecisionVert() {
        this._precisionVert = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get precisionVertInput() {
        return this._precisionVert;
    }
    // preference - computed: false, optional: true, required: false
    _preference;
    get preference() {
        return this.getNumberAttribute('preference');
    }
    set preference(value) {
        this._preference = value;
    }
    resetPreference() {
        this._preference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferenceInput() {
        return this._preference;
    }
    // priority - computed: false, optional: true, required: false
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // protocol - computed: false, optional: true, required: false
    _protocol;
    get protocol() {
        return this.getNumberAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // public_key - computed: false, optional: true, required: false
    _publicKey;
    get publicKey() {
        return this.getStringAttribute('public_key');
    }
    set publicKey(value) {
        this._publicKey = value;
    }
    resetPublicKey() {
        this._publicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicKeyInput() {
        return this._publicKey;
    }
    // regex - computed: false, optional: true, required: false
    _regex;
    get regex() {
        return this.getStringAttribute('regex');
    }
    set regex(value) {
        this._regex = value;
    }
    resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regexInput() {
        return this._regex;
    }
    // replacement - computed: false, optional: true, required: false
    _replacement;
    get replacement() {
        return this.getStringAttribute('replacement');
    }
    set replacement(value) {
        this._replacement = value;
    }
    resetReplacement() {
        this._replacement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replacementInput() {
        return this._replacement;
    }
    // selector - computed: false, optional: true, required: false
    _selector;
    get selector() {
        return this.getNumberAttribute('selector');
    }
    set selector(value) {
        this._selector = value;
    }
    resetSelector() {
        this._selector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selectorInput() {
        return this._selector;
    }
    // service - computed: false, optional: true, required: false
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
    }
    // size - computed: false, optional: true, required: false
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    resetSize() {
        this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // tag - computed: false, optional: true, required: false
    _tag;
    get tag() {
        return this.getStringAttribute('tag');
    }
    set tag(value) {
        this._tag = value;
    }
    resetTag() {
        this._tag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagInput() {
        return this._tag;
    }
    // target - computed: false, optional: true, required: false
    _target;
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getNumberAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // usage - computed: false, optional: true, required: false
    _usage;
    get usage() {
        return this.getNumberAttribute('usage');
    }
    set usage(value) {
        this._usage = value;
    }
    resetUsage() {
        this._usage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usageInput() {
        return this._usage;
    }
    // value - computed: false, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
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
}
export function dnsRecordSettingsToTerraform(struct) {
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
export function dnsRecordSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DnsRecordSettingsOutputReference extends cdktf.ComplexObject {
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
    }
    set internalValue(value) {
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
    }
    // flatten_cname - computed: true, optional: true, required: false
    _flattenCname;
    get flattenCname() {
        return this.getBooleanAttribute('flatten_cname');
    }
    set flattenCname(value) {
        this._flattenCname = value;
    }
    resetFlattenCname() {
        this._flattenCname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get flattenCnameInput() {
        return this._flattenCname;
    }
    // ipv4_only - computed: true, optional: true, required: false
    _ipv4Only;
    get ipv4Only() {
        return this.getBooleanAttribute('ipv4_only');
    }
    set ipv4Only(value) {
        this._ipv4Only = value;
    }
    resetIpv4Only() {
        this._ipv4Only = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4OnlyInput() {
        return this._ipv4Only;
    }
    // ipv6_only - computed: true, optional: true, required: false
    _ipv6Only;
    get ipv6Only() {
        return this.getBooleanAttribute('ipv6_only');
    }
    set ipv6Only(value) {
        this._ipv6Only = value;
    }
    resetIpv6Only() {
        this._ipv6Only = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6OnlyInput() {
        return this._ipv6Only;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record cloudflare_dns_record}
*/
export class DnsRecord extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_dns_record";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_record", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._comment = config.comment;
        this._content = config.content;
        this._data.internalValue = config.data;
        this._name = config.name;
        this._priority = config.priority;
        this._privateRouting = config.privateRouting;
        this._proxied = config.proxied;
        this._settings.internalValue = config.settings;
        this._tags = config.tags;
        this._ttl = config.ttl;
        this._type = config.type;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // comment - computed: false, optional: true, required: false
    _comment;
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
    }
    // comment_modified_on - computed: true, optional: false, required: false
    get commentModifiedOn() {
        return this.getStringAttribute('comment_modified_on');
    }
    // content - computed: true, optional: true, required: false
    _content;
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // data - computed: false, optional: true, required: false
    _data = new DnsRecordDataOutputReference(this, "data");
    get data() {
        return this._data;
    }
    putData(value) {
        this._data.internalValue = value;
    }
    resetData() {
        this._data.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataInput() {
        return this._data.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // meta - computed: true, optional: false, required: false
    get meta() {
        return this.getStringAttribute('meta');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
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
    // priority - computed: false, optional: true, required: false
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // private_routing - computed: false, optional: true, required: false
    _privateRouting;
    get privateRouting() {
        return this.getBooleanAttribute('private_routing');
    }
    set privateRouting(value) {
        this._privateRouting = value;
    }
    resetPrivateRouting() {
        this._privateRouting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateRoutingInput() {
        return this._privateRouting;
    }
    // proxiable - computed: true, optional: false, required: false
    get proxiable() {
        return this.getBooleanAttribute('proxiable');
    }
    // proxied - computed: true, optional: true, required: false
    _proxied;
    get proxied() {
        return this.getBooleanAttribute('proxied');
    }
    set proxied(value) {
        this._proxied = value;
    }
    resetProxied() {
        this._proxied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxiedInput() {
        return this._proxied;
    }
    // settings - computed: true, optional: true, required: false
    _settings = new DnsRecordSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    putSettings(value) {
        this._settings.internalValue = value;
    }
    resetSettings() {
        this._settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get settingsInput() {
        return this._settings.internalValue;
    }
    // tags - computed: true, optional: true, required: false
    _tags;
    get tags() {
        return cdktf.Fn.tolist(this.getListAttribute('tags'));
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_modified_on - computed: true, optional: false, required: false
    get tagsModifiedOn() {
        return this.getStringAttribute('tags_modified_on');
    }
    // ttl - computed: false, optional: false, required: true
    _ttl;
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
