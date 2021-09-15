using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class TipoMonedasController : ApiController
    {

        // GET: api/TipoMonedas
        /*
        [HttpGet]
        public IHttpActionResult Get()
        {
            GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
            List<TipoMonedas> l = gTipoMoneda.ObtenerTipoMoneda();
            return Ok(l);
        }
        */

        // GET: api/TipoMonedas/1

        [HttpGet]
        public TipoMonedas Get(int id)
        {
            GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
            return gTipoMoneda.ObtenerTipoMonedaPorId(id);
        }

        // POST: api/TipoMonedas
        public HttpResponseMessage Post(TipoMonedas tm)
        {
            if (ModelState.IsValid)
            {
                GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
                gTipoMoneda.RegistrarTipoMoneda(tm);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

        }

        // PUT: api/TipoMonedas/5
        public void Put(TipoMonedas tm)
        {
            GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
            gTipoMoneda.ModificarTipoMoneda(tm);
        }

        // DELETE: api/TipoMonedas/5
        public void Delete(int id)
        {
            GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
            gTipoMoneda.EliminarTipoMoneda(id);
        }
    }
}
