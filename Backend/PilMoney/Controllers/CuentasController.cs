using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PilMoney.Models;

namespace PilMoney.Controllers
{
    public class CuentasController : Controller
    {
        private PilMoneyEntities db = new PilMoneyEntities();

        // GET: Cuentas
        public ActionResult Index()
        {
            var cuentas = db.Cuentas.Include(c => c.TipoMonedas).Include(c => c.Usuarios);
            return View(cuentas.ToList());
        }

        // GET: Cuentas/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cuentas cuentas = db.Cuentas.Find(id);
            if (cuentas == null)
            {
                return HttpNotFound();
            }
            return View(cuentas);
        }

        // GET: Cuentas/Create
        public ActionResult Create()
        {
            ViewBag.IdTipoMoneda = new SelectList(db.TipoMonedas, "idTipoMoneda", "nombre");
            ViewBag.CUIL = new SelectList(db.Usuarios, "CUIL", "Email");
            return View();
        }

        // POST: Cuentas/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "CVU,Saldo,Alias,TipoDeCaja,IdTipoMoneda,CUIL")] Cuentas cuentas)
        {
            if (ModelState.IsValid)
            {
                db.Cuentas.Add(cuentas);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IdTipoMoneda = new SelectList(db.TipoMonedas, "idTipoMoneda", "nombre", cuentas.IdTipoMoneda);
            ViewBag.CUIL = new SelectList(db.Usuarios, "CUIL", "Email", cuentas.CUIL);
            return View(cuentas);
        }

        // GET: Cuentas/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cuentas cuentas = db.Cuentas.Find(id);
            if (cuentas == null)
            {
                return HttpNotFound();
            }
            ViewBag.IdTipoMoneda = new SelectList(db.TipoMonedas, "idTipoMoneda", "nombre", cuentas.IdTipoMoneda);
            ViewBag.CUIL = new SelectList(db.Usuarios, "CUIL", "Email", cuentas.CUIL);
            return View(cuentas);
        }

        // POST: Cuentas/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "CVU,Saldo,Alias,TipoDeCaja,IdTipoMoneda,CUIL")] Cuentas cuentas)
        {
            if (ModelState.IsValid)
            {
                db.Entry(cuentas).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdTipoMoneda = new SelectList(db.TipoMonedas, "idTipoMoneda", "nombre", cuentas.IdTipoMoneda);
            ViewBag.CUIL = new SelectList(db.Usuarios, "CUIL", "Email", cuentas.CUIL);
            return View(cuentas);
        }

        // GET: Cuentas/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cuentas cuentas = db.Cuentas.Find(id);
            if (cuentas == null)
            {
                return HttpNotFound();
            }
            return View(cuentas);
        }

        // POST: Cuentas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            Cuentas cuentas = db.Cuentas.Find(id);
            db.Cuentas.Remove(cuentas);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
