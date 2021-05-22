def get_friends_messages_with_authors():
    """
    Get all the message from those users followed by the current one (extracted from the session)
    :return: list of message, each with the form (user, time stamp, message)
    """
    message_and_authors = []
    for friend in session['friends']:
        texts = load_messages_from_user(friend)
        message_and_authors.extend(texts)
    return message_and_authors


def load_messages_from_user(user):
    """
    Get all the message stored for the given user
    :param user: the user whose message will be returned
    :return: all the message published by the given user as a list of (user, time stamp, message)
    """
    file_path = os.path.join(SITE_ROOT, "data/", user)
    if not os.path.isfile(file_path):
        return []
    with open(file_path, 'r') as f:
        data = json.load(f)
    messages_with_author = [(data["user_name"], message[0], message[1]) for message in data["messages"]]
    return messages_with_author