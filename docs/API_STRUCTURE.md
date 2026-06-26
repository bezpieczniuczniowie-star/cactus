# CACTUS Mailer - API Structure

## Directory Organization

```
apps/api/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── jwt.strategy.ts
│   │   ├── jwt-auth.guard.ts
│   │   ├── api-key.strategy.ts
│   │   ├── api-key.guard.ts
│   │   └── dto/
│   │       ├── login.dto.ts
│   │       ├── register.dto.ts
│   │       └── token.dto.ts
│   ├── keys/
│   │   ├── keys.controller.ts
│   │   ├── keys.service.ts
│   │   ├── keys.module.ts
│   │   ├── entities/
│   │   │   └── api-key.entity.ts
│   │   └── dto/
│   │       ├── create-key.dto.ts
│   │       ├── update-key.dto.ts
│   │       └── list-keys.dto.ts
│   ├── messages/
│   │   ├── messages.controller.ts
│   │   ├── messages.service.ts
│   │   ├── messages.module.ts
│   │   ├── entities/
│   │   │   └── message.entity.ts
│   │   ├── dto/
│   │   │   ├── send-message.dto.ts
│   │   │   ├── send-template.dto.ts
│   │   │   └── list-messages.dto.ts
│   │   └── adapters/
│   │       ├── smtp.adapter.ts
│   │       ├── sendgrid.adapter.ts
│   │       └── aws-ses.adapter.ts
│   ├── templates/
│   │   ├── templates.controller.ts
│   │   ├── templates.service.ts
│   │   ├── templates.module.ts
│   │   ├── entities/
│   │   │   └── template.entity.ts
│   │   └── dto/
│   │       ├── create-template.dto.ts
│   │       └── update-template.dto.ts
│   ├── webhooks/
│   │   ├── webhooks.controller.ts
│   │   ├── webhooks.service.ts
│   │   ├── webhooks.module.ts
│   │   ├── entities/
│   │   │   └── webhook.entity.ts
│   │   └── dto/
│   │       ├── create-webhook.dto.ts
│   │       └── webhook-event.dto.ts
│   ├── analytics/
│   │   ├── analytics.controller.ts
│   │   ├── analytics.service.ts
│   │   ├── analytics.module.ts
│   │   └── dto/
│   │       └── analytics-query.dto.ts
│   ├── tracking/
│   │   ├── tracking.controller.ts
│   │   ├── tracking.service.ts
│   │   ├── tracking.module.ts
│   │   ├── pixel.ts
│   │   └── url-rewriter.ts
│   ├── queue/
│   │   ├── queue.service.ts
│   │   ├── queue.module.ts
│   │   ├── processors/
│   │   │   ├── send-email.processor.ts
│   │   │   ├── webhook.processor.ts
│   │   │   └── cleanup.processor.ts
│   │   └── jobs/
│   │       ├── send-email.job.ts
│   │       ├── send-webhook.job.ts
│   │       └── cleanup.job.ts
│   ├── validation/
│   │   ├── email-validator.service.ts
│   │   ├── validation.module.ts
│   │   └── validators/
│   │       ├── email.validator.ts
│   │       └── api-key.validator.ts
│   ├── common/
│   │   ├── config/
│   │   │   ├── database.config.ts
│   │   │   ├── redis.config.ts
│   │   │   ├── jwt.config.ts
│   │   │   └── mail.config.ts
│   │   ├── exceptions/
│   │   │   ├── invalid-api-key.exception.ts
│   │   │   ├── message-send-error.exception.ts
│   │   │   └── rate-limit.exception.ts
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── interceptors/
│   │   │   ├── logging.interceptor.ts
│   │   │   ├── transform.interceptor.ts
│   │   │   └── error.interceptor.ts
│   │   ├── middleware/
│   │   │   ├── rate-limit.middleware.ts
│   │   │   ├── request-logging.middleware.ts
│   │   │   └── api-key.middleware.ts
│   │   ├── pipes/
│   │   │   └── validation.pipe.ts
│   │   ├── decorators/
│   │   │   ├── api-key.decorator.ts
│   │   │   ├── user.decorator.ts
│   │   │   └── throttle.decorator.ts
│   │   ├── utils/
│   │   │   ├── api-key-generator.ts
│   │   │   ├── email-parser.ts
│   │   │   └── tracking-utils.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   ├── api-key.guard.ts
│   │   │   ├── throttle.guard.ts
│   │   │   └── roles.guard.ts
│   │   └── dto/
│   │       ├── pagination.dto.ts
│   │       ├── error-response.dto.ts
│   │       └── success-response.dto.ts
│   ├── database/
│   │   ├── data-source.ts
│   │   ├── migrations/
│   │   ├── seeds/
│   │   └── factories/
│   ├── app.module.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   ├── auth.e2e-spec.ts
│   ├── messages.e2e-spec.ts
│   ├── jest-e2e.json
│   └── fixtures/
├── Dockerfile
├── Dockerfile.dev
├── .dockerignore
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
└── package.json
```

## Key Files Description

### Authentication (auth/)
- Handle user registration and login
- JWT token management
- API key generation and validation
- OAuth 2.0 support

### API Keys (keys/)
- Create, read, update, delete API keys
- Key rotation and expiration
- Rate limiting per key
- Audit logging

### Messages (messages/)
- Send emails via multiple providers
- Batch email sending
- Message scheduling
- Multi-provider failover

### Templates (templates/)
- Create and manage email templates
- Template variables and rendering
- Version control
- Template testing

### Webhooks (webhooks/)
- Register webhook endpoints
- Event filtering
- Retry logic with exponential backoff
- Signature verification

### Analytics (analytics/)
- Aggregate email metrics
- Custom reporting
- Real-time statistics
- Data export

### Tracking (tracking/)
- Open pixel generation
- Click tracking with URL rewriting
- Event logging
- Geographic/device tracking

### Queue (queue/)
- Asynchronous job processing
- Job retry mechanisms
- Job scheduling
- Dead letter queue

### Validation (validation/)
- Email format validation
- Domain validation
- SMTP validation
- API key validation

### Common (common/)
- Shared configuration
- Exception handling
- Middleware and guards
- Utilities and decorators
- Database utilities

## Database Schema

Key tables:
- `organizations` - Customer accounts
- `api_keys` - API authentication
- `users` - Organization members
- `messages` - Email records
- `message_events` - Email events (sent, opened, clicked, etc.)
- `templates` - Email templates
- `webhooks` - Webhook endpoints
- `webhook_deliveries` - Webhook delivery history
- `suppression_lists` - Bounced/complained emails
- `custom_domains` - Custom sending domains
- `audit_logs` - System audit trail

## API Endpoints

### Authentication
- POST /api/v1/auth/register
- POST /api/v1/auth/login
- POST /api/v1/auth/refresh
- POST /api/v1/auth/logout

### API Keys
- POST /api/v1/keys
- GET /api/v1/keys
- GET /api/v1/keys/:id
- PUT /api/v1/keys/:id
- DELETE /api/v1/keys/:id
- POST /api/v1/keys/:id/rotate

### Messages
- POST /api/v1/messages/send
- POST /api/v1/messages/send-template
- POST /api/v1/messages/send-batch
- GET /api/v1/messages
- GET /api/v1/messages/:id
- GET /api/v1/messages/:id/events

### Templates
- POST /api/v1/templates
- GET /api/v1/templates
- GET /api/v1/templates/:id
- PUT /api/v1/templates/:id
- DELETE /api/v1/templates/:id

### Webhooks
- POST /api/v1/webhooks
- GET /api/v1/webhooks
- GET /api/v1/webhooks/:id
- PUT /api/v1/webhooks/:id
- DELETE /api/v1/webhooks/:id
- GET /api/v1/webhooks/:id/deliveries

### Analytics
- GET /api/v1/analytics
- GET /api/v1/analytics/export
- GET /api/v1/analytics/by-domain
- GET /api/v1/analytics/by-tag

### Tracking
- GET /api/v1/track/open/:messageId (pixel)
- GET /api/v1/track/click/:messageId
- POST /api/v1/track/events

