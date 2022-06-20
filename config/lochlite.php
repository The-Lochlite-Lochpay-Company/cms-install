<?php

return [
    'name' => 'Lochlite CMS',
    'version' => '2.0.5',
    'app' => [
         'name' => Config()->get('app.name', env('APP_NAME', 'App Name')),
         'locale' => Config()->get('app.locale', env('APP_LOCALE', 'pt')),
         'url' => Config()->get('app.url', env('APP_URL', '')),
         'timezone' => Config()->get('app.timezone', env('APP_TIMEZONE', 'America/Sao_Paulo')),
         'debug' => Config()->get('app.debug', (bool) env('APP_DEBUG', false)),
         'env' => Config()->get('app.env', env('APP_ENV', 'production')),
	],
    'session' => [
         'driver' => Config()->get('session.driver', env('SESSION_DRIVER', 'database')),
         'lifetime' => Config()->get('session.lifetime', env('SESSION_LIFETIME', 120)),
	],
    'cache' => [
         'driver' => Config()->get('cache.default', env('CACHE_DRIVER', 'file')),
	],
    'backup' => [
         'key' => env('BACKUP_ARCHIVE_PASSWORD', null),
         'notify' => env('BACKUP_NOTIFY_MAIL', null),
	],
    'database' => [
         'redis' => [
              'url' => Config()->get('database.redis.default.url', env('REDIS_URL', '')),
              'host' => Config()->get('database.redis.default.host', env('REDIS_HOST', '')),
              'port' => Config()->get('database.redis.default.port', env('REDIS_PORT', '')),
              'username' => Config()->get('database.redis.default.username', env('REDIS_USERNAME', '')),
              'password' => Config()->get('database.redis.default.password', env('REDIS_PASSWORD', '')),
              'cache' => [
                 'url' => Config()->get('database.redis.cache.url', env('REDIS_CACHE_URL', '')),
                 'host' => Config()->get('database.redis.cache.host', env('REDIS_CACHE_HOST', '')),
                 'port' => Config()->get('database.redis.cache.port', env('REDIS_CACHE_PORT', '')),
                 'username' => Config()->get('database.redis.cache.username', env('REDIS_CACHE_USERNAME', '')),
                 'password' => Config()->get('database.redis.cache.password', env('REDIS_CACHE_PASSWORD', '')),
		      ],
		 ],
	],
    'broadcasting' => [
         'driver' => Config()->get('broadcasting.default', env('BROADCAST_DRIVER', 'null')),
         'pusher' => [
              'key' => Config()->get('broadcasting.connections.pusher.key', env('PUSHER_KEY', '')),
              'secret' => Config()->get('broadcasting.connections.pusher.secret', env('PUSHER_SECRET', '')),
              'appid' => Config()->get('broadcasting.connections.pusher.app_id', env('PUSHER_APP_ID', '')),
              'cluster' => Config()->get('broadcasting.connections.options.cluster', env('PUSHER_CLUSTER', '')),
		 ],
	],
    'mail' => [
         'driver' => Config()->get('mail.default', env('MAIL_MAILER', 'smtp')),
         'from' => [
             'name' => Config()->get('mail.from.name', env('MAIL_FROM_NAME', '')),
             'address' => Config()->get('mail.from.address', env('MAIL_FROM_ADDRESS', '')),
		 ],
         'smtp' => [
             'host' => Config()->get('mail.mailers.smtp.host', env('MAIL_HOST', '127.0.0.1')),
             'port' => Config()->get('mail.mailers.smtp.port', env('MAIL_PORT', 587)),
             'username' => Config()->get('mail.mailers.smtp.username', env('MAIL_USERNAME', '')),
             'password' => Config()->get('mail.mailers.smtp.password', env('MAIL_PASSWORD', '')),
             'protocol' => Config()->get('mail.mailers.smtp.encryption', env('APP_ENV', 'ssl')),
             'encryption' => Config()->get('mail.mailers.smtp.verify_peer', env('APP_ENV', true)),
		 ],
	],
    'services' => [
         'mailgun' => [
             'domain' => Config()->get('services.mailgun.domain', env('MAILGUM_DOMAIN', '')),
             'secret' => Config()->get('services.mailgun.secret', env('MAILGUM_SECRET', '')),
             'endpoint' => Config()->get('services.mailgun.endpoint', env('MAILGUM_ENDPOINT', '')),
             'context' => Config()->get('services.mailgun.scheme', env('MAILGUM_SCHEME', '')),
		 ],
	],
    'filesystems' => [
         'driver' => Config()->get('filesystems.default', env('FILESYSTEM_DISK', 'local')),
         'sftp' => [
             'host' => Config()->get('filesystems.disks.sftp.host', env('SFTP_HOST', '')),
             'username' => Config()->get('filesystems.disks.sftp.username', env('SFTP_USERNAME', '')),
             'password' => Config()->get('filesystems.disks.sftp.password', env('SFTP_PASSWORD', '')),
             'privateKey' => Config()->get('filesystems.disks.sftp.privateKey', env('SFTP_PRIVATEKEY', '')),
		 ],
        'ftp' => [
             'host' => Config()->get('filesystems.disks.ftp.host', env('FTP_HOST', '')),
             'username' => Config()->get('filesystems.disks.ftp.username', env('FTP_USERNAME', '')),
             'password' => Config()->get('filesystems.disks.ftp.password', env('FTP_PASSWORD', '')),
             'port' => Config()->get('filesystems.disks.ftp.port', env('FTP_PORT', '')),
             'ssl' => Config()->get('filesystems.disks.ftp.ssl', env('FTP_SSL', '')),
             'passive' => Config()->get('filesystems.disks.ftp.passive', env('FTP_PASSIVE', '')),
             'timeout' => Config()->get('filesystems.disks.ftp.timeout', env('FTP_TIMEOUT', '')),
             'root' => Config()->get('filesystems.disks.ftp.root', env('FTP_ROOT', '')),
		 ],
        's3' => [
             'key' => Config()->get('filesystems.disks.s3.key', env('S3_KEY', '')),
             'secret' => Config()->get('filesystems.disks.s3.secret', env('S3_SECRET', '')),
             'region' => Config()->get('filesystems.disks.s3.region', env('S3_REGION', '')),
             'bucket' => Config()->get('filesystems.disks.s3.bucket', env('S3_BUCKET', '')),
             'use_path_style_endpoint' => Config()->get('filesystems.disks.s3.use_path_style_endpoint', env('USE_PATH_STYLE_ENDPOINT', '')),
             'passive' => Config()->get('filesystems.disks.ftp.passive', env('S3_PASSIVE', '')),
             'timeout' => Config()->get('filesystems.disks.ftp.timeout', env('S3_TIMEOUT', '')),
             'root' => Config()->get('filesystems.disks.ftp.root', env('S3_ROOT', '')),
		 ],
	],
    'analytics' => [
         'view_id' => Config()->get('analytics.view_id', env('ANALYTICS_ID', '')),
	],
    'newsletter' => [
         'apiKey' => Config()->get('newsletter.apiKey', env('NEWSLETTER_APIKEY', '')),
         'listid' => Config()->get('newsletter.lists.subscribers.id', env('NEWSLETTER_APIKEY', '')),
	],
];
