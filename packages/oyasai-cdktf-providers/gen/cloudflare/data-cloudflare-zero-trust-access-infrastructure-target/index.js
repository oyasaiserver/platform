// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        created_after: cdktf.stringToTerraform(struct.createdAfter),
        created_before: cdktf.stringToTerraform(struct.createdBefore),
        direction: cdktf.stringToTerraform(struct.direction),
        hostname: cdktf.stringToTerraform(struct.hostname),
        hostname_contains: cdktf.stringToTerraform(struct.hostnameContains),
        ip_like: cdktf.stringToTerraform(struct.ipLike),
        ip_v4: cdktf.stringToTerraform(struct.ipV4),
        ip_v6: cdktf.stringToTerraform(struct.ipV6),
        ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ips),
        ipv4_end: cdktf.stringToTerraform(struct.ipv4End),
        ipv4_start: cdktf.stringToTerraform(struct.ipv4Start),
        ipv6_end: cdktf.stringToTerraform(struct.ipv6End),
        ipv6_start: cdktf.stringToTerraform(struct.ipv6Start),
        modified_after: cdktf.stringToTerraform(struct.modifiedAfter),
        modified_before: cdktf.stringToTerraform(struct.modifiedBefore),
        order: cdktf.stringToTerraform(struct.order),
        target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.targetIds),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        created_after: {
            value: cdktf.stringToHclTerraform(struct.createdAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        created_before: {
            value: cdktf.stringToHclTerraform(struct.createdBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname_contains: {
            value: cdktf.stringToHclTerraform(struct.hostnameContains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_like: {
            value: cdktf.stringToHclTerraform(struct.ipLike),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_v4: {
            value: cdktf.stringToHclTerraform(struct.ipV4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_v6: {
            value: cdktf.stringToHclTerraform(struct.ipV6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ips),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ipv4_end: {
            value: cdktf.stringToHclTerraform(struct.ipv4End),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv4_start: {
            value: cdktf.stringToHclTerraform(struct.ipv4Start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_end: {
            value: cdktf.stringToHclTerraform(struct.ipv6End),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_start: {
            value: cdktf.stringToHclTerraform(struct.ipv6Start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        modified_after: {
            value: cdktf.stringToHclTerraform(struct.modifiedAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        modified_before: {
            value: cdktf.stringToHclTerraform(struct.modifiedBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.targetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._createdAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAfter = this._createdAfter;
        }
        if (this._createdBefore !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdBefore = this._createdBefore;
        }
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._hostnameContains !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostnameContains = this._hostnameContains;
        }
        if (this._ipLike !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipLike = this._ipLike;
        }
        if (this._ipV4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipV4 = this._ipV4;
        }
        if (this._ipV6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipV6 = this._ipV6;
        }
        if (this._ips !== undefined) {
            hasAnyValues = true;
            internalValueResult.ips = this._ips;
        }
        if (this._ipv4End !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4End = this._ipv4End;
        }
        if (this._ipv4Start !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Start = this._ipv4Start;
        }
        if (this._ipv6End !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6End = this._ipv6End;
        }
        if (this._ipv6Start !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Start = this._ipv6Start;
        }
        if (this._modifiedAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.modifiedAfter = this._modifiedAfter;
        }
        if (this._modifiedBefore !== undefined) {
            hasAnyValues = true;
            internalValueResult.modifiedBefore = this._modifiedBefore;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._targetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetIds = this._targetIds;
        }
        if (this._virtualNetworkId !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualNetworkId = this._virtualNetworkId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdAfter = undefined;
            this._createdBefore = undefined;
            this._direction = undefined;
            this._hostname = undefined;
            this._hostnameContains = undefined;
            this._ipLike = undefined;
            this._ipV4 = undefined;
            this._ipV6 = undefined;
            this._ips = undefined;
            this._ipv4End = undefined;
            this._ipv4Start = undefined;
            this._ipv6End = undefined;
            this._ipv6Start = undefined;
            this._modifiedAfter = undefined;
            this._modifiedBefore = undefined;
            this._order = undefined;
            this._targetIds = undefined;
            this._virtualNetworkId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdAfter = value.createdAfter;
            this._createdBefore = value.createdBefore;
            this._direction = value.direction;
            this._hostname = value.hostname;
            this._hostnameContains = value.hostnameContains;
            this._ipLike = value.ipLike;
            this._ipV4 = value.ipV4;
            this._ipV6 = value.ipV6;
            this._ips = value.ips;
            this._ipv4End = value.ipv4End;
            this._ipv4Start = value.ipv4Start;
            this._ipv6End = value.ipv6End;
            this._ipv6Start = value.ipv6Start;
            this._modifiedAfter = value.modifiedAfter;
            this._modifiedBefore = value.modifiedBefore;
            this._order = value.order;
            this._targetIds = value.targetIds;
            this._virtualNetworkId = value.virtualNetworkId;
        }
    }
    // created_after - computed: false, optional: true, required: false
    _createdAfter;
    get createdAfter() {
        return this.getStringAttribute('created_after');
    }
    set createdAfter(value) {
        this._createdAfter = value;
    }
    resetCreatedAfter() {
        this._createdAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdAfterInput() {
        return this._createdAfter;
    }
    // created_before - computed: false, optional: true, required: false
    _createdBefore;
    get createdBefore() {
        return this.getStringAttribute('created_before');
    }
    set createdBefore(value) {
        this._createdBefore = value;
    }
    resetCreatedBefore() {
        this._createdBefore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdBeforeInput() {
        return this._createdBefore;
    }
    // direction - computed: false, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // hostname - computed: false, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // hostname_contains - computed: false, optional: true, required: false
    _hostnameContains;
    get hostnameContains() {
        return this.getStringAttribute('hostname_contains');
    }
    set hostnameContains(value) {
        this._hostnameContains = value;
    }
    resetHostnameContains() {
        this._hostnameContains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameContainsInput() {
        return this._hostnameContains;
    }
    // ip_like - computed: false, optional: true, required: false
    _ipLike;
    get ipLike() {
        return this.getStringAttribute('ip_like');
    }
    set ipLike(value) {
        this._ipLike = value;
    }
    resetIpLike() {
        this._ipLike = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipLikeInput() {
        return this._ipLike;
    }
    // ip_v4 - computed: false, optional: true, required: false
    _ipV4;
    get ipV4() {
        return this.getStringAttribute('ip_v4');
    }
    set ipV4(value) {
        this._ipV4 = value;
    }
    resetIpV4() {
        this._ipV4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipV4Input() {
        return this._ipV4;
    }
    // ip_v6 - computed: false, optional: true, required: false
    _ipV6;
    get ipV6() {
        return this.getStringAttribute('ip_v6');
    }
    set ipV6(value) {
        this._ipV6 = value;
    }
    resetIpV6() {
        this._ipV6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipV6Input() {
        return this._ipV6;
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
    // ipv4_end - computed: false, optional: true, required: false
    _ipv4End;
    get ipv4End() {
        return this.getStringAttribute('ipv4_end');
    }
    set ipv4End(value) {
        this._ipv4End = value;
    }
    resetIpv4End() {
        this._ipv4End = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4EndInput() {
        return this._ipv4End;
    }
    // ipv4_start - computed: false, optional: true, required: false
    _ipv4Start;
    get ipv4Start() {
        return this.getStringAttribute('ipv4_start');
    }
    set ipv4Start(value) {
        this._ipv4Start = value;
    }
    resetIpv4Start() {
        this._ipv4Start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4StartInput() {
        return this._ipv4Start;
    }
    // ipv6_end - computed: false, optional: true, required: false
    _ipv6End;
    get ipv6End() {
        return this.getStringAttribute('ipv6_end');
    }
    set ipv6End(value) {
        this._ipv6End = value;
    }
    resetIpv6End() {
        this._ipv6End = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6EndInput() {
        return this._ipv6End;
    }
    // ipv6_start - computed: false, optional: true, required: false
    _ipv6Start;
    get ipv6Start() {
        return this.getStringAttribute('ipv6_start');
    }
    set ipv6Start(value) {
        this._ipv6Start = value;
    }
    resetIpv6Start() {
        this._ipv6Start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6StartInput() {
        return this._ipv6Start;
    }
    // modified_after - computed: false, optional: true, required: false
    _modifiedAfter;
    get modifiedAfter() {
        return this.getStringAttribute('modified_after');
    }
    set modifiedAfter(value) {
        this._modifiedAfter = value;
    }
    resetModifiedAfter() {
        this._modifiedAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modifiedAfterInput() {
        return this._modifiedAfter;
    }
    // modified_before - computed: false, optional: true, required: false
    _modifiedBefore;
    get modifiedBefore() {
        return this.getStringAttribute('modified_before');
    }
    set modifiedBefore(value) {
        this._modifiedBefore = value;
    }
    resetModifiedBefore() {
        this._modifiedBefore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modifiedBeforeInput() {
        return this._modifiedBefore;
    }
    // order - computed: false, optional: true, required: false
    _order;
    get order() {
        return this.getStringAttribute('order');
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
    // target_ids - computed: false, optional: true, required: false
    _targetIds;
    get targetIds() {
        return this.getListAttribute('target_ids');
    }
    set targetIds(value) {
        this._targetIds = value;
    }
    resetTargetIds() {
        this._targetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetIdsInput() {
        return this._targetIds;
    }
    // virtual_network_id - computed: false, optional: true, required: false
    _virtualNetworkId;
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
    set virtualNetworkId(value) {
        this._virtualNetworkId = value;
    }
    resetVirtualNetworkId() {
        this._virtualNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get virtualNetworkIdInput() {
        return this._virtualNetworkId;
    }
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ip_addr - computed: true, optional: false, required: false
    get ipAddr() {
        return this.getStringAttribute('ip_addr');
    }
    // virtual_network_id - computed: true, optional: false, required: false
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ip_addr - computed: true, optional: false, required: false
    get ipAddr() {
        return this.getStringAttribute('ip_addr');
    }
    // virtual_network_id - computed: true, optional: false, required: false
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ipv4 - computed: true, optional: false, required: false
    _ipv4 = new DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(this, "ipv4");
    get ipv4() {
        return this._ipv4;
    }
    // ipv6 - computed: true, optional: false, required: false
    _ipv6 = new DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(this, "ipv6");
    get ipv6() {
        return this._ipv6;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
export class DataCloudflareZeroTrustAccessInfrastructureTarget extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTarget to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTarget to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_target", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessInfrastructureTargetConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_target',
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
        this._filter.internalValue = config.filter;
        this._targetId = config.targetId;
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ip - computed: true, optional: false, required: false
    _ip = new DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // target_id - computed: false, optional: true, required: false
    _targetId;
    get targetId() {
        return this.getStringAttribute('target_id');
    }
    set targetId(value) {
        this._targetId = value;
    }
    resetTargetId() {
        this._targetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetIdInput() {
        return this._targetId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform(this._filter.internalValue),
            target_id: cdktf.stringToTerraform(this._targetId),
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
            filter: {
                value: dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustAccessInfrastructureTargetFilter",
            },
            target_id: {
                value: cdktf.stringToHclTerraform(this._targetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
