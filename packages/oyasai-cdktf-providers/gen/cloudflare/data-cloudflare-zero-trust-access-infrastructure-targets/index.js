// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference extends cdktf.ComplexObject {
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
    _ipv4 = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference(this, "ipv4");
    get ipv4() {
        return this._ipv4;
    }
    // ipv6 - computed: true, optional: false, required: false
    _ipv6 = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference(this, "ipv6");
    get ipv6() {
        return this._ipv6;
    }
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
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
    _ip = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
}
export class DataCloudflareZeroTrustAccessInfrastructureTargetsResultList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
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
        return new DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets}
*/
export class DataCloudflareZeroTrustAccessInfrastructureTargets extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_infrastructure_targets";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_targets", importId: importFromId, provider });
    }
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
    constructor(scope, id, config = {}) {
        super(scope, id, {
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
        });
        this._accountId = config.accountId;
        this._createdAfter = config.createdAfter;
        this._createdBefore = config.createdBefore;
        this._direction = config.direction;
        this._hostname = config.hostname;
        this._hostnameContains = config.hostnameContains;
        this._ipLike = config.ipLike;
        this._ipV4 = config.ipV4;
        this._ipV6 = config.ipV6;
        this._ips = config.ips;
        this._ipv4End = config.ipv4End;
        this._ipv4Start = config.ipv4Start;
        this._ipv6End = config.ipv6End;
        this._ipv6Start = config.ipv6Start;
        this._maxItems = config.maxItems;
        this._modifiedAfter = config.modifiedAfter;
        this._modifiedBefore = config.modifiedBefore;
        this._order = config.order;
        this._targetIds = config.targetIds;
        this._virtualNetworkId = config.virtualNetworkId;
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
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
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
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareZeroTrustAccessInfrastructureTargetsResultList(this, "result", false);
    get result() {
        return this._result;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
