import os

DEBUG = True

PER_PAGE = 20
IMG_PATH = '/static/img/'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = 'sqlite:///%s' % (
	os.path.realpath('./db/24hDuJeuReferentDb2016Full')
)

FACEBOOK_CLIENT_ID = '322217561499723'
FACEBOOK_CLIENT_SECRET = 'e8401f063db5bf76cf50e290b91e0cd9'