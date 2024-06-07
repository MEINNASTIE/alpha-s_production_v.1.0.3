#include "mongoose.h"

static const char *s_http_addr = "http://localhost:8000";
static const char *s_root_dir = "dist";

static void handle_request(struct mg_connection *c, int ev, void *ev_data, void *fn_data) {
  if (ev == MG_EV_HTTP_MSG) {
    struct mg_http_message *hm = (struct mg_http_message *) ev_data;
    
    mg_http_serve_file(c, hm, "dist/index.html", NULL);
  }
}

int main(void) {
  struct mg_mgr mgr;
  struct mg_connection *c;
  
  mg_log_set(MG_LL_INFO);
  mg_mgr_init(&mgr);

  c = mg_http_listen(&mgr, s_http_addr, handle_request, NULL);
  if (c == NULL) {
    printf("Error starting server on %s\n", s_http_addr);
    return 1;
  }

  printf("Starting server on %s\n", s_http_addr);
  for (;;) mg_mgr_poll(&mgr, 1000);

  mg_mgr_free(&mgr);
  return 0;
}



