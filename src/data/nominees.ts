import { Nominee } from './types';

/**
 * Official Nominees Data Structure
 *
 * Per official protocol, nominee details are published exclusively by Visit Kambata Tour & Event Organization.
 * This structured array is populated as official announcements are released.
 */
export const OFFICIAL_NOMINEES: Nominee[] = [
  // Structured placeholders / ready for official data input:
  // Example future entry:
  // {
  //   id: 'nom-01',
  //   categoryId: 'health-sector',
  //   name: 'Dr. [Official Nominee Name]',
  //   titleOrRole: 'Senior Physician & Community Health Pioneer',
  //   shortAchievement: 'Documented excellence in rural maternal healthcare delivery across Kambata.',
  //   photoUrl: '',
  //   supportingHighlights: ['20+ years clinical service', 'Mobile clinic initiative founder'],
  //   nominationYear: 2026,
  // }
];

export const NOMINEES_STATUS = {
  isAnnounced: false,
  statusNotice: 'Official nominee information will be announced by Visit Kambata Tour & Event Organization.',
  announcementChannel: 'Official press briefing and event presentation portal.',
};
