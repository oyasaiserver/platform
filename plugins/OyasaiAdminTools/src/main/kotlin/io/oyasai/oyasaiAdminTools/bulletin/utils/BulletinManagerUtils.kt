package io.oyasai.oyasaiAdminTools.bulletin.utils

import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey

object BulletinManagerUtils {

  /** Updates an announcement by ID, saves it, and refreshes timers. */
  fun updateAnnouncement(id: String, action: (Announcement) -> Announcement) {
    val list = AnnouncementManager.announcements
    val index = list.indexOfFirst { it.id == id }
    if (index != -1) {
      list[index] = action(list[index])
      AnnouncementManager.save()
      AnnouncementManager.refreshTimers()
    }
  }

  /** Updates a survey by ID, saves it, and refreshes timers. */
  fun updateSurvey(id: String, action: (Survey) -> Survey) {
    val list = SurveyManager.surveys
    val index = list.indexOfFirst { it.id == id }
    if (index != -1) {
      list[index] = action(list[index])
      SurveyManager.save()
      SurveyManager.refreshTimers()
    }
  }
}
