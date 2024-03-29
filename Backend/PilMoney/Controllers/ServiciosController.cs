﻿using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class ServiciosController : ApiController
    {
        // GET: api/Servicios
        [HttpGet]
        public IHttpActionResult Get()
        {
            GestorServicios gServicio = new GestorServicios();
            List<Servicios> l = gServicio.ListarServicios();
            return Ok(l);
        }

        // GET: api/Servicios/5
        public Servicios Get(int id)
        {
            GestorServicios gServicio = new GestorServicios();
            return gServicio.ObtenerServicioPorId(id);
        }

        // POST: api/Servicios
        public HttpResponseMessage Post(Servicios s)
        {
            if (ModelState.IsValid)
            {
                GestorServicios gServicio = new GestorServicios();
                gServicio.RegistrarServicio(s);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT: api/Servicios/5
       

        // DELETE: api/Servicios/5
        public void Delete(int id)
        {
            GestorServicios gServicio = new GestorServicios();
            gServicio.EliminarServicio(id);
        }
    }
}
