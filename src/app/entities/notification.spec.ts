import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('You have a new friend request.'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
