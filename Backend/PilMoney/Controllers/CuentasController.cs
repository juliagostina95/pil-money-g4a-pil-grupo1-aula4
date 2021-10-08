using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    [RoutePrefix("api/cuentas")]
    public class CuentasController : ApiController
    {
        // GET: api/Cuentas
        [HttpGet]
        public IHttpActionResult Get(string cuil)
        {
            GestorCuentas gCuentas = new GestorCuentas();
            List<Cuentas> l = gCuentas.ListarCuenta(cuil);
            return Ok(l);
        }

        // GET: api/Cuentas/5

        // POST: api/Cuentas
        public HttpResponseMessage Post(Cuentas c)
        {
            if (ModelState.IsValid)
            {
                GestorCuentas gCuentas = new GestorCuentas();
                gCuentas.RegistrarCuenta(c);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        

        // PUT: api/Cuentas/5


        // DELETE: api/Cuentas/5

    }
}
