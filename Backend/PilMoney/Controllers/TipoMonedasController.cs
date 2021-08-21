using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class TipoMonedasController : ApiController
    {
        // GET: api/TipoMonedas
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/TipoMonedas/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TipoMonedas
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TipoMonedas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TipoMonedas/5
        public void Delete(int id)
        {
        }
    }
}
