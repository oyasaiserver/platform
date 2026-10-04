package icu.oyasai.imageonmap

internal data class NearbyImage(val id: Long, val maps: Int, val distanceSquared: Double)

internal class ViewerMapBudget {
  var received = 0
    private set

  private var reserved = 0

  fun admitNearby(images: Collection<NearbyImage>, limit: Int): List<Long> =
      images
          .sortedWith(compareBy<NearbyImage> { it.distanceSquared }.thenBy { it.id })
          .mapNotNull { image ->
            if (received.toLong() + reserved + image.maps > limit) null
            else {
              reserved += image.maps
              image.id
            }
          }

  fun delivered() {
    reserved--
    received++
  }

  fun releaseQueued(count: Int) {
    reserved -= count
  }

  fun reset() {
    received = 0
    reserved = 0
  }
}
